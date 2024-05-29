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
    <div className="flex bg-slate-950 min-h-screen justify-center">
      <SideBar />
      <div>
        <Navbar />
        <HeaderHero />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl w-full">
          <div className="md:col-span-2 bg-slate-900 p-6 md:p-10 rounded-xl">
            <Chart />
          </div>
          <div className="col-span-1 bg-slate-900 p-6 md:p-10 rounded-xl shadow-md">
            <CourseProgressOverview />
          </div>
        </div>
        <div className="mt-5">
          <WobbleCardDemo />
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoute(Page);



