import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => (
  // <div className="flex">
  //   {/* dashboard side bar */}
  //   <div className="w-64 min-h-full bg-orange-400">
  //     <ul className="menu">
  //       <li>
  //         <NavLink to={"/dashboard/cart"}>My Cart</NavLink>
  //       </li>
  //     </ul>
  //   </div>
  //   {/* dashboard content  */}
  //   <div className="flex-1">
  //     <Outlet></Outlet>
  //   </div>
  // </div>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
    <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
      <div className="text-6xl mb-4">📊</div>

      <h1 className="text-3xl font-bold text-gray-800 mb-3">Dashboard</h1>

      <p className="text-gray-600 mb-6">
        This dashboard is currently under development. We’re working hard to
        bring you powerful insights and controls.
      </p>

      <div className="flex justify-center gap-2 mb-6">
        <span className="w-3 h-3 bg-slate-500 rounded-full animate-pulse"></span>
        <span className="w-3 h-3 bg-slate-400 rounded-full animate-pulse delay-150"></span>
        <span className="w-3 h-3 bg-slate-300 rounded-full animate-pulse delay-300"></span>
      </div>

      <div className="border-t pt-4">
        <p className="text-sm text-gray-500">Thank you for your patience 🙏</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
