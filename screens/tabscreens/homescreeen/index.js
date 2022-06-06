import { Flex, Text, Input, Icon, VStack, Button } from "native-base";
import { StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DeliveryScreen from "./deliveryScreen";
import PickUpScreen from "./pickUpScreen";
import EatInScreen from "./eatInScreen";

const HomeScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Flex style={styles.container}>
      <SafeAreaView style={styles.mainContainer}>
        <Input
          size="lg"
          colorScheme="gray"
          placeholder="Search"
          variant="filled"
          py="2"
          px="2"
          fontFamily="body"
          style={styles.input}
          borderRadius="20"
          _focus={{
            backgroundColor: "gray.200",
            borderColor: "none",
          }}
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
        <Tab.Navigator
          initialRouteName="Delivery"
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarLabelStyle: {
              width: 100,
              height: 30,
              lineHeight: 14,
              textAlignVertical: "center",
              borderRadius: 30,
              textTransform: "none",
              fontSize: 14,
            },
            tabBarStyle: {
             elevation:0
            },
            tabBarInactiveTintColor: "#ADADAD",
            tabBarPressColor: "white",
            tabBarIndicatorStyle: {
              backgroundColor: "#FF3537",
              height: 25,
              borderRadius: 30,
              marginBottom: 16,
              marginLeft: 10,
              width: 105,
            },
            tabBarActiveBackgroundColor: "blue",
            swipeEnabled: false,
          }}
        
        >
          <Tab.Screen name="Delivery" component={DeliveryScreen} />
          <Tab.Screen name="Self pick-up" component={PickUpScreen} />
          <Tab.Screen name="Eat In" component={EatInScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </Flex>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    height: "100%",
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  btnContainer: {
    width: "100%",
    marginTop: 10,
    alignItems: "center",
  },
  btn: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "red",
    borderRadius: 30,
    height: 25,
    width: 100,
    borderColor: "red",
    shadowColor: "grey",
  },
  textBtn: {
    height: 20,
    lineHeight: 14,
    textAlignVertical: "center",
  },
});
