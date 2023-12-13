import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppProvider from './utils/AppProvider';
import { Header, ProtectedRoute, WorkoutForm, GoalForm } from './components';
import { HomePage, AuthPage, Logout, PrivatePage } from './pages/'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){

  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <div className="container pt-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <PrivatePage />
              </ProtectedRoute>
            }/>

            <Route path="/workoutform" element={
              <ProtectedRoute>
                <WorkoutForm />
              </ProtectedRoute>
            }/>

            <Route path="/goalform" element={
              <ProtectedRoute>
                <GoalForm />
              </ProtectedRoute>
            }/>

            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}
