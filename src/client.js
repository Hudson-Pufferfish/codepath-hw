import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xoexjdihzqmtlyodfpgh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvZXhqZGloenFtdGx5b2RmcGdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzNjY3NzgsImV4cCI6MTk5Njk0Mjc3OH0.dHMa2T3FN7rlN_Y2YpG3NXoEbIY4g8m41vKrRcxeEKY";
export const supabase = createClient(supabaseUrl, supabaseKey);
