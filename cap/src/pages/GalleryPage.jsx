// src/pages/GalleryPage.js
import { useEffect, useState } from 'react';
import { fetchCrewmates } from '../lib/crewmateApi';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    fetchCrewmates().then(setCrewmates);
  }, []);

  return (
    <div className="centered">
      <h1>Your Crewmate Gallery!</h1>
      {crewmates.length === 0 ? (
        <p>You haven't made a crewmate yet! <Link to="/create">Create one here!</Link></p>
      ) : (
        <div className="grid">
          {crewmates.map(c => (
            <div className="card" key={c.id}>
              <p><strong>Name:</strong> {c.name}</p>
              <p><strong>Breed:</strong> {c.breed}</p>
              <p><strong>Fur Color:</strong> {c.fur_color}</p>
              <p><strong>Age:</strong> {c.age_months} months</p>
              <Link to={`/crewmates/${c.id}`}>View Details</Link>
              <br />
              <Link to={`/crewmates/${c.id}/edit`}>Edit Crewmate</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}