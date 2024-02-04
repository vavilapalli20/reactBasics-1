for Routing we should download it {npm i -D react-router-dom}

-> after that routing provides us package kind of thing we should import it {import { RouterProvider } from 'react-router-dom'}
                                                                        {import { createBrowserRouter } from 'react-router-dom'}

-> we should write this for the path
const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);

and in return do this
return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )