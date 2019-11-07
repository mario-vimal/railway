import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { Button } from "@material-ui/core";

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
};

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      clicked: false,
      available: 0,
      trainNo: 0
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3000/train/getTrains").then(result => {
      console.log(result.data);
      this.setState({ rows: result.data });
    });
  }
  fetchStatus(trainNo) {
    axios
      .get("http://localhost:3000/status/getStatus", {
        params: {
          trainNo,
          date: "2019-11-06"
        }
      })
      .then(res => {
        console.log(res.data[0]);
        this.setState({ available: res.data[0].available });
      });
  }
  handleClick(trainNo) {
    this.setState({ clicked: true, trainNo });
    this.fetchStatus(trainNo);
  }

  bookNowHandler = () => {
    console.log("BOOk");
    axios
      .post("http://localhost:3000/booking/createBooking", {
        trainNo: this.state.trainNo,
        userName: "mariovimal",
        date: "2019-11-06"
      })
      .then(res => {
        alert(`Booking Successful for Train No :${this.state.trainNo}`);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Train Number</TableCell>
              <TableCell align="right">Train Name</TableCell>
              <TableCell align="right">Departure</TableCell>
              <TableCell align="right">Arrival</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => (
              <TableRow key={row.trainNo}>
                <TableCell onClick={() => this.handleClick(row.trainNo)}>
                  {row.trainNo}
                </TableCell>
                <TableCell align="right">{row.trainName}</TableCell>
                <TableCell align="right">{row.departureTime}</TableCell>
                <TableCell align="right">{row.arrivalTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {this.state.clicked && (
          <div>
            <p>Available Tickets: {this.state.available}</p>{" "}
            <Button onClick={() => this.bookNowHandler()}>Book Now</Button>
          </div>
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(Book);
