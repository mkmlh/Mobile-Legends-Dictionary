import React from "react";
import { ListItem, Thumbnail, Body, Text } from "native-base"; 

export default Heroes = (props) => (
  <ListItem onPress={()=> props.navigator.push({
    screen:"push.HeroView",
    passProps:{
      hero:props.hero
    }
  })}>
    <Thumbnail
      square
      size={80}
      source={{
         uri:props.hero.image
      }}
    />
    <Body>
      <Text>{props.hero.name}</Text>
      <Text note>{props.hero.title}</Text>
    </Body>
  </ListItem>
)
