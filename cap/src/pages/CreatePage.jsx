// src/pages/CreatePage.jsx
import { useNavigate } from 'react-router-dom';
import CrewmateForm from '../components/CrewmateForm';

export default function CreatePage() {
  const navigate = useNavigate();

  const handleSuccess = (newCrewmate) => {
    navigate('/gallery');
  };

  return (
    <div className="centered">
      <h1>Create a New Crewmate</h1>
      <CrewmateForm onSuccess={handleSuccess} />
    </div>
  );
}
