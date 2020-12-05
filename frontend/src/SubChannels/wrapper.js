import React, { useState, useEffect } from "react";
import Card from "./card";
import { Container } from "@material-ui/core";
import axios from "axios";
import { Link } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "@reach/router";

export default function Wrapper() {
  //   const state = useSelector((state) => state.channelSubchannel);
  const dispatch = useDispatch();
  const params = useParams();

  const [cards, updateCards] = useState([
    { name: "Corona", description: "pandamic", imgUrl: " " },
  ]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `http://localhost:4000/subChannel/${params.id}`
      );
      console.log(data.data);
      updateCards(data.data);
      dispatch({ type: "Update", payload: { channel: params.id } });
    };
    getData();
  }, []);

  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Card card={cards} />;
      </div>
    </Container>
  );
}
