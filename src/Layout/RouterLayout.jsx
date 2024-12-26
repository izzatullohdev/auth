import { Button } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const RouterLayout = () => {
  const { token, logout } = useAuth();
  return (
    <>
      <header>
        <nav>
          <div className="container mx-auto flex items-center justify-between py-5">
            <h1>H27TECH</h1>
            <ul className="flex gap-4 items-center">
              {token ? (
                <li>
                  <Button type="primary" onClick={logout}>
                    Logout
                  </Button>
                </li>
              ) : (
                <>
                  <li>
                    <Button type="primary">
                      <NavLink to="/login">Login</NavLink>
                    </Button>
                  </li>
                  <li>
                    <Button type="primary">
                      <NavLink to="/register">Register</NavLink>
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RouterLayout;
