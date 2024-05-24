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
  const courses = [
    { title: 'Course 1' },
    { title: 'Course 2' },
    { title: 'Course 3' },
    // Add more courses as needed
  ];
  return (
    <div className="flex bg-slate-950">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main>
          <HeaderHero />
          <div className="flex flex- space-x-4 ml-28">
            <div className="bg-slate-900 rounded-2xl p-6 w-[40%] flex-1">
              <Chart />
            </div>
            <div className="flex-1">
              <CourseProgressOverview />
            </div>
          </div>
          <div className="mt-4">
            <WobbleCardDemo />
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProtectedRoute(Page)