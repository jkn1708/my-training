import type { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Workout Tracker",
  description: "Track your workouts and monitor progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/workouts">Workouts</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <small>&copy; 2024 Workout Tracker</small>
        </footer>
      </body>
    </html>
  );
}
