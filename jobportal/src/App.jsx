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
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children:[
        {
          path:'/',
          element: <LandingPage />
        },
        {
          path:'/onboarding',
          element: 
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>,
        },
        {
          path:'/job/:id',
          element: 
          <ProtectedRoute>
            <Job />
          </ProtectedRoute>
        },
        {
          path:'/Job',
          element: 
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        },
        {
          path:'/MyJobs',
          element: 
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        },
        {
          path:'/PostJob',
          element: 
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        },
        {
          path:'/SavedJobs',
          element: 
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
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
