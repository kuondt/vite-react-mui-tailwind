import React from "react";
import { useSelector } from "react-redux";
import { Outlet, RouteObject } from "react-router-dom";
import { About, Home } from "~/pages";
import { Layout } from "~/layouts";

const useRouteElements = () => {
  const routeObject: RouteObject[] = [
    {
      path: "/",
      handle: {
        crumb: "Trang chủ",
        permissionCode: null,
      },
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/GioiThieu",
      handle: {
        crumb: "Giới thiệu",
        permissionCode: null,
      },
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: "*",
      element: <div>Không tìm thấy trang</div>,
    },
  ];

  return {
    routeObject,
  };
};

export default useRouteElements;
