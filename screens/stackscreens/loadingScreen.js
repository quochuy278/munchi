import {  PixelRatio, StyleSheet, View } from "react-native";
import Wrapper from "../../containers/Wrapper";
import { Icon, Spinner, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const LoadingScreen = ({ navigation }) => {
  const [status, setStatus] = useState(0);

  const autoIncrement = () => {
    const stautsCounter = setTimeout(() => {
      setStatus(status + 1);
    }, 0);
    if (status === 100) {
      clearInterval(stautsCounter);
      return status;
    }
  };
  autoIncrement();

  if (status === 100) {
    setTimeout(() => {
        navigation.navigate('Location')
    }, 2000);
  }
  return (
    <Wrapper>
      {status === 0 || (status < 100 && <Spinner size={70} />)}
      {status === 100 && (
        <View style={styles.container}>
          <Icon
            as={AntDesign}
            name="checkcircle"
            color={"primary.600"}
            size={65}
          />
          <Text style={styles.title} fontFamily={"mono"}>
            Done
          </Text>
        </View>
      )}
    </Wrapper>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(20),
  },
});