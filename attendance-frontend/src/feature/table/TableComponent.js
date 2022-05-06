import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, isAuth } from "../../helpers/Auth";
// import "./table.css";
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';

function Table(props) {

  const ClassIdentifier = props.name;
  const url = `http://localhost:8080/attendance/all-entries/${ClassIdentifier}`;
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

  $(document).ready(function () {
    $('#example').DataTable();
  });
  console.log(newAttendee.data);
  if (newAttendee.data) {
    table = newAttendee.data.map((receive) => (
      <tr>
        <td>{receive.id}</td>
        <td>{receive.studentId}</td>
        <td>{new Date(receive.createdAt).toLocaleString()}</td>
        
      </tr>
    ));
  }

  return (
    <div class="container">
      <div class="header">
        <div class="logo"></div>
      </div>

      <div
      style={{
        width: '70%',
        marginTop: "30px",
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '100px',   
        
      }}
    >
      <table id="example" class="display">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Id</th>
            
            <th>Time</th>
            
          </tr>
        </thead>
        <tbody>
       
        { table}
        </tbody>
      </table>
    </div>
      <div id="add">
      <button >Generate Report</button>
      </div>
    </div>
  );
}

export default Table;
