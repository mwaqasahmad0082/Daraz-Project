import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Catgories from "./components/catgories";
import Collect from "./components/collect";
import Flash from "./components/flash";
import Footer from "./components/footer";
import Just from "./components/just";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Layout from "./components/layout";
import NotFound from "./components/NotFound";
import Cart from "./components/cart";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Section />
        </Layout>
      ),
    },
    {
      path: "/collect",
      element: (
        <Layout>
          <Collect />
        </Layout>
      ),
    },
    {
      path: "/catgories",
      element: (
        <Layout>
          <Catgories />
        </Layout>
      ),
    },
    {
      path: "/flash",
      element: (
        <Layout>
          <Flash />
        </Layout>
      ),
    },
    {
      path: "/just",
      element: (
        <Layout>
          <Just />
        </Layout>
      ),
    },
    {
      path: "/cart",
      element: (
        <Layout>
          <Cart />
        </Layout>
      ),
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div className="bg-slate-100 ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
