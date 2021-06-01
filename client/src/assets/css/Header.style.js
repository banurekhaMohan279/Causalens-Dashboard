import styled from "styled-components";

export const HeaderBtn = styled.header`
  height: 3rem;
  width: 100%;
  padding: 0.5rem 0rem 0.5rem 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  background: #20222f;
  display: block;
  padding: 0.5rem;
  border: 1px solid #000;
  &:after {
    content: "Light";
    color: #f7f9ff;
  }
`;

export const CheckBoxInput = styled.input`
  &:checked + ${Label} {
    background: #f7f9ff;
  }
  &:checked + ${Label}:after {
    content: "Dark";
    color: #20222f;
  }
`;
