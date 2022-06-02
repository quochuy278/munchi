import { Flex, Text } from "native-base"
import { View, StyleSheet } from "react-native";


const HomeScreen = () => {
    return (
      <Flex style={styles.container}>
        <View style={styles.textContainers}>
          <Text style={styles.text}>This is home page</Text>
        </View>
      </Flex>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
   width: "100%",
   height: "100%",
   backgroundColor:"white",
  },
  textContainers:{
    backgroundColor: "black",
    marginBottom:40
  },  
  text: {
    lineHeight: 30,
    paddingBottom: 30,
    marginBottom: 50,
    fontSize: 30,
  },
});