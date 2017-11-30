import React from "react";
import { Container, Content, Text } from "native-base";

export default (Settings = () => (
  <Container>
    <Content>
      <Text style={styles.textStyle}> ThirdTabScreen </Text>
    </Content>
  </Container>
));
const styles={
  textStyle:{
    justifyContent: "space-around",
    textAlign:"center",
    color:"#757575"
  }
}
