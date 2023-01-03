import React from "react";
import {MenuItem, Select} from "@mui/material";
import "./QuerySelect.scss";

const options = [
    {
        id: 0,
        name: 'Query0'
    }, {
        id: 1,
        name: 'Query1'
    }, {
        id: 2,
        name: 'Query2'
    },{
        id: 3,
        name: 'Query3'
    },{
        id: 4,
        name: 'Query4'
    }
]

const QuerySelect = ({ queryId, onChange }) => (
    <div className='query-select'>
        <span className='label'>Choose a query:</span>
        <Select value={queryId} onChange={(e) => onChange(e.target.value)}>
            {options.map(option =>
                    <MenuItem value={option.id}>
                        <em>{option.name}</em>
                    </MenuItem>
                )}
        </Select>
    </div>
);

export default QuerySelect;