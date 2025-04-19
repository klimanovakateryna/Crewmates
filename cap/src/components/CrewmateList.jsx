import { useEffect, useState } from 'react';
import { fetchCrewmates } from '../lib/crewmateApi';
import { Link } from 'react-router-dom';

export default function CrewmateList() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    fetchCrewmates().then(setCrewmates);
  }, []);

  return (
    <ul>
      {crewmates.map(c => (
        <li key={c.id}>
          <Link to={`/crewmates/${c.id}`}>
            {c.name} ({c.breed})
          </Link>
        </li>
      ))}
    </ul>
  );
}
