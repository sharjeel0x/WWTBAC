import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="bg-[url('/bg.jpg')] bg-cover bg-center h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
