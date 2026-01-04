import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Vision from "@/pages/Vision";
import Contact from "@/pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "services", element: <Services /> },
            { path: "vision", element: <Vision /> },
            { path: "contact", element: <Contact /> },
        ],
    },
]);
