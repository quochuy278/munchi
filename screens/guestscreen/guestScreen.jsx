import { useState } from "react";
import { Text, StyleSheet } from "react-native";
import Wrapper from "../../containers/Wrapper";

import {
  FormControlLabel,
  FormGroup,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Checkbox,
  Button
} from "@mui/material";

const GuestScreen = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
   const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
   const checkBoxHandle = (event) => {
     setChecked(event.target.checked);
   };
  return (
    <Wrapper>
      <Text style={styles.title}>
        <h1>Welcome 🤗</h1>
      </Text>
      <Text style={styles.text}>
        Please chose the country where you are using Munchi:
      </Text>
      <FormControl sx={{ m: 1, width: "90vw" }}>
        <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          label="Country"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={checkBoxHandle} />}
          label="I’ve read and agree with the User Terms of Service. I understand that my personal data will be processed in accordance with Munchi’s Privacy Statement."
        />
      </FormGroup>
      <Text>Read more</Text>
    <Button variant="contained" sx={{width: '90vw'}}>Continue</Button>
    </Wrapper>

    //
  );
};

export default GuestScreen;

const styles = StyleSheet.create({
  title: {
    width: "200px",
    height: "80px",
    marginLeft: 30,
    color: "red",
  },
});
