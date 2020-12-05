import React, { useEffect, useState } from "react";
import Card from "./card";
import { Container } from "@material-ui/core";
import axios from "axios";

import { Link } from "@reach/router";

export default function Wrapper() {
  const [cards, updateCards] = useState([
    {
      name: "Corona",
      description: "pandamic",
      imgUrl:
        "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/news/2020/01_2020/coronavirus_1/1800x1200_coronavirus_1.jpg?resize=*:350px",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:4000/channels");
      updateCards(data.data);
    };
    getData();
  }, []);

  return (
    <Container>
      <div style={{ display: "flex", gap: "40px" }}>
        {cards.map((value, index) => {
          return (
            <Link to={`/subchannel/${value._id}`}>
              <Card card={value} key={index} />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
