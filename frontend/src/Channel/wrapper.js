import React, { useState } from 'react'
import Card from './card';
import {Container} from '@material-ui/core';

export default function Wrapper() {

    const [cards , updateCards ] = useState([{name:"Corona",description:"pandamic",imgUrl:"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/news/2020/01_2020/coronavirus_1/1800x1200_coronavirus_1.jpg?resize=*:350px"}])
    return (
        <Container>
            <Card card = {cards[0]}/>
        </Container>
    )
}
