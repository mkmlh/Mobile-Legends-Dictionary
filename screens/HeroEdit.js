import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Right,
  Icon,
  Body,
  Title,
  Button
} from "native-base";
import { TouchableOpacity } from "react-native";
import t from "tcomb-form-native";
import { connect } from "react-redux";
import { getHero, fetchHeroes } from "../actions/heroes";
import axios from "axios";

const Form = t.form.Form;
const FormSchema = t.struct({
  name: t.String,
  imageUri: t.String,
  title: t.String,
  role: t.String,
  speciality: t.maybe(t.String)
});

class HeroEdit extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  };

  componentDidMount() {
    this.props.dispatch(getHero(this.props.id));
  }

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
          <Title> Hero Edit </Title>
        </Body>
        <Right />
      </Header>
    );
  }

  handleEdit() {
    const value = this.refs.form.getValue();
    const {id} = this.props;
    if (value) {
      axios
        .put(`http://rest.learncode.academy/api/kamal/heroes/${id}`, value)
        .then(result => {
          this.props.dispatch(fetchHeroes());
          this.props.navigator.resetTo({
            screen: "tab.Hero"
          });
        });
    }
  }

  render() {
    if (this.props.data.fetching) {
      return (
        <Container>
          <Content>
            <Text> Loading... </Text>
          </Content>
        </Container>
      );
    }

    return (
      <Container style={{ padding: 5 }}>
        <Content>
          {this.renderHeader()}
          <Form
            ref="form"
            type={FormSchema}
            value={this.props.data.hero} //liat lagi reducer/heroes.js dan actions/heroes.js lalu ke HeroEdit.js
          />
          <Button
            full
            success
            onPress={() => {
              this.handleEdit();
            }}
          >
            <Text> Edit </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state //????
});

export default connect(mapStateToProps)(HeroEdit);
