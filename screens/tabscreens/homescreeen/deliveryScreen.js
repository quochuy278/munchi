import { Text,Box, Heading, ScrollView } from "native-base";
import { SafeAreaView, StyleSheet, View } from "react-native";
import DishesList from "../../../components/delivery/dishes/disheslist";
import RestaurantList from "../../../components/delivery/restaurants/restaunrantlist";


const DeliveryScreen = () => {
  return (
    <Box style={styles.container}>
      <Heading style={styles.heading} color="primary.600" fontFamily="mono">
        Choose your vibe
      </Heading>
      <SafeAreaView>
        <DishesList />
      </SafeAreaView>
      <Heading style={styles.heading} color="primary.600" fontFamily="mono">
        Venues delivering to you
      </Heading>
      <SafeAreaView>
        <RestaurantList />
      </SafeAreaView>
    </Box>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor:"#fff"
    },
    heading: {
        fontSize: 26,
        lineHeight:30,
        fontWeight: "900",
        fontStyle: "normal"
    }
})