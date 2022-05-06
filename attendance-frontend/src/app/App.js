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
import University from '../feature/university/University';

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
            path="/university"
            element={
              <PrivateRoute>
                <University />
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
          {/* <Route
            path="/table"
            element={
              <PrivateRoute>
                {" "}
                <Table />{" "}
              </PrivateRoute>
            }
          /> */}
           <Route path="/table" element={<Table />} />

          <Route
            path="/P1"
            element={
              <PrivateRoute>
                {" "}
                <Table name="p1" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/P2"
            element={
              <PrivateRoute>
                {" "}
                <Table name="p2" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/P3"
            element={
              <PrivateRoute>
                {" "}
                <Table name="p3" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/P4"
            element={
              <PrivateRoute>
                {" "}
                <Table name="p4" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/P5"
            element={
              <PrivateRoute>
                {" "}
                <Table name="p5" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/P6"
            element={
              <PrivateRoute>
                {" "}
                <Table name="p6" />{" "}
              </PrivateRoute>
            }
          />

          <Route
            path="/S1"
            element={
              <PrivateRoute>
                {" "}
                <Table name="s1" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/S2"
            element={
              <PrivateRoute>
                {" "}
                <Table name="s2" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/S3"
            element={
              <PrivateRoute>
                {" "}
                <Table name="s3" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/S4"
            element={
              <PrivateRoute>
                {" "}
                <Table name="s4" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/S5"
            element={
              <PrivateRoute>
                {" "}
                <Table name="s5" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/S6"
            element={
              <PrivateRoute>
                {" "}
                <Table name="s6" />{" "}
              </PrivateRoute>
            }
          />

          <Route
            path="/Baby"
            element={
              <PrivateRoute>
                {" "}
                <Table name="baby" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/Middle"
            element={
              <PrivateRoute>
                {" "}
                <Table name="middle" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/Top"
            element={
              <PrivateRoute>
                {" "}
                <Table name="top" />{" "}
              </PrivateRoute>
            }
          />

          <Route
            path="/Administration"
            element={
              <PrivateRoute>
                {" "}
                <Table name="administration" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/Finance"
            element={
              <PrivateRoute>
                {" "}
                <Table name="finance" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/IT"
            element={
              <PrivateRoute>
                {" "}
                <Table name="it" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/Teachers"
            element={
              <PrivateRoute>
                {" "}
                <Table name="teachers" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/Nurses"
            element={
              <PrivateRoute>
                {" "}
                <Table name="nurses" />{" "}
              </PrivateRoute>
            }
          />

          <Route
            path="/Social"
            element={
              <PrivateRoute>
                {" "}
                <Table name="social" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/Securities"
            element={
              <PrivateRoute>
                {" "}
                <Table name="securities" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/Students"
            element={
              <PrivateRoute>
                {" "}
                <Table name="students" />{" "}
              </PrivateRoute>
            }
          />

<Route
            path="/Level_one"
            element={
              <PrivateRoute>
                {" "}
                <Table name="level_one" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/Level_two"
            element={
              <PrivateRoute>
                {" "}
                <Table name="level_two" />{" "}
              </PrivateRoute>
            }
          />
          
          <Route
            path="/level_three"
            element={
              <PrivateRoute>
                {" "}
                <Table name="level_three" />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/Level_four"
            element={
              <PrivateRoute>
                {" "}
                <Table name="level_four" />{" "}
              </PrivateRoute>
            }
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
