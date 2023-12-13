import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppProvider from './utils/AppProvider';
import { Header, ProtectedRoute, WorkoutForm, GoalForm } from './components';
import { HomePage, AuthPage, Logout, PrivatePage } from './pages/'
import 'bootstrap/dist/css/bootstrap.min.css';
import weights from './img/weights.jpg';
export default function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <div className="container pt-5">
          {/* <div style={{
            backgroundImage: `url(${weights})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
            width: '100vw', height: '100vh'
          }}>
          </div> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <PrivatePage />
              </ProtectedRoute>
            } />

            <Route path="/workoutform" element={
              <ProtectedRoute>
                <WorkoutForm />
              </ProtectedRoute>
            } />

            <Route path="/goalform" element={
              <ProtectedRoute>
                <GoalForm />
              </ProtectedRoute>
            } />

            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}
