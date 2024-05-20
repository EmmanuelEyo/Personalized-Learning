"use client"
import { Provider } from "react-redux";
import { store } from '@/redux/store';
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProtectedRoute from "@/ProtectedRoute";
import HeaderHero from "../components/HeaderHero";

const Page = () => {
  return (
    <div className="flex bg-slate-950">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main>
          <HeaderHero />
        </main>
      </div>
    </div>
  )
}

export default ProtectedRoute(Page)