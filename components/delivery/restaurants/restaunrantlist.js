import { Text } from "native-base";
import { View } from "react-native";
import Wrapper from "../../../containers/Wrapper";
import RestaurantCard from "./restaunrantcard";

const RestaurantList = () => {
  return (
    <Wrapper>
      <View>
        <RestaurantCard/>
      </View>
    </Wrapper>
  );
};

export default RestaurantList;
