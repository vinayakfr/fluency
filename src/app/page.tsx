import Sidebar from "./components/sidebar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-3 p-2 bg-white h-full xl:h-screen">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <Hero />
    </div>
  );
}
