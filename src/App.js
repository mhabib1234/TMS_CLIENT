import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AdminLayout from './layouts/AdminLayout'
import TraineeLayout from './layouts/TraineeLayout';
import Signin from './components/Signin';
import AdminRoute from './routes/AuteRoutes/AdminRoute';
import TraineeRoute from './routes/AuteRoutes/TraineeRoute';
import Batch from "./views/ui/Batch"
import AssignTrainee from './views/ui/AssignTrainee';
import AssignTrainer from './views/ui/AssignTrainer';
import ScheduleBatch from './views/ui/ScheduleBatch';
import TrainerRoute from './layouts/TrainerLayout';
import Buttons from './views/ui/Buttons';
import TrainerLayout from './layouts/TrainerLayout';
import TrainerRegister from './views/ui/TrainerRegister';
import TraineeRegister from './views/ui/TraineeRegister';
import Course from './views/ui/Course';

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
          <Route path="admin" element={<AdminLayout />}>
            <Route path="/admin/starter" element={<Starter />} />
            <Route path="/admin/register/trainee" element={<TraineeRegister />} />
            <Route path="/admin/register/trainer" element={<TrainerRegister />} />
            <Route path="/admin/register/batch" element={<Batch />} />
            <Route path="/admin/assign/trainee" element={<AssignTrainee />} />
            <Route path="/admin/assign/trainer" element={<AssignTrainer />} />
            <Route path="/admin/create/course" element={<Course/>} />
            <Route path="/admin/schedule/batch" element={<ScheduleBatch />} />
          </Route>
        </Route>

          <Route element={<TraineeRoute />}>
            <Route path="trainee" element={<TraineeLayout />}>
              <Route path="alerts" element={<Alerts />} />
            </Route>
          </Route>

          <Route element={<TrainerRoute />}>
            <Route path="/trainer" element={<TrainerLayout />}>
              <Route path="/trainer/button" element={<Buttons />} />
            </Route>
          </Route>

          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
