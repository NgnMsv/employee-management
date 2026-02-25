import { MdDashboard } from "react-icons/md";
import { CiViewTable } from "react-icons/ci";

const Sidebar: any[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard className="h-6 w-6 shrink-0"></MdDashboard>,
  },
  {
    name: "Users",
    path: "/users",
    icon: <CiViewTable className=" h-6 w-6 shrink-0"></CiViewTable>,
  },
];

export default Sidebar;
