// src/pages/EditPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCrewmateById, updateCrewmate, deleteCrewmate } from '../lib/crewmateApi';

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchCrewmateById(id);
        console.log("Fetched crewmate:", data);
        setForm(data);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError("Failed to load crewmate.");
      }
    }
    loadData();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCrewmate(id, form);
      navigate('/gallery');
    } catch (err) {
      console.error("Update error:", err.message);
      alert('Error updating crewmate');
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this crewmate?')) {
      try {
        await deleteCrewmate(id);
        navigate('/gallery');
      } catch (err) {
        console.error("Delete error:", err.message);
        alert('Error deleting crewmate');
      }
    }
  };

  if (error) return <div className="centered"><p>{error}</p></div>;
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
