import Row from "react-bootstrap/Row";
import { HeaderBtn } from "../assets/css/Header.style.js";
import Checkbox from "./Checkbox.jsx";

const Header = () => {
  return (
    <Row>
      <HeaderBtn>
        Causalens Dashboard
        <Checkbox />
      </HeaderBtn>
    </Row>
  );
};
export default Header;
