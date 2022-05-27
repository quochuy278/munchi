import { Text } from "native-base"
import { View, StyleSheet } from "react-native";
import Wrapper from "../../containers/Wrapper"

const HomeScreen = () => {
    return (
      <Wrapper>
        <View >
          <Text>This is home page</Text>
        </View>
      </Wrapper>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%"
    }
})