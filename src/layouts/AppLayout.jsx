import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="bg-black h-screen bg-cover bg-center">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
