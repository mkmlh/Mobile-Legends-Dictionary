import React, { Component } from "react"; 
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Thumbnail,
  Body,
  Icon,
  Right,
  Left,
  Header,
  Title
} from "native-base";
import Heroes from "../components/Heroes";
import axios from "axios";
import { TouchableOpacity } from "react-native";

export default class Hero extends Component {
  constructor(){
    super();
    this.state={
      heroes:[]
    };
  }
  componentWillMount(){
    const self = this;
    axios.get("http://rest.learncode.academy/api/kamal/heroes").then((response)=>{
      self.setState({heroes:response.data});
      console.log(this.state.heroes);
    })
  }

  renderHeader(){
    return(
      <Header>
        <Left/>
        <Body>
          <Title style={{textAlign: "center"}}>Heroes</Title>
        </Body>
          <Right>
            <TouchableOpacity onPress={()=>this.props.navigator.push({screen:"push.HeroAdd"})}>
            <Icon name="add" style={{color:"#ecf0f1"}}/>
            </TouchableOpacity>
            </Right>
        </Header>
    )
  }

  render() {
    return (
      <Container>
        <Content>
          {this.renderHeader()}
          <List>
            {this.state.heroes.map((hero,key)=><Heroes key={key} hero={hero}/>)}
          </List>
        </Content>
      </Container>
    )
  }
}
