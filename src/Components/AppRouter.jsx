import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publickRoutes } from "../route/route";

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route path={route.path} element={route.element} key={route.path} />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
