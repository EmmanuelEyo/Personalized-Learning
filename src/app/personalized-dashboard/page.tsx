"use client"
import { Provider } from "react-redux";
import { store } from '@/redux/store';
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProtectedRoute from "@/ProtectedRoute";
import HeaderHero from "../components/HeaderHero";
import Chart from "../components/Chart";
import CourseProgressOverview from "../components/CourseProgressOverview";
import { WobbleCardDemo } from "../components/WobbleCardDemo";

const Page = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-4 md:p-6 flex-1 flex flex-col space-y-4">
          <HeaderHero />
          <div className="flex flex-col lg:flex-row md:space-x-4 space-y-4 contain md:space-y-0">
            <div className="bg-slate-900 rounded-2xl p-6 flex-1 w-full max-w-full overflow-hidden">
              <Chart />
            </div>
            <div className="flex-1 max-w-full">
              <CourseProgressOverview />
            </div>
          </div>
          <div className="mt-4">
            <WobbleCardDemo />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProtectedRoute(Page);



