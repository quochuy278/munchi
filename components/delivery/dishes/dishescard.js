import { Box, Image, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import Wrapper from "../../../containers/Wrapper";

const DishCard = ({title}) => {
  return (
    <Box style={styles.cardContainer}>
      <Box
        style={styles.imageContainer}
        bgColor="gray.300"
        borderTopRadius={20}
      >
        <Image
          source={require("../../../assets/food.png")}
          alt="food"
          style={styles.img}
        />
      </Box>
      <Box
        style={styles.textContainer}
        bgColor="gray.100"
        borderBottomRadius={20}
      >
        <Text style={styles.textContent} fontFamily="body">
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default DishCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 135,
    width: 130,
    borderRadius: 20,
   
    marginRight: 10,
    justifyContent: "flex-start"
  },
  imageContainer: {
    width: "100%",
    height: 95,
  },
  img: {
    width: 130,
    height: 95,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  textContainer: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textContent: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
  },
});
