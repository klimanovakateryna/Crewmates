// src/pages/DetailPage.jsx
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCrewmateById } from '../lib/crewmateApi';

export default function DetailPage() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    fetchCrewmateById(id).then(setCrewmate);
  }, [id]);

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div className="centered">
      <h1>Crewmate: {crewmate.name}</h1>
      <p><strong>Breed:</strong> {crewmate.breed}</p>
      <p><strong>Fur Color:</strong> {crewmate.fur_color}</p>
      <p><strong>Age:</strong> {crewmate.age_months} months</p>
      {crewmate.avatar_url && (
        <img
          src={crewmate.avatar_url}
          alt={`Avatar of ${crewmate.name}`}
          style={{ width: '200px', marginTop: '20px', borderRadius: '10px' }}
        />
      )}
      <br />
      <Link to={`/crewmates/${crewmate.id}/edit`}>
        <button>Edit Crewmate</button>
      </Link>
    </div>
  );
}
