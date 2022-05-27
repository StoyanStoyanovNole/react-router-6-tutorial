import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from "./pages/SharedProductLayout";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      {/* Nav attribute -- set up a shared resource to all pages */}
      {/* <nav>Header Nav Bar</nav> */}
      <Routes>
        {/* Routes -- parent for all routes within our app. */}
        {/* Nested Routes - all children routes are relative to the Home page */}
        <Route path="/" element={<SharedLayout />}>
          {/* Index -- set up a Shared layout component that will be shared amongst all components  */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
        <Route to="dashboard" element={<Dashboard />}>
          <Route path="stats" element={<div>stats</div>}></Route>
        </Route>
      </Routes>
      {/* <nav>Footer nav bar</nav> */}
    </BrowserRouter>
  );
}

export default App;
