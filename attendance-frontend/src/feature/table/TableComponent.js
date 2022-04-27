import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, isAuth } from "../../helpers/Auth";
import "./table.css";

function Table(props) {
  const ClassIdentifier = props.name;
  const url = `http://localhost:8080/api/all-entries/${ClassIdentifier}`;
  const [newAttendee, setNewAttendee] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let table = null;

  useEffect(() => {
    const token = getCookie("token");

    setNewAttendee({
      loading: true,
      data: null,
      error: false,
    });

    axios
      .get(url, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        setNewAttendee({
          loading: false,
          data: res.data.data,
          error: false,
        });
      })
      .catch(() => {
        setNewAttendee({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  console.log(newAttendee.data);
  if (newAttendee.data) {
    table = newAttendee.data.map((receive) => (
      <>
        <div class="layout">{receive.id}</div>
        <div class="layout">{receive.studentId}</div>
        <div class="layout">{new Date(receive.createdAt).toLocaleString()}</div>
        <div class="layout">{new Date(receive.createdAt).toLocaleString()}</div>
        <div class="layout">{new Date(receive.createdAt).toLocaleString()}</div>
        <div class="layout">{new Date(receive.createdAt).toLocaleString()}</div>
        <div class="layout">{new Date(receive.createdAt).toLocaleString()}</div>
      </>
    ));
  }

  return (
    <div class="container">
      <div class="header">
        <div class="logo"></div>
      </div>

      <div class="history">
        <div id="keyboard">
          <div class="frame">No</div>
          <div class="frame">Reg No</div>
          <div class="frame">Mon</div>
          <div class="frame">Tue</div>
          <div class="frame">wed</div>
          <div class="frame">Thur</div>
          <div class="frame">Fri</div>

          {table}

          {/* <div class="layout">001</div>
          <div class="layout">21807</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div> */}
          {/* 
          <div class="layout">001</div>
          <div class="layout">21807</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>

          <div class="layout">001</div>
          <div class="layout">21807</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div> */}

          {/* <div class="layout">001</div>
          <div class="layout">21807</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>

          <div class="layout">001</div>
          <div class="layout">21807</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div>
          <div class="layout">30/08/2020 10:40</div> */}
        </div>
      </div>
      <button id="add">Generate Report</button>
    </div>
  );
}

export default Table;
