"use client"
import { Provider } from "react-redux";
import { store } from '@/redux/store';
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <Provider store={store}>
        <div className="flex">
          <SideBar />
          <div className="flex-1 flex flex-col">
            <Navbar />
          </div>
        </div>
    </Provider>
  )
}

export default Page