import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lazy load components for better performance
const Home = lazy(() => import("@/pages/home"));
const ProjectDetail = lazy(() => import("@/pages/project-detail"));
const SignIn = lazy(() => import("@/pages/sign-in"));
const SignUp = lazy(() => import("@/pages/sign-up"));
const Billing = lazy(() => import("@/pages/billing"));
const BillingSuccess = lazy(() => import("@/pages/billing-success"));
const Chat = lazy(() => import("@/pages/chat"));
const Dashboard = lazy(() => import("@/pages/dashboard"));
const RequireAuth = lazy(() => import("@/components/RequireAuth"));
const RequireAdmin = lazy(() => import("@/components/RequireAdmin"));

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Project routes */}
          <Route path="/project/:projectId" element={<ProjectDetail />} />

          {/* Authentication routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Billing routes */}
          <Route
            path="/billing"
            element={
              <RequireAuth>
                <Billing />
              </RequireAuth>
            }
          />
          <Route
            path="/billing/success"
            element={
              <RequireAuth>
                <BillingSuccess />
              </RequireAuth>
            }
          />

          {/* Chat routes */}
          <Route
            path="/chat"
            element={
              <RequireAuth>
                <Chat />
              </RequireAuth>
            }
          />

          {/* Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <Dashboard />
              </RequireAdmin>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
