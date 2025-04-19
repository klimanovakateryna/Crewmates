import { createClient } from '@supabase/supabase-js'

const URL = "https://sgvzmzthfzeozytbdvhm.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNndnptenRoZnplb3p5dGJkdmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMTk5NjMsImV4cCI6MjA2MDU5NTk2M30.jH4ClhFnPA_P0NacTZ3lDVLo7lzXlWFf_R4fgug0Q_E"

export const supabase = createClient(URL, API_KEY);
