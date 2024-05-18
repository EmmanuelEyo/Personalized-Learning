import Image from "next/image";
import LandingPage from "./pages/LandingPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <LandingPage />
    </main>
  );
}
