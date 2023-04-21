import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Layout;
