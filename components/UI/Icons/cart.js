import { Icon } from "native-base";
import { Path,Svg } from "react-native-svg";

function Cart() {
  return (
    <Icon size="2xl" viewBox="0 0 22 20">
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 22 21"
      >
        <Path
          stroke="#FF3537"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 8.25h20.25M1 8.25L3.25 19.5H19l2.25-11.25M1 8.25L7.75 1.5m13.5 6.75L14.5 1.5"
        ></Path>
      </Svg>
    </Icon>
  );
}

export default Cart;
