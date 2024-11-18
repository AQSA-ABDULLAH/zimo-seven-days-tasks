import Dashboard from "./pages/dashboard/page";
import Header from "./components/header/Header";
import SideMenu from "./components/side-menu/SideMenu";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <SideMenu />
      <Dashboard />
    </div>
  );
}
