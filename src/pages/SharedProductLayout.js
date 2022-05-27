import { Outlet } from "react-router-dom";
import StyledNavbar from "../final/components/StyledNavbar";

const Home = () => {
  return (
    <>
      <h2>products</h2>
      <Outlet />
    </>
  );
};
export default Home;
