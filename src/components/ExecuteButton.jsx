import React, { useState } from "react";
import Button from "@mui/material/Button";


const ExecuteButton = ({ type, record, query }) => {
    const handleExecute = (evt) => {
        evt.preventDefault();
        alert(query + "\n" + record + "\n" + type );
    }

    return (
        <Button onClick={handleExecute} variant='contained' className='execute-button'>
            Execute
        </Button>
    );
}

export default ExecuteButton;