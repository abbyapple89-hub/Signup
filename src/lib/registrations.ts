import { supabase } from "@/lib/supaClient";
import type { Registration } from "@/pages/Index";

type RegistrationRow = {
  id: string;
  name: string;
  student_id: string;
  phone: string;
  team: string;
  reason: string;
  created_at: string;
};

const mapRowToRegistration = (row: RegistrationRow): Registration => ({
  id: row.id,
  name: row.name,
  studentId: row.student_id,
  phone: row.phone,
  team: row.team,
  reason: row.reason,
  timestamp: row.created_at,
});

export async function fetchRegistrations(): Promise<Registration[]> {
  const { data, error } = await supabase
    .from("registrations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data as RegistrationRow[]).map(mapRowToRegistration);
}

export async function createRegistration(input: Omit<Registration, "id" | "timestamp">): Promise<Registration> {
  const { data, error } = await supabase
    .from("registrations")
    .insert({
      name: input.name,
      student_id: input.studentId,
      phone: input.phone,
      team: input.team,
      reason: input.reason,
    })
    .select("*")
    .single();

  if (error) throw error;
  return mapRowToRegistration(data as RegistrationRow);
}

export async function clearRegistrations(): Promise<void> {
  const { error } = await supabase.from("registrations").delete().neq("id", "");
  if (error) throw error;
}
