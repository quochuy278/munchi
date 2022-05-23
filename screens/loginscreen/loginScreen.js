import Wrapper from "../../containers/Wrapper";
import { StyleSheet, Image, View } from "react-native";
import GoogleIcon from "../../components/UI/Icons/googleIcon";
import FacebookIcon from "../../components/UI/Icons/facebookIcon";
import { Button, Icon, VStack, Divider, Flex, Text } from "native-base";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";


const LoginScreen = ({ navigation }) => {
  const navigateHandler = () => {
      navigation.navigate("Guest");
  }

  return (
    <Wrapper>
      <Text
        style={styles.title}
        fontFamily="body"
        fontWeight={800}
        fontStyle="normal"
      >
        Get started with <Text style={styles.logo}>munchi 🤩</Text>
      </Text>

      <VStack space={5} width="80%">
        <Button.Group
          variant={"outline"}
          size="sm"
          direction="column"
          colorScheme={"black"}
          space={5}
        >
          <Button style={styles.btn}>
            <View style={styles.btnContainer}>
              <Icon as={AntDesign} name="apple1" size={8} />
              <Text style={styles.btnText}>Continue with Apple</Text>
            </View>
          </Button>
          <Button style={styles.btn}>
            <View style={styles.btnContainer}>
              <Icon as={FacebookIcon} name="facebook" size={8} />
              <Text style={styles.btnText}> Continue with Facebook</Text>
            </View>
          </Button>
          <Button style={styles.btn}>
            <View style={styles.btnContainer}>
              <Icon as={GoogleIcon} name="google" size={8} />
              <Text style={styles.btnText}> Continue with Google</Text>
            </View>
          </Button>
          <Button style={styles.btn}>
            <View style={styles.btnContainer}>
              <Icon
                as={MaterialCommunityIcons}
                name="email-outline"
                size={8}
                color="black"
              />
              <Text style={styles.btnText}>Continue with Email</Text>
            </View>
          </Button>
          <View style={styles.dividerContainer}>
            <Flex style={{ width: "45%", marginLeft: 10 }}>
              <Divider
                my="7"
                _light={{
                  bg: "muted.800",
                }}
                _dark={{
                  bg: "muted.50",
                }}
              />
            </Flex>
            <Text style={{ marginTop: 15, marginLeft: 20, marginRight: 20 }}>
              or
            </Text>
            <Flex style={{ width: "45%", marginRight: 10 }}>
              <Divider
                my="7"
                _light={{
                  bg: "muted.800",
                }}
                _dark={{
                  bg: "muted.50",
                }}
              />
            </Flex>
          </View>
          <Button
            style={{ borderRadius: 10, marginBottom: 10 }}
            onPress={navigateHandler}
          >
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}> Continue as a guest</Text>
            </View>
          </Button>
        </Button.Group>
      </VStack>
    </Wrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    color: "grey",
    fontSize: 24,
    lineHeight: 27,
    marginBottom: 80,
  },
  logo: {
    color: "red",
  },
  icon: {},
  btn: {
    borderRadius: 10,
  },
  btnText: {
    fontSize: 13,
    marginTop: 10,
    textAlign: "center",
    width: 250,
    fontWeight: "bold",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
  dividerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
