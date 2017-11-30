import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Thumbnail,
  Body
} from "native-base";
import Heroes from "../components/Heroes";

export default class Hero extends Component {
  heroes = [
    {
      name: "Moskov",
      title: "Spear of Quiescence",
      image:  "http://mobilelegendsbangbang.com/wp-content/uploads/2017/03/mobile-legends-moskov.png"
    },
    {
      name: "Miya",
      title: "Moonlight Archer",
      image: "http://www.mob-leg.pl/wp-content/uploads/2017/02/Miya.png"
    },
    {
      name:"Karina",
      title: "Shadow of Blade",
      image:"http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/Hero081-1.jpg"
    }
  ]

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.heroes.map((hero,key)=><Heroes key={key} hero={hero}/>)}
          </List>
        </Content>
      </Container>
    )
  }
}
