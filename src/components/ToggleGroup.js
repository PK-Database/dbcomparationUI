import React, { useState } from "react";
import styled from "styled-components";
import ExecuteButton from "./ExecuteButton";
import "../styles/Styles.css"

const theme = {
    grey: {
        default: "#807e7e",
        hover: "#5e5e5e"
    }
};

const Button = styled.button`
  flex: 1;
  background-color: ${(props) => theme[props.theme].default};
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;  
  color: white;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  box-shadow: 0px 1px 1px darkgray;
  outline: 0;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
    theme: "grey"
};

const ButtonToggle = styled(Button)`
  display: flex;
  opacity: 0.4;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;

export default function ToggleGroup() {
    const types = ["PostgresSQL", "MongoDB", "Cassandra", "Dynamo"];
    const [active, setActive] = useState(types[0]);
    const [number, setNumber] = useState(0);
    return (
        <div className="Buttons">
            {types.map((type) => (
                <ButtonToggle active={active === type} onClick={() => setActive(type)}>
                    <img className="Icon" src={require("../assets/" + type + ".png")} alt={type} />
                    <div className="Type">{type}</div>
                </ButtonToggle>
            ))}
            <input className="Input" type="number" name="number" value={number} onChange={sn => setNumber(parseInt(sn.target.value))}/>
            <ExecuteButton query={active} records={number}/>
        </div>
    );
}