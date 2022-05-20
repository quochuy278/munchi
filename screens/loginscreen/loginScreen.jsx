import Wrapper from "../../containers/Wrapper";
import { StyleSheet, Text, Image, View } from "react-native";
import GoogleIcon from "../../components/UI/Icons/googleIcon";
import FacebookIcon from "../../components/UI/Icons/facebookIcon";

//Mui Imports
import AppleIcon from "@mui/icons-material/Apple";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Button, styled, Box, Typography, Divider } from "@mui/material";

const CustomButton = styled(Button)((theme) => ({
  width: "90vw",
  height: "60px",
  borderRadius: "10px",
  marginBottom: 7,
  marginTop: 7,
  display: "flex",
  justifyContent: "space-between",
  borderColor: "black",
  "&:active": {
    backgroundColor: "black",
    borderColor: "black",
  },
  "&.active:hover": {
    backgroundColor: "grey",
    borderColor: "black",
  },
  "&:hover": {
    borderColor: "black",
  },
}));
const Root = styled("div")(({ theme }) => ({
  width: "90vw",
  marginTop: 50,
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const CustomTypography = styled(Typography)((theme) => ({
  color: "black !important",
  fontWeight: 600,
  width: "300px",
  textAlign: "center",
  textTransform: "none",
  "&:active , .MuiTypography-root": {
    color: "#fff",
    borderColor: "black",
  },
  "&.active:hover": {
    color: "#fff",
    borderColor: "black",
  },
  "&:hover": {
    borderColor: "black",
  },
}));

const LoginScreen = ({navigation}) => {
    console.log(navigation)
    const navigateHandler = () => {
        console.log('connected')
        console.log(navigation)
        navigation.navigate("Guest");
    }
  return (
    <Wrapper>
      <Text style={styles.title}>
        Get started with <Text style={styles.logo}>munchi 🤩</Text>
      </Text>
      <CustomButton
        variant="outlined"
        startIcon={<AppleIcon sx={{ width: 25, height: 25, color: "black" }} />}
      >
        <CustomTypography>Continue with Apple</CustomTypography>
      </CustomButton>
      <CustomButton variant="outlined" startIcon={<FacebookIcon />}>
        <CustomTypography>Continue with Facebook</CustomTypography>
      </CustomButton>

      <CustomButton variant="outlined" startIcon={<GoogleIcon />}>
        <CustomTypography>Continue with Google</CustomTypography>
      </CustomButton>
      <CustomButton
        variant="outlined"
        startIcon={
          <MailOutlineIcon sx={{ width: 25, height: 25, color: "black" }} />
        }
      >
        <CustomTypography>Continue with Email</CustomTypography>
      </CustomButton>
      <Root>
        <Divider>Or</Divider>
      </Root>
      <CustomButton
        variant="outlined"
        sx={{ mt: 10 }}
        onClick={navigateHandler}
      >
        <CustomTypography>Continue as a guest</CustomTypography>
      </CustomButton>
    </Wrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    color: "grey",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 27,
    marginBottom: 100,
  },
  logo: {
    color: "red",
  },
  icon: {
    width: 48,
    height: 48,
  },
});
