interface WorkoutListProps {
  workouts: { id: string; title: string }[];
}

export default function WorkoutList({ workouts }: WorkoutListProps) {
  return (
    <ul>
      {workouts.map((workout) => (
        <li key={workout.id}>{workout.title}</li>
      ))}
    </ul>
  );
}
