import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "./modal";

export default function Card(props) {
  console.log(props);
  const [threads, updateThreads] = useState([]);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(
        `http://localhost:4000/threads/${props.thread}`
      );
      console.log(data);
      updateThreads(data.data);
    };
    fetch();
  }, [props]);

  console.log(threads);
  return (
    <>
      {threads.map((value, index) => {
        return (
          <>
            {" "}
            <Typography paragraph>{value.message}</Typography>
          </>
        );
      })}
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddIcon />
      </Fab>
      <Modal open={open} setOpen={setOpen} thread={props.thread} />
    </>
  );
}
