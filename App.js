import { StatusBar } from "expo-status-bar";
import { Fragment, useState, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { LoginScreen, GuestScreen } from "./screens";
import AppIntroSlider from "react-native-app-intro-slider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, extendTheme } from "native-base";
import ThemeConfig from "./theme/themeConfig";

const slides = [
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("./assets/logo.png"),
    backgroundColor: "#fff",
  },
];
const Stack = createNativeStackNavigator();
const customTheme = extendTheme(ThemeConfig)
export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  // const fadeAnim = useRef(new Animated.Value(2)).current;
  
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: item.backgroundColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image style={styles.introImage} source={item.image} />
      </View>
    );
  };
  setTimeout(() => {
    setShowRealApp(false);
    // Animated.timing(fadeAnim, {
    //   toValue: 0,
    //   duration: 3000,
    // });
  }, 2000);
  return (
    <Fragment>
      {showRealApp ? (
        <AppIntroSlider renderItem={renderItem} data={slides} />
      ) : (
        <NativeBaseProvider theme={customTheme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={LoginScreen}
                theme={customTheme}
              />
              <Stack.Screen
                name="Guest"
                component={GuestScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
            <StatusBar />
          </NavigationContainer>
        </NativeBaseProvider>
      )}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    resizeMode: "cover",
  },

  introImage: {
    width: 345,
    height: 220,
  },
});
