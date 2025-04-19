import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCrewmateById, updateCrewmate, deleteCrewmate } from '../lib/crewmateAPI';

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = parseInt(id, 10); 
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetchCrewmateById(numericId).then(setForm);
  }, [numericId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCrewmate(numericId, form);
    navigate('/gallery');
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this crewmate?')) {
      await deleteCrewmate(numericId);
      navigate('/gallery');
    }
  };

  if (!form) return <div className="centered"><p>Loading...</p></div>;

  return (
    <div className="centered">
      <h1>Edit Crewmate</h1>
      <form onSubmit={handleSubmit} className="form-box">
        <label>
          Name:
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Breed:
          <input name="breed" value={form.breed} onChange={handleChange} required />
        </label>
        <label>
          Fur Color:
          <input name="fur_color" value={form.fur_color} onChange={handleChange} required />
        </label>
        <label>
          Age (months):
          <input
            type="number"
            name="age_months"
            value={form.age_months}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Character:
          <input name="character" value={form.character || ''} onChange={handleChange} />
        </label>
        <label>
          Special Traits:
          <input name="special_traits" value={form.special_traits || ''} onChange={handleChange} />
        </label>
        <button type="submit">Save Changes</button>
        <button
          type="button"
          onClick={handleDelete}
          style={{ marginTop: '1em', backgroundColor: '#e53935', color: '#fff' }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}
