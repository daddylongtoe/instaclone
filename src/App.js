import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
