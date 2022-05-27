import { Link, Outlet } from "react-router-dom";
import Navbar from "../final/components/Navbar";
import StyledNavbar from "../final/components/StyledNavbar";

const Home = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default Home;
