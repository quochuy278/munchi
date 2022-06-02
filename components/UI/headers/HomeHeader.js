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
} from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Cart from "../Icons/cart";
import { useState } from "react";

const HomeHeader = ({ style, title }) => {
  const [active,setActive] = useState(false)
  const [screen,setScreen] = useState('')
  return (
    <View style={style}>
      <VStack style={styles.container}>
        <HStack>
          <Flex style={styles.headerContent}>
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
            <HStack style={styles.iconBtn}>
              <View>
                <IconButton
                  size={8}
                  variant="ghost"
                  colorScheme="primary"
                  _icon={{ as: Ionicons, name: "heart-outline", size: "2xl" }}
                />
              </View>
              <VStack>
                <IconButton
                  size={8}
                  variant="ghost"
                  colorScheme="primary"
                  _icon={{ as: Cart, name: "cart-outline", size: "sm" }}
                />
                <Badge // bg="red.400"
                  colorScheme="danger"
                  rounded="full"
                  variant="solid"
                  alignSelf="center"
                  zIndex={1}
                  _text={{
                    fontSize: 7,
                  }}
                  mt={0}
                  my={0}
                  bottom={4}
                  right={-3}
                >
                  2
                </Badge>
              </VStack>
            </HStack>
          </Flex>
        </HStack>

        <Input
          size="lg"
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
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
        <VStack>
          <Flex style={styles.btnContainer}>
            <Button
            colorScheme="red"
              style={active ? styles.btnActive : styles.btn}
              onPress={() => {
                setActive(!active);
              }}
            >
              <Text
                style={active ? styles.textBtnActive : styles.textBtn}
                fontFamily="body"
              >
                Delivery
              </Text>
            </Button>
            <Button
              style={styles.btn}
              onPress={() => {
                setActive(!active);
              }}
            >
              <Text style={styles.textBtn} fontFamily="body">
                Self pick-up
              </Text>
            </Button>
            <Button
              style={styles.btn}
              onPress={() => {
                setActive(!active);
              }}
            >
              <Text style={styles.textBtn} fontFamily="body">
                Eat in
              </Text>
            </Button>
          </Flex>
        </VStack>
      </VStack>
    </View>
  );
};
export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    width: "85%",
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
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  iconBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 90,
  },
  input: {
    width: "100%",
    fontStyle: "normal",
    fontWeight: "400",
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  textBtn: {
    lineHeight: 18,
    textAlign: "center",
    height: 20,
    fontWeight: "700",
    fontStyle: "normal",
    color: "grey",
    fontSize: 14,
    paddingRight: 15,
    paddingLeft: 15,
  },
  btn: {
    borderRadius: 30,
    height: 31,
    fontSize: 15,
    width: "auto",
    backgroundColor: "#F5F5F5",
  },
  btnActive: {
    backgroundColor: "#FF3537",
    borderRadius: 30,
    height: 31,
    fontSize: 15,
    width: "auto",
  },
  textBtnActive: {
    lineHeight: 18,
    textAlign: "center",
    height: 20,
    fontWeight: "700",
    fontStyle: "normal",
    color: "white",
    fontSize: 14,
    paddingRight: 15,
    paddingLeft: 15,
  },
});
