import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Thumbnail,
  Body,
  Header,
  Title,
  Left,
  Right,
  Icon,
  Separator,
  Button
} from "native-base";
import { TouchableOpacity } from "react-native";
import {connect} from "react-redux";
import { fetchHeroes } from "../actions/heroes";
import axios from "axios";


class HeroView extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  };
  renderHeader() {
    return (
      <Header>
        <Left>
          <TouchableOpacity
            onPress={() => {
              this.props.navigator.pop();
            }}
          >
            <Icon name="arrow-back" style={{ color: "#ecf0f1" }} />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title> Hero Detail </Title>
        </Body>
        <Right />
      </Header>
    );
  }
  
  handleDelete(id){
    axios.delete(`http://rest.learncode.academy/api/kamal/heroes/${id}`)
    .then(()=>{
      this.props.dispatch(fetchHeroes())
      this.props.navigator.pop();
    })
  }

  handleEdit(id){
    this.props.navigator.push({
      screen:"push.HeroEdit",
      title:"Edit Hero",
      passProps:{
        id:id
      }
    })
  }

  render() {
    return (
      <Container>
        <Content>
          {this.renderHeader()}
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: this.props.hero.image}} />
              <Body>
                <Text>{this.props.hero.name}</Text>
                <Text note>Details</Text>
                <TouchableOpacity onPress={()=>{
                  this.handleEdit(this.props.hero.id)
                }}>
                  <Text style={{color:"#41B0F5"}}>Edit</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            <ListItem itemDivider>
                <Text>Title</Text>
            </ListItem>
            <ListItem>
                <Text>{this.props.hero.title}</Text>
            </ListItem>
            <ListItem itemDivider>
                <Text>Speciality</Text>
            </ListItem>
            <ListItem>
                <Text>{this.props.hero.speciality}</Text>
            </ListItem>
          </List>
          <Button full danger onPress={()=>this.handleDelete(this.props.hero.id)}>
            <Text> Delete </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

mapStateToProps=(state)=>({

})

export default connect(mapStateToProps)(HeroView)
