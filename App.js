import { StatusBar } from "expo-status-bar";
import { Fragment, useState, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated, PixelRatio } from "react-native";
import {
  LoginScreen,
  GuestScreen,
  LoadingScreen,
  LocationScreen,
  ProfileScreen,
  HomeScreen,
  SearchScreen,
  DummyScreen,
} from "./screens";
import AppIntroSlider from "react-native-app-intro-slider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeHeader from "./components/UI/headers/HomeHeader";
import ThemeConfig from "./theme/themeConfig";
import { getHeaderTitle } from "@react-navigation/elements";
import { Center } from "native-base";
// Icons
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

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
const Tab = createBottomTabNavigator();

const customTheme = extendTheme(ThemeConfig);
export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  const [isAuthneticated, setisAuthneticated] = useState(true);
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
      {isAuthneticated ? (
        //
        <NativeBaseProvider theme={customTheme}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "#FF3537",
              }}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={size}
                    />
                  ),
                  headerStyle: styles.homeheader,
                  header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);
                    return (
                      <Center>
                        <HomeHeader title={title} style={options.headerStyle} />
                      </Center>
                    );
                  },
                }}

              />
              <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                  tabBarLabel: "Search",
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name="search1" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Dummy"
                component={DummyScreen}
                options={{
                  tabBarLabel: "Updates",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="bell"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  tabBarLabel: "Profile",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="account"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      ) : (
        <NativeBaseProvider theme={customTheme}>
          {showRealApp ? (
            <AppIntroSlider renderItem={renderItem} data={slides} />
          ) : (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Group>
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
                  <Stack.Screen
                    name="Loading"
                    component={LoadingScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Location"
                    component={LocationScreen}
                    options={{ headerShown: false }}
                  />
                </Stack.Group>
              </Stack.Navigator>

              <StatusBar />
            </NavigationContainer>
          )}
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
  homeheader: {
    width: "100%",
    marginTop: 30,
    paddingLeft: 10,
    height: 100
  },
});
