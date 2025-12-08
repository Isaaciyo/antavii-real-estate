// import ImageSlider from "./components/imageSlider/imageSlider.jsx";
import HomePage from "./routes/homepage/HomePage.jsx";
import Layout from "./routes/layout/Layout.jsx";
import ListPage from "./routes/listPage/listPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import SinglePage from "./routes/singlePage/SinglePage.jsx";
import ProfilePage from "./routes/profilePage/ProfilePage.jsx";

// below const is for the ImageSlider component
// const slides = [
//   {
//     url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
//     title: "Slide 1",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1470&q=80",
//     title: "Slide 2",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1470&q=80",
//     title: "Slide 3",
//   },
// ];
//
// const containerStyles = {
//   width: "500px",
//   height: "300px",
//   margin: "0 auto",
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/antavii-real-estate", element: <HomePage /> },
      { path: "/list", element: <ListPage /> },
      { path: "/:id", element: <SinglePage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
  // Add more routes here as needed
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
