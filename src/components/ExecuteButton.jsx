import React, { useState } from "react";
import Button from "@mui/material/Button";


const ExecuteButton = (props) => {
    const handleExecute = (evt) => {
        evt.preventDefault();
        alert(props.query + "\n" + props.records);
    }

    return (
        <Button onClick={handleExecute} variant='contained' className='execute-button'>
            Execute
        </Button>
    );
}

export default ExecuteButton;