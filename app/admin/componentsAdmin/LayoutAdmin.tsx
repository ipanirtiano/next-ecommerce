import NavbarAdmin from "./NavbarAdmin";
import Sidebar from "./Sidebar";


const LayoutsAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      {/* navbar */}
      <NavbarAdmin />

      <div className="w-full grid grid-cols-12 gap-5">
        {/* sidebar */}
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 pt-[70px] px-6"> {children}</div>
      </div>
    </div>
  );
};

export default LayoutsAdmin;
