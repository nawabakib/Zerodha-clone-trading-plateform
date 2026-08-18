import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";
import ProtectedRoute from "./ProtectedRoute";

const Dashboard = () => {
  return (
    <div className="dashboard-container">

      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">

        <Routes>

          {/* /dashboard */}
          <Route
            index
            element={
              <ProtectedRoute>
                <Summary />
              </ProtectedRoute>
            }
          />

          {/* /dashboard/orders */}
          <Route
            path="orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

          {/* /dashboard/holdings */}
          <Route
            path="holdings"
            element={
              <ProtectedRoute>
                <Holdings />
              </ProtectedRoute>
            }
          />

          {/* /dashboard/positions */}
          <Route
            path="positions"
            element={
              <ProtectedRoute>
                <Positions />
              </ProtectedRoute>
            }
          />

          {/* /dashboard/funds */}
          <Route
            path="funds"
            element={
              <ProtectedRoute>
                <Funds />
              </ProtectedRoute>
            }
          />

          {/* /dashboard/apps */}
          <Route
            path="apps"
            element={
              <ProtectedRoute>
                <Apps />
              </ProtectedRoute>
            }
          />

        </Routes>

      </div>

    </div>
  );
};

export default Dashboard;