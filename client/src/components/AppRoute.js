import React, { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "..";

const AppRoute = () => {
  const { user } = useContext(Context);
  return user.isAuth ? (
    <Routes>
      {authRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} exact />
      ))}
      <Route path="/" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} exact />
      ))}
      <Route path="/" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRoute;
