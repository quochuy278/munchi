import { View, StyleSheet, PixelRatio } from "react-native";
import {
  HStack,
  IconButton,
  Text,
  VStack,
  Flex,
  Badge,
  Input,
  Icon,
  Box,
  Button,
  Container,
} from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Cart from "../Icons/cart";
import { useState } from "react";

const HomeHeader = ({ style, title }) => {
  const [active, setActive] = useState(false);
  const [screen, setScreen] = useState("");
  return (
    <Box style={{ backgroundColor: "#fff", width: "100%" }}>
      <Container style={style} alignSelf="center" maxW="96">
        <Flex style={styles.contentContainer}>
          <Box>
            <VStack>
              <Text fontFamily="mono" style={styles.title}>
                {title}
              </Text>
              <HStack>
                <Text style={styles.addressContent}>Viljatullintie 2-4 </Text>
                <IconButton
                  size={5}
                  variant="ghost"
                  colorScheme="grey"
                  _icon={{ as: AntDesign, name: "down" }}
                />
              </HStack>
            </VStack>
          </Box>
          <Box>
            <HStack style={styles.iconBtn}>
              <Box style={{ marginLeft: 10, marginRight:10 }}>
                <IconButton
                  size={8}
                  variant="ghost"
                  colorScheme="primary"
                  _icon={{ as: Ionicons, name: "heart-outline", size: "2xl" }}
                />
              </Box>
              <Box style={{ marginLeft: 10 }}>
                <IconButton
                  size={8}
                  variant="ghost"
                  colorScheme="primary"
                  _icon={{ as: Cart, name: "cart-outline", size: "sm" }}
                />
              </Box>
              <Box>
 <Badge // bg="red.400"
                colorScheme="danger"
                rounded="full"
                variant="solid"
                alignSelf="center"
                zIndex={1}
                _text={{
                  fontSize: 7,
                }}
                mt={4}
                my={0}
                right={5}
              >
                2
              </Badge>
              </Box>
             
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default HomeHeader;

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#FF3537",
    lineHeight: 23,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
  },
  addressContent: {
    color: "#757575",
  },
  iconBtn: {
    height: "100%",
    alignItems: "center",
  
    justifyContent:"flex-end"
  }
});
