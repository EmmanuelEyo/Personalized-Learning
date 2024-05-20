"use client"
import { Provider } from "react-redux";
import { store } from '@/redux/store';
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProtectedRoute from "@/ProtectedRoute";

const Page = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Navbar />
      </div>
    </div>
  )
}

export default ProtectedRoute(Page)