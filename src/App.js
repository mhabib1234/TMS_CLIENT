import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AdminLayout from './layouts/AdminLayout'
import TraineeLayout from './layouts/TraineeLayout';
import Signin from './components/Signin';
import AdminRoute from './routes/AuteRoutes/AdminRoute';
import TraineeRoute from './routes/AuteRoutes/TraineeRoute';
import TrainerSignup from "./views/ui/TrainerSignup";
import TraineeSignup from './views/ui/TraineeSignup';
import Batch from "./views/ui/Batch"

// Lazy-loaded components
const Starter = lazy(() => import('./views/Starter'));
const Alerts = lazy(() => import('./views/ui/Alerts'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          
          <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/starter" element={<Starter />} />
            <Route path="/admin/register/trainee" element={<TraineeSignup />} />
            <Route path="/admin/register/trainer" element={<TrainerSignup />} />
            <Route path="/admin/register/batch" element={<Batch />} />
          </Route>
        </Route>

          <Route element={<TraineeRoute />}>
            <Route path="trainee" element={<TraineeLayout />}>
              <Route path="alerts" element={<Alerts />} />
            </Route>
          </Route>

          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
