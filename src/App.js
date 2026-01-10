import { Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import ForgotPasswordForm from './Components/ForgotPasswordForm/ForgotPasswordForm.jsx';
import CreateNewUserForm from './Components/CreateNewUserForm/CreateNewUserForm.jsx';
import ClientFrontPage from './Components/ClientFrontPage/ClientFrontPage.jsx';
import ClientAddCatchPage from './Components/ClientAddCatch/ClientAddCatchPage.jsx';
import './App.css';

function App() {
  return (
    <>
      <div className="bubbles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
        <Route path="/register" element={<CreateNewUserForm />} />
        <Route path="/clientfrontpage" element={<ClientFrontPage />} />
        <Route path="/add-catch" element={<ClientAddCatchPage />} />
      </Routes>
    </>
  );
}

export default App;