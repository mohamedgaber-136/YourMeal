import { Layout } from "./Components/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResStoreProvide from "./Context/RestaurantStore";
import { Suspense, lazy } from "react";
import loader from "./animation_lnyjf4r3_small.gif";
import { Provider } from "react-redux";
import store from "./Redux/Store";
async function delayForDemo(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return promise;
}
let HomeLazy = lazy(() => delayForDemo(import("./Components/Home/Home")));
let LoginLazy = lazy(() =>
  delayForDemo(import("./Components/LoginForm/LoginForm"))
);
let RegisterLazy = lazy(() =>
  delayForDemo(import("./Components/Register/Register"))
);
let DataCompLazy = lazy(() =>
  delayForDemo(import("./Components/DataComp/DataComp"))
);
let NotFoundLazy = lazy(() =>
  delayForDemo(import("./Components/NotFound/NotFound"))
);
let PlateDetailsLazy = lazy(() =>
  delayForDemo(import("./Components/PLateDetails/PLateDetails"))
);
let SearchDataLazy = lazy(() =>
  delayForDemo(import("./Components/SearchDATA/SearchData"))
);

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/searchData",
        element: <SearchDataLazy />,
      },
      {
        path: "/register",
        element: <RegisterLazy />,
      },
      {
        path: "/login",
        element: <LoginLazy />,
      },
      {
        path: "*",
        element: <NotFoundLazy />,
      },
      {
        path: "/",
        element: <HomeLazy />,
        children: [
          {
            path: `/category/:categName`,
            element: <DataCompLazy />,
          },
        ],
      },
      {
        path: "/PlateDetails",
        element: <PlateDetailsLazy />,
      },
    ],
  },
]);
function App() {
  return (
    <Suspense
      fallback={
        <div className="LoadingParent d-flex align-items-center justify-content-center">
          <div
            style={{ backgroundImage: `url(${loader})` }}
            className="loaderSpinner"
          ></div>
        </div>
      }
    >
        <ResStoreProvide>
      <Provider store={store}>
          <RouterProvider router={routers} />
      </Provider>
        </ResStoreProvide>
    </Suspense>
  );
}

export default App;
