import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1>Welcome to Workout Tracker</h1>
      <p>Manage your workout routines and track your progress.</p>
      <p>
        <Link href="/workouts">View Workouts</Link>
      </p>
    </section>
  );
}
