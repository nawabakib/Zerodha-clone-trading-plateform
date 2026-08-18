import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

// Save token from URL (if present) into localStorage
// BEFORE Dashboard renders, so ProtectedRoute sees it immediately
const params = new URLSearchParams(window.location.search);
const tokenFromUrl = params.get("token");

if (tokenFromUrl) {
  localStorage.setItem("token", tokenFromUrl);

  // Clean the token out of the visible URL after saving
  window.history.replaceState({}, document.title, window.location.pathname);
}

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard/>
    </>
  );
};

export default Home;