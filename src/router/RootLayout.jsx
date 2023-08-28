import React from "react";
import Navigation from "../components/Layout/Navigation/Navigation";
import { Outlet, useNavigation } from "react-router-dom";
import "./RootLayout.scss";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navigation />
      <main>
        {navigation.state === "loading" && (
          <h2 className="loading-msg">Loading...</h2>
        )}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
