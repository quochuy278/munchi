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
    width: "100vw",
    height: "100vh",
  },
});

export default Wrapper;
