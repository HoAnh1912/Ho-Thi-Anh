// const Blog = lazy(() => import("pages/blog"));
// const BlogDetail = lazy(() => import("pages/blog/[id]/blog-detail"));

const children = [
  {
    path: "blog",
    children: [
      {
        path: "",
        element: <></>,
      },
      {
        path: "blog-detail/:id",
        element: <></>,
      },
    ],
  },
];

export default children;
