import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import LandingPage from "./pages/LandingPage"
import Onboarding from "./pages/Onboarding";
import Job from "./pages/Job";
import JobListing from "./pages/JobListing";
import MyJobs from "./pages/MyJobs";
import PostJob from "./pages/PostJob";
import SavedJobs from "./pages/SavedJobs";
import './App.css';
import { ThemeProvider } from "@/components/theme-provider"


function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children:[
        {
          path:'/',
          element: <LandingPage />,
        },
        {
          path:'/onboarding',
          element: <Onboarding />,
        },
        {
          path:'/job/:id',
          element: <Job />,
        },
        {
          path:'/jobs',
          element: <JobListing />,
        },
        {
          path:'/my-jobs',
          element: <MyJobs />,
        },
        {
          path:'/post-job',
          element: <PostJob />,
        },
        {
          path:'/saved-job',
          element: <SavedJobs />,
        },
      ]
    }
  ])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
