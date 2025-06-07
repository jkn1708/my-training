export interface Workout {
  id: string;
  title: string;
}

export async function fetchWorkouts(): Promise<Workout[]> {
  // TODO: fetch workouts from API or database
  return [];
}
