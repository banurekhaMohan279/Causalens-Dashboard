import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { HeaderBtn, CheckBoxInput, Label } from "../assets/css/Header.style.js";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = e => setTheme(prev => !prev);

  return (
    <Row>
      <HeaderBtn>Causalens Dashboard</HeaderBtn>
      <CheckBoxInput id="input" type="checkbox" onChange={handleChange} />
      <Label htmlFor="input" />
    </Row>
  );
};
export default Header;
