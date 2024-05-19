"use client"
import LandingPage from "./pages/LandingPage";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
// import Page from "./personalized-dashboard/page";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col justify-between">
        <LandingPage />
      </main>
      {/* <Page /> */}
    </Provider>
  );
}
