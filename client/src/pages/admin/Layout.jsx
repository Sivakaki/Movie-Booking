import { Outlet } from "react-router-dom";
import { AdminNavbar } from "../../components/admin/AdminNavbar";
import { AdminSidebar } from "../../components/admin/AdminSideBar";

export const Layout = () => {
  return (
    <>
      <AdminNavbar />
      <div>
        <AdminSidebar />
        <div className="flex-1 px-4 py-10 md:px-10 h-[(100vh - 64px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};
