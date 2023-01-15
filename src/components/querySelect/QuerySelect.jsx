import React from "react";
import {MenuItem, Select} from "@mui/material";
import "./QuerySelect.scss";

const options = [
    {
        name: 'READ'
    }, {
        name: 'UPDATE'
    }, {
        name: 'DELETE'
    }
]

const QuerySelect = ({ queryId, onChange }) => (
    <div className='query-select'>
        <span className='label'>Choose a query:</span>
        <Select value={queryId} onChange={(e) => onChange(e.target.value)}>
            {options.map(option =>
                    <MenuItem value={option.name}>
                        <em>{option.name}</em>
                    </MenuItem>
                )}
        </Select>
    </div>
);

export default QuerySelect;