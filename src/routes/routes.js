// import Projects from "../components/Projects/Projects";

import PageNotFound from "../components/Error/PageNotFound";
import About from "../components/Home/About";
import Blog from "../components/Home/Blog";
import Projects from "../components/Projects/Projects";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/projects/:id',
                element: <Projects></Projects>,
                loader: ({ params }) => fetch(`https://abir-portfoliyo-server.vercel.app/projects/${params.id}`)
            },
            {
                path: '/*',
                element: <PageNotFound></PageNotFound>
            }
        ]
    }
])

export default router;