import { useState } from "react";
import { StyleSheet, View, PixelRatio } from "react-native";
import Wrapper from "../../containers/Wrapper";
import {
  FormControl,
  Select,
  Text,
  CheckIcon,
  Checkbox,
  WarningOutlineIcon,
  Button,
} from "native-base";

const GuestScreen = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("Finland");
  const [checked, setChecked] = useState(false);
  const checkBoxHandle = () => {
    setChecked(!checked);
  };
  return (
    <Wrapper>
      <FormControl width="90%" isRequired>
        <Text
          style={styles.title}
          fontFamily="body"
          fontWeight={"700"}
          fontStyle="normal"
        >
          Welcome 🤗
        </Text>
        <View style={{bottom:"20%"}}>
          <Text
            style={styles.text}
            fontFamily="mono"
            fontWeight={500}
            fontStyle="normal"
          >
            Please chose the country where you are using Munchi:
          </Text>

          <Select
            width="100%"
            accessibilityLabel="Choose Country"
            placeholder="Choose Country"
            _selectedItem={{
              bg: "primary.600",
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
            selectedValue={country}
            onValueChange={(country) => setCountry(country)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please make a selection!
          </FormControl.ErrorMessage>
          <View style={styles.condContainer}>
            <Checkbox
              value={"primary"}
              size={"sm"}
              onChange={checkBoxHandle}
              colorScheme="red"
            >
              <Text
                fontFamily={"mono"}
                fontWeight={500}
                fontStyle="normal"
                style={styles.conText}
              >
                I’ve read and agree with the User Terms of Service. I understand
                that my personal data will be processed in accordance with
                Munchi’s Privacy Statement.
              </Text>
            </Checkbox>
          </View>
        </View>
        <Button style={[
          styles.btn,
        ]}>
          Continue
        </Button>
      </FormControl>
    </Wrapper>

    //
  );
};

export default GuestScreen;

const styles = StyleSheet.create({
  title: {
    width: "90%",
    height: 50,
    marginBottom: 40,
    color: "red",
    fontSize: 35,
    lineHeight: 50,
    bottom: "25%",
  },
  text: {
    fontSize: 14,
    width: "100%",
    marginBottom: 15,
  },
  condContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    height: 120,
    width: "100%",
    marginTop: 10,
    lineHeight: 10,
  },
  conText: {
    fontSize: 12,
    width: 300,
    textAlign: "left",
    lineHeight: 20,
    marginTop: 30,
  },
  btn: {
    top: "50%",
  },
});
