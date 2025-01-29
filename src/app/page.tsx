import Sidebar from "./components/sidebar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row gap-3 p-2 bg-white h-full xl:h-screen">
      <div className="hidden xl:block w-full">
        <Sidebar />
      </div>
      <Hero />
    </div>
  );
}
