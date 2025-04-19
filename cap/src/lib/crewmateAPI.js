import { supabase } from './client';

export async function fetchCrewmates() {
  const { data, error } = await supabase
    .from('crewmates')
    .select('*')
    .order('id', { ascending: false });

  if (error) throw error;
  return data;
}

export async function fetchCrewmateById(id) {
  const { data, error } = await supabase
    .from('crewmates')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function createCrewmate(payload) {
  const { data, error } = await supabase
    .from('crewmates')
    .insert([
      {
        name: payload.name,
        breed: payload.breed,
        fur_color: payload.fur_color,
        age_months: payload.age_months,
        character: payload.character || '',
        special_traits: payload.special_traits || ''
      }
    ])
    .select();

  if (error) throw error;
  return data[0];
}

export async function updateCrewmate(id, updates) {
  const { data, error } = await supabase
    .from('crewmates')
    .update(updates)
    .eq('id', id)
    .select();

  if (error) throw error;
  return data[0];
}

export async function deleteCrewmate(id) {
  const { error } = await supabase
    .from('crewmates')
    .delete()
    .eq('id', id);

  if (error) throw error;
  return true;
}