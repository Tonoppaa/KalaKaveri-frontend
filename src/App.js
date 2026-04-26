import { Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import ForgotPasswordForm from './Components/ForgotPasswordForm/ForgotPasswordForm.jsx';
import CreateNewUserForm from './Components/CreateNewUserForm/CreateNewUserForm.jsx';
import ClientFrontPage from './Components/ClientFrontPage/ClientFrontPage.jsx';
import ClientAddCatchPage from './Components/ClientAddCatch/ClientAddCatchPage.jsx';
import ClientFishingAchievements from './Components/ClientFishingAchievements/ClientFishingAchievements.jsx';
import ClientPersonalInfo from './Components/ClientPersonalInfo/ClientPersonalInfo.jsx';
import ClientBrowseCatch from './Components/ClientBrowseCatch/ClientBrowseCatch.jsx';
import ClientRemoveCatch from './Components/ClientRemoveCatch/ClientRemoveCatch.jsx';
import LocationsPage from './Components/Locations/Locations.jsx';
import ClientFishBank from './Components/ClientFishBank/ClientFishBank.jsx';
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
        <Route path="/achievements" element={<ClientFishingAchievements />} />
        <Route path="/personal-info" element={<ClientPersonalInfo />} />
        <Route path="/browse-catch" element={<ClientBrowseCatch />} />
        <Route path="/remove-catch" element={<ClientRemoveCatch />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/fishbank" element={<ClientFishBank />} />
      </Routes>
    </>
  );
}

export default App;