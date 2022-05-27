import { Fragment } from "react";
import { StyleSheet,View } from "react-native";

const Wrapper = ({children}) => {
  return (
    <Fragment>
      <View style={styles.container}>
        {children}
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor:"#fff"
  },
});

export default Wrapper;
