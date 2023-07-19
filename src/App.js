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
import TrainerRoute from './routes/AuteRoutes/TrainerRoute';
import Buttons from './views/ui/Buttons';
import TrainerLayout from './layouts/TrainerLayout';
import TrainerRegister from './views/ui/TrainerRegister';
import TraineeRegister from './views/ui/TraineeRegister';
import Course from './views/ui/Course';
import Assignment from './views/ui/Assignment';
import TraineeStarter from './views/TraineeStarter';
import Post from './views/ui/Post';
import Notice from './views/ui/Notice';
import Classroom from './views/ui/Classroom';
import ClassroomDetails from './views/ui/ClassroomDetails';

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
            <Route path="/admin/dashboard" element={<Starter />} />
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
              <Route path="/trainee/dashboard" element={<TraineeStarter />} />
            </Route>
          </Route>

          <Route element={<TrainerRoute />}>
            <Route path="trainer" element={<TrainerLayout />}>
              <Route path="/trainer/dashboard" element={<Buttons />} />
              <Route path="/trainer/classroom" element ={<Classroom/>}/>
              <Route path="/trainer/classroom/:classroomName" element ={<ClassroomDetails/>}/>
              <Route path="/trainer/create/assignment" element={<Assignment/>} />
              <Route path="/trainer/create/post" element={<Post/>} />
              <Route path="/trainer/create/notice" element={<Notice/>} />
            </Route>
          </Route>

          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
