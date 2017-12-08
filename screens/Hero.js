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
  Title,
  View
} from "native-base";
import Heroes from "../components/Heroes";
import axios from "axios";
import { TouchableOpacity } from "react-native";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      heroes: []
    };
  }
  componentWillMount() {
    this.props.fetchHeroes();
  }
  renderHeader() {
    return (
      <Header>
        <Left />
        <Body>
          <Title style={{ textAlign: "center" }}>Heroes</Title>
        </Body>
        <Right>
          <TouchableOpacity
            onPress={() =>
              this.props.navigator.push({ screen: "push.HeroAdd" })
            }
          >
            <Icon name="add" style={{ color: "#ecf0f1" }} />
          </TouchableOpacity>
        </Right>
      </Header>
    );
  }

  render() {
    if (this.props.data.fetching) {
      <View>
        <Text> Loading... </Text>
      </View>;
    }

    return (
      <Container>
        <Content>
          {this.renderHeader()}
          <List>
            {this.props.data.heroes.map((hero, key) => (
              <Heroes key={key} hero={hero} {...this.props} />
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
