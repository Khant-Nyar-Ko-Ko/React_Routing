import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full h-16 bg-slate-900 p-4 flex justify-between items-center">
      <div className=" flex items-center gap-5">
        <NavLink to={"/home"}>
          <h3 className=" text-lg pr-5 font-semibold text-white ">{`<Codemy/>`}</h3>
        </NavLink>
        <NavLink
          className={(props) =>
            props.isActive ? "text-white border-b-2" : "text-white"
          }
          to={"/home"}
        >
          Home
        </NavLink>
        <NavLink
          className={(props) =>
            props.isActive ? "text-white border-b-2" : "text-white"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={(props) =>
            props.isActive ? "text-white border-b-2" : "text-white"
          }
          to={"/courses"}
        >
          Courses
        </NavLink>
      </div>
      <div className=" flex gap-5">
        <NavLink to={"/expert/menu"}>
          <div>
            <p className=" text-white pr-4">Expert</p>
          </div>
        </NavLink>
        <NavLink to={"/auth/login"}>
          <div>
            <p className=" text-white pr-4">Login</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
