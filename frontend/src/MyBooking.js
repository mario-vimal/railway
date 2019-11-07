import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

export default function SimpleTable() {
  let [rows, updateRows] = useState([]);
  const classes = useStyles();
  axios
    .get("http://localhost:3000/booking/getBookings", {
      params: {
        userName: "mariovimal"
      }
    })
    .then(res => {
      console.log(res.data[0]);
      updateRows(res.data[0]);
    });
  return (
    <Paper className={classes.root}>
      {rows && rows.length > 0 && (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="right">Train Number</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              console.log(rows);
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.userName}
                  </TableCell>
                  <TableCell align="right">{row.trainNo}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
}
