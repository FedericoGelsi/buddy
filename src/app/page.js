import LandingHeader from "./landing/LandingHeader";
import LandingHero from "./landing/LandingHero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-start items-center">
      <LandingHeader />
      <LandingHero />
      <p className="text-6xl text-B500">Page under contruction</p>
    </main>
  );
}
