interface WorkoutDetailPageProps {
  params: { id: string };
}

export default function WorkoutDetailPage({ params }: WorkoutDetailPageProps) {
  const { id } = params;
  return (
    <div>
      <h1>Workout Detail - {id}</h1>
      {/* TODO: show workout detail here */}
    </div>
  );
}
