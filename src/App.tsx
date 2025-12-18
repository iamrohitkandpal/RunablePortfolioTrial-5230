import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import Snowfall from 'react-snowfall'
import MagneticCursor from './components/MagneticCursor'
import SideNav from './components/SideNav'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function AppContent() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith('/project/');

  return (
    <>
      <Snowfall color='white' />
      <MagneticCursor />
      {!isProjectDetail && <SideNav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App