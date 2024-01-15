import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Preview from './Preview'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Preview />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
