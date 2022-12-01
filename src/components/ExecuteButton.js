import React, { useState } from "react";
import ToggleGroup from "./ToggleGroup";
import styled from "styled-components";

const Button = styled.button`
  flex: 1;
  background-color: orange;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
// Usage


export default function ExecuteButton(props) {
    const handleExecute = (evt) => {
        evt.preventDefault();
        alert(props.query + "\n" + props.records);
    }

    return (
        <Button onClick={handleExecute}>
            Execute
        </Button>
    );
}
