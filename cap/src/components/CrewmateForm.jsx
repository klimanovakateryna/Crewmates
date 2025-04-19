import { useState } from 'react';
import { createCrewmate } from '../lib/crewmateApi';

export default function CrewmateForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    breed: '',
    fur_color: '',
    age_months: 0
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newCrewmate = await createCrewmate(form);
    onSuccess(newCrewmate);
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      {['name', 'breed', 'fur_color'].map(field => (
        <label key={field}>
          {field.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          <input name={field} value={form[field]} onChange={handleChange} required />
        </label>
      ))}
      <label>
        Age (months)
        <input
          type="number"
          name="age_months"
          value={form.age_months}
          onChange={e => setForm(f => ({ ...f, age_months: +e.target.value }))}
          required
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}
