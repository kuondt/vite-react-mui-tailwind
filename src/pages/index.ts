import React from "react";

const Home = React.lazy(() => import("./Home/Home"));
const About = React.lazy(() => import("./About/About"));

export {
  Home,
  About,
};
