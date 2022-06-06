import { Text, Box, ScrollView, HStack } from "native-base";
import { SafeAreaView, StyleSheet, View } from "react-native";
import DishCard from "./dishescard";
import { dishes } from "../../../constant/data";

const DishesList = () => {
  console.log(dishes);
  return (
    <Box style={styles.container}>
      <HStack>
        <SafeAreaView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {dishes.map((dish) => {
              return <DishCard key={dish.id} title={dish.name} />;
            })}
          </ScrollView>
        </SafeAreaView>
      </HStack>
    </Box>
  );
};

export default DishesList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    marginTop: 10,
    marginBottom: 5,
  },
});
