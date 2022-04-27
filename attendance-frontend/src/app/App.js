import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "../feature/login/LoginComponent";
import Selection from "../feature/selection/SelectionComponent";
import Primary from "../feature/primary/PrimaryComponent";
import Secondary from "../feature/secondary/SecondaryComponent";
import Kindergarten from "../feature/kindergaten/KindergartenComponent";
import Staff from "../feature/staff/StaffComponent";
import Guardian from "../feature/guardian/GuardianComponent";
import Table from "../feature/table/TableComponent";
import PrivateRoute from "../Routes/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/selection"
            element={
              <PrivateRoute>
                {" "}
                <Selection />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/primary"
            element={
              <PrivateRoute>
                <Primary />
              </PrivateRoute>
            }
          />
          <Route
            path="/secondary"
            element={
              <PrivateRoute>
                {" "}
                <Secondary />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/kindergaten"
            element={
              <PrivateRoute>
                {" "}
                <Kindergarten />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/staff"
            element={
              <PrivateRoute>
                {" "}
                <Staff />{" "}
              </PrivateRoute>
            }
          />
          <Route path="/guardian" element={<Guardian />} />
          <Route
            path="/table"
            element={
              <PrivateRoute>
                {" "}
                <Table />{" "}
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
