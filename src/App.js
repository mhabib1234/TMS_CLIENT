import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Signin from './components/Signin';

// Lazy-loaded components
const Starter = lazy(() => import('./views/Starter'));
const Alerts = lazy(() => import('./views/ui/Alerts'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/signin" element={<Signin />} />

          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
