import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import { MarkdownDemo } from "./MarkdownDemo";
import { HtmlDemo } from "./HtmlDemo";

export const Routers = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>See Markdown Demo</h1>
          <Link to="md">Markdown Demo</Link>

          <h1>See Html Demo</h1>
          <Link to="html">Html Demo</Link>
        </div>
      )
    },
    {
      path: "md",
      element: <MarkdownDemo />
    },
    {
      path: "html",
      element: <HtmlDemo />
    }
  ]);

  return <RouterProvider router={router} />;
};
