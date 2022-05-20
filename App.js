import { StatusBar } from "expo-status-bar";
import { Fragment, useState, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { GuestScreen, LoginScreen } from "./screens";
import ThemeConfig from "./theme/themeConfig";
import { ThemeProvider, createTheme } from "@mui/material";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const slides = [
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("./assets/logo.png"),
    backgroundColor: "#fff",
  },
];

const theme = createTheme(ThemeConfig);
const Stack = createNativeStackNavigator();
export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  const fadeAnim = useRef(new Animated.Value(2)).current;
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: "100vw",
          height: "100vh",
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
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    });
  }, 2000);
  return (
    <Fragment>
      {showRealApp ? (
        <Animated.View style={{ opacity: fadeAnim }}>
          <AppIntroSlider renderItem={renderItem} data={slides} />
        </Animated.View>
      ) : (
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={LoginScreen}
              />
              <Stack.Screen name="Guest" component={GuestScreen} />
            </Stack.Navigator>
            <StatusBar />
          </ThemeProvider>
        </NavigationContainer>
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
    width: 365,
    height: 235,
  },
});
