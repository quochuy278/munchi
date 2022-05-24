import { Text, Icon, Heading, Button } from "native-base";
import { StyleSheet, View } from "react-native";

import Wrapper from "../../containers/Wrapper";
import { SvgXml } from "react-native-svg";

const LocationScreen = () => {
  const xml = `<svg width="176" height="181" viewBox="0 0 176 181" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59.2893 124.454H90.3469C90.2268 125.87 90.1581 127.304 90.1581 128.746C90.1581 139.055 94.0811 149.013 101.077 158.687C96.4417 166.92 91.1453 171.658 85.866 171.658C75.5907 171.658 65.2639 153.683 59.7872 126.986L59.2893 124.462V124.454Z" fill="#FF3537"/>
<path d="M57.315 111.577H93.3686C97.5918 100.801 105.613 91.9428 115.919 86.6747V85.8334C115.919 79.9447 115.696 74.2018 115.267 68.665H56.4651L56.1819 72.8541C55.4359 85.7703 55.8151 98.7269 57.315 111.577V111.577Z" fill="#FF3537"/>
<path d="M137.371 81.5328C150.617 81.5328 162.583 86.9838 171.15 95.7654C172.195 86.7252 171.81 77.5768 170.008 68.6565H128.203L128.53 74.2963C128.658 76.9402 128.736 79.6185 128.779 82.3139C131.56 81.7989 134.444 81.5328 137.371 81.5328Z" fill="#FF3537"/>
<path d="M9.1748 124.462H46.1384C49.263 142.334 54.5766 157.546 61.5212 168.181C39.6962 161.704 21.3253 146.846 10.4281 126.857L9.1748 124.462Z" fill="#FF3537"/>
<path d="M1.73222 68.6565H43.5373C42.6392 81.2918 42.7339 93.9781 43.8205 106.599L44.3098 111.577H3.93836C-0.409923 97.6866 -1.17182 82.9212 1.72363 68.6565H1.73222Z" fill="#FF3537"/>
<path d="M111.138 4.93587L110.21 3.47656C122.97 7.26348 134.677 13.9576 144.412 23.033C154.147 32.1084 161.645 43.3177 166.317 55.7801H126.915C124.203 35.0407 118.7 17.2199 111.138 4.93587V4.93587Z" fill="#FF3537"/>
<path d="M60.4738 3.79418L61.521 3.47656C53.9584 15.0652 48.3357 32.0534 45.3484 52.003L44.8162 55.7801H5.43188C10.0372 43.4903 17.3916 32.4163 26.933 23.4046C36.4743 14.3929 47.9499 7.68225 60.4823 3.78559L60.4738 3.79418Z" fill="#FF3537"/>
<path d="M85.8659 0C97.1884 0 108.58 21.821 113.455 53.0761L113.859 55.7801H57.8728C62.5169 23.0829 74.2257 0 85.8659 0Z" fill="#FF3537"/>
<path d="M176 128.746C176 118.501 171.93 108.675 164.686 101.431C157.442 94.1865 147.616 90.1167 137.371 90.1167C127.126 90.1167 117.301 94.1865 110.056 101.431C102.812 108.675 98.7422 118.501 98.7422 128.746C98.7422 144.738 110.932 161.494 134.796 179.392C135.539 179.95 136.442 180.251 137.371 180.251C138.3 180.251 139.203 179.95 139.946 179.392C163.81 161.494 176 144.738 176 128.746ZM124.495 128.746C124.495 125.331 125.851 122.055 128.266 119.641C130.681 117.226 133.956 115.869 137.371 115.869C140.786 115.869 144.061 117.226 146.476 119.641C148.891 122.055 150.247 125.331 150.247 128.746C150.247 132.161 148.891 135.436 146.476 137.851C144.061 140.265 140.786 141.622 137.371 141.622C133.956 141.622 130.681 140.265 128.266 137.851C125.851 135.436 124.495 132.161 124.495 128.746Z" fill="#FF3537"/>
</svg>
`;
  return (
    <Wrapper>
      <SvgXml xml={xml} width="40%" height="40%" />
      <Heading style={styles.heading}>Find a restaurnt near you!</Heading>
      <Text style={styles.content}>
        By allowing location access, you can search for restaurants near you and
        recieve more accurate suggestions and delivery{" "}
      </Text>
      <Button variant="solid" style={styles.btn} colorScheme="red">
        <Text style={styles.text1} fontFamily="body">
          Share my location
        </Text>
      </Button>
      <Button variant="outline" style={styles.btn} colorScheme="grey">
        <Text style={styles.text2} fontFamily="body">
          Enter my location
        </Text>
      </Button>
    </Wrapper>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  heading: {
    marginBottom: 10,
    top: -20,
  },
  content: {
    width: "80%",
    textAlign: "center",
  },
  btn: {
    width: "90%",
    marginBottom: 5,
    marginTop: 5,
    top: 100,
    fontSize: 10,
  },
  text1: {
    lineHeight: 23,
    color: "white",
    fontSize: 15,
    fontWeight: "800",
    fontStyle: "normal",
  },
  text2: {
    lineHeight: 23,
    fontSize: 15,
    fontWeight: "800",
    fontStyle: "normal",
    color: "#727171",
  },
});