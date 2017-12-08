import React from "react";
import { Container, Content, Text, Thumbnail, H3, Button } from "native-base";
import "../components/TryRedux";

export default Home = (props) => (
  <Container style={styles.containerStyle}>
    <Content>
      <Thumbnail
        large
        source={{
          uri:
            "https://d1qgcmfii0ptfa.cloudfront.net/K/content/common/images/mno/ML_Logo.png"
        }}
        style={styles.thumbnailStyle}
      />
      <H3 style={styles.textStyle}>Welcome to</H3>
      <H3 style={styles.textStyle}>Mobile Legends Dictionary</H3>
      <Button block style={styles.button} onPress={()=>props.navigator.switchToTab({
        tabIndex:1
      })}>
        <Text>Start</Text>
      </Button>
    </Content>
  </Container>
);
const styles = {  
  containerStyle: {
    justifyContent: "center",
    alignSelf: "center"
  },
  thumbnailStyle: {
    width: 250,
    height: 200
  },
  textStyle: {
    justifyContent: "space-around",
    textAlign: "center",
    color: "#757575"
  },
  button: {
    marginTop: 15
  }
};
