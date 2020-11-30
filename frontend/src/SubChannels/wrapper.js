import React, { useState } from 'react'
import Card from './card';
import {Container} from '@material-ui/core';

export default function Wrapper() {

    const [cards , updateCards ] = useState([{name:"Corona",description:"pandamic",imgUrl:" "}])
    return (
        <Container>
        <div style={{display:"flex"}}>
            <Card card = {cards[0]}/>
        </div>
        </Container>
    )
}
