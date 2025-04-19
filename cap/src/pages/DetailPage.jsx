// src/pages/DetailPage.jsx
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCrewmateById } from '../lib/crewmateAPI';

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
      <p><strong>Character:</strong> {crewmate.character}</p>
      <p><strong>Special Traits:</strong> {crewmate.special_traits}</p>
      <Link to={`/crewmates/${crewmate.id}/edit`}>
        <button>Edit Crewmate</button>
      </Link>
    </div>
  );
}
