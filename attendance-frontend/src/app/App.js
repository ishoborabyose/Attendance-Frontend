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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/primary" element={<Primary />} />
          <Route path="/secondary" element={<Secondary />} />
          <Route path="/kindergaten" element={<Kindergarten />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/guardian" element={<Guardian />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
