import React, { Component } from "react";
import {
  Container,
  Content,
  Title,
  Header,
  Left,
  Right,
  Icon,
  Body,
  Text,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { fetchHeroes } from "../actions/heroes";
import { connect } from "react-redux";

class HeroAdd extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
    //navBarTitleTextCentered: true,
    //navbarBackgroundColor:"#345fbc"
  };

  constructor() {
    super();
    this.state = {
      name: "",
      title: "",
      role: "",
      speciality: "",
      imageUri: "",
      isValid: false
    };
  }
  handleDone() {
    const self = this;
    axios({
      method: "post",
      url: "http://rest.learncode.academy/api/kamal/heroes",
      data: this.state
    }).then(() => {
      self.props.dispatch(fetchHeroes());
      self.props.navigator.pop();
    });
  }

  checkIsValid() {
    const self = this;
    setTimeout(() => {
      const { name, title, role, speciality, image } = self.state; //this.state.name || karena didalam fungsi lagi maka pakai self
      if (
        name != "" &&
        title != "" &&
        role != "" &&
        speciality != "" &&
        image != ""
      ) {
        self.setState({ isValid: true });
      } else {
        self.setState({ isValid: false });
      }
    }, 1000);
  }
  renderHeader() {
    const { isValid } = this.state;
    return (
      <Header>
        <Left>
          <TouchableOpacity onPress={() => this.props.navigator.pop()}>
            <Icon name="arrow-back" style={{ color: "#ecf0f1" }} />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title>Hero Add</Title>
        </Body>
        <Right>
          {isValid ? (
            <TouchableOpacity onPress={() => this.handleDone()}>
              <Title style={{ color: "#ecf0f1" }}>Done</Title>
            </TouchableOpacity>
          ) : (
            <Title style={{ color: "#bdc3c7" }}>Done</Title>
          )}
        </Right>
      </Header>
    );
  }

  render() {
    return (
      <Container>
        {this.renderHeader()}
        <Content>
          <Form>
            <Item floatingLabel>
              <Input
                onChangeText={text => {
                  this.setState({ name: text });
                  this.checkIsValid();
                }}
              />
              <Label>Name</Label>
            </Item>
            <Item floatingLabel second>
              <Label>Title</Label>
              <Input
                onChangeText={text => {
                  this.setState({ title: text });
                  this.checkIsValid();
                }}
              />
            </Item>

            <Item floatingLabel third>
              <Label>Role</Label>
              <Input
                onChangeText={text => {
                  this.setState({ role: text });
                  this.checkIsValid();
                }}
              />
            </Item>

            <Item floatingLabel fourth>
              <Label>Speciality</Label>
              <Input
                onChangeText={text => {
                  this.setState({ speciality: text });
                  this.checkIsValid();
                }}
              />
            </Item>

            <Item floatingLabel fifth>
              <Label>ImageUri</Label>
              <Input
                onChangeText={text => {
                  this.setState({ image: text });
                  this.checkIsValid();
                }}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HeroAdd);
