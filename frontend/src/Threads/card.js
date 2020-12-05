import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";

export default function Card(props) {
  console.log(props);
  const [threads, updateThreads] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(
        `http://localhost:4000/threads/${props.thread}`
      );
      console.log(data);
      updateThreads(data.data);
    };
    fetch();
  }, []);

  console.log(threads);
  return (
    <>
      {threads.map((value, index) => {
        return (
          <>
            {" "}
            <Typography paragraph>{value.message}</Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi
            </Typography>
          </>
        );
      })}
    </>
  );
}
