import React from 'react';
import { TextField } from "@mui/material";
import "./RecordsCounter.scss";

const RecordsCounter = ({recordsNumber, onNumberChange}) => (
    <div className='records-counter'>
        <span className='label'>Choose number of records to use:</span>
        <TextField
            id="records-number"
            type="number"
            value={recordsNumber}
            onChange={event => onNumberChange(event.target.value)}
            required={true}
        />
    </div>
)

export default RecordsCounter;