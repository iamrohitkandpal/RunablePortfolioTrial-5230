import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface FlowDiagramProps {
  flow: string;
}

export default function FlowDiagram({ flow }: FlowDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const steps = flow.split('→').map(s => s.trim());
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = svgRef.current.clientWidth;
    const nodeWidth = 180;
    const nodeHeight = 40;
    const horizontalSpacing = 40;
    const verticalSpacing = 60;
    
    // Calculate zigzag layout
    const nodesPerRow = Math.floor((width - 40) / (nodeWidth + horizontalSpacing));
    const rows = Math.ceil(steps.length / nodesPerRow);
    const totalHeight = rows * (nodeHeight + verticalSpacing) + 40;
    
    // Calculate centering offset
    const actualRowWidth = nodesPerRow * nodeWidth + (nodesPerRow - 1) * horizontalSpacing;
    const centerOffset = Math.max(0, (width - actualRowWidth) / 2);

    svg.attr('height', totalHeight);

    const g = svg.append('g').attr('transform', `translate(${centerOffset}, 20)`);

    // Define arrowhead marker
    svg.append('defs').append('marker')
      .attr('id', 'arrowhead')
      .attr('markerWidth', 10)
      .attr('markerHeight', 10)
      .attr('refX', 9)
      .attr('refY', 5)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M 0 0 L 10 5 L 0 10 z')
      .attr('fill', 'var(--foreground)')
      .attr('opacity', 0.5);

    steps.forEach((step, i) => {
      const row = Math.floor(i / nodesPerRow);
      // Zigzag pattern: even rows go left-to-right, odd rows go right-to-left
      const isReversedRow = row % 2 === 1;
      const colInRow = i % nodesPerRow;
      const col = isReversedRow ? (nodesPerRow - 1 - colInRow) : colInRow;
      
      const x = col * (nodeWidth + horizontalSpacing);
      const y = row * (nodeHeight + verticalSpacing);

      const [mainStep] = step.includes('(')
        ? [step.split('(')[0].trim()]
        : [step];

      // Draw arrow to next step
      if (i < steps.length - 1) {
        const nextRow = Math.floor((i + 1) / nodesPerRow);
        const nextIsReversedRow = nextRow % 2 === 1;
        const nextColInRow = (i + 1) % nodesPerRow;
        const nextCol = nextIsReversedRow ? (nodesPerRow - 1 - nextColInRow) : nextColInRow;
        const nextX = nextCol * (nodeWidth + horizontalSpacing);
        const nextY = nextRow * (nodeHeight + verticalSpacing);

        if (row === nextRow) {
          // Horizontal arrow (direction depends on row orientation)
          const startX = isReversedRow ? x : x + nodeWidth;
          const endX = isReversedRow ? nextX + nodeWidth : nextX;
          
          g.append('line')
            .attr('x1', startX)
            .attr('y1', y + nodeHeight / 2)
            .attr('x2', endX)
            .attr('y2', nextY + nodeHeight / 2)
            .attr('stroke', 'var(--foreground)')
            .attr('stroke-width', 2.5)
            .attr('opacity', 0.5)
            .attr('stroke-dasharray', '4,2')
            .attr('marker-end', 'url(#arrowhead)');
        } else {
          // Vertical arrow going down to next row
          const startX = x + nodeWidth / 2;
          const startY = y + nodeHeight;
          const endX = nextX + nodeWidth / 2;
          const endY = nextY;
          
          const path = `M ${startX} ${startY} 
                       L ${startX} ${startY + verticalSpacing / 3}
                       L ${endX} ${endY - verticalSpacing / 3}
                       L ${endX} ${endY}`;
          g.append('path')
            .attr('d', path)
            .attr('stroke', 'var(--foreground)')
            .attr('stroke-width', 2.5)
            .attr('fill', 'none')
            .attr('opacity', 0.5)
            .attr('stroke-dasharray', '4,2')
            .attr('marker-end', 'url(#arrowhead)');
        }
      }

      // Draw node
      const nodeGroup = g.append('g')
        .attr('class', 'flow-node')
        .style('cursor', 'pointer');

      // Add subtle color based on position
      const hue = (i * 137.5) % 360; // Golden angle for color distribution
      const color = `hsl(${hue}, 25%, 20%)`;
      
      nodeGroup.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', nodeWidth)
        .attr('height', nodeHeight)
        .attr('rx', 6)
        .attr('fill', color)
        .attr('stroke', `hsl(${hue}, 35%, 35%)`)
        .attr('stroke-width', 1.5);

      // Add step number circle with color
      nodeGroup.append('circle')
        .attr('cx', x + 20)
        .attr('cy', y + nodeHeight / 2)
        .attr('r', 12)
        .attr('fill', `hsl(${hue}, 45%, 45%)`)
        .attr('opacity', 0.3);

      nodeGroup.append('text')
        .attr('x', x + 20)
        .attr('y', y + nodeHeight / 2)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', 'var(--foreground)')
        .attr('font-size', '11px')
        .attr('font-weight', 'bold')
        .text(i + 1);

      // Add main step text (wrapped to fit inside block)
      const textElement = nodeGroup.append('text')
        .attr('x', x + nodeWidth / 2)
        .attr('y', y + nodeHeight / 2)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', 'var(--foreground)')
        .attr('font-size', '11px')
        .attr('font-weight', '500');

      // Wrap text to fit in node
      const words = mainStep.split(/\s+/);
      let line: string[] = [];
      let lineNumber = 0;
      const maxWidth = nodeWidth - 50; // Leave space for number circle and padding
      const lineHeight = 14;

      words.forEach(word => {
        line.push(word);
        const testLine = line.join(' ');
        const tempText = textElement.append('tspan').text(testLine);
        const textWidth = tempText.node()?.getComputedTextLength() || 0;
        
        if (textWidth > maxWidth && line.length > 1) {
          line.pop();
          textElement.append('tspan')
            .attr('x', x + nodeWidth / 2)
            .attr('text-anchor', 'middle')
            .attr('dy', lineNumber === 0 ? `${-lineNumber * lineHeight / 2}px` : lineHeight)
            .text(line.join(' '));
          line = [word];
          lineNumber++;
        }
        tempText.remove();
      });

      // Add remaining words
      if (line.length > 0) {
        textElement.append('tspan')
          .attr('x', x + nodeWidth / 2)
          .attr('text-anchor', 'middle')
          .attr('dy', lineNumber === 0 ? 0 : lineHeight)
          .text(line.join(' '));
      }

      // Add tooltip with full text
      nodeGroup.append('title').text(mainStep);

      // Hover effects
      nodeGroup.on('mouseenter', function() {
        const hue = (i * 137.5) % 360;
        d3.select(this).select('rect')
          .attr('stroke', `hsl(${hue}, 55%, 55%)`)
          .attr('stroke-width', 2.5)
          .attr('fill', `hsl(${hue}, 30%, 25%)`);
        
        d3.select(this).select('circle')
          .attr('opacity', 0.5);
      });

      nodeGroup.on('mouseleave', function() {
        const hue = (i * 137.5) % 360;
        const color = `hsl(${hue}, 25%, 20%)`;
        d3.select(this).select('rect')
          .attr('stroke', `hsl(${hue}, 35%, 35%)`)
          .attr('stroke-width', 1.5)
          .attr('fill', color);
        
        d3.select(this).select('circle')
          .attr('opacity', 0.3);
      });
    });

  }, [flow]);

  return (
    <div className="w-full overflow-x-auto">
      <svg
        ref={svgRef}
        className="w-full text-muted-foreground"
        style={{ minHeight: '120px' }}
      />
    </div>
  );
}

