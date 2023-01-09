import React, { useState } from "react";
import Button from "@mui/material/Button";
import cn from "classnames";
import "./ReadTab.scss";

const options = [
    {
        id: 0,
        name: "1000"
    },{
        id: 1,
        name: "10000"
    },{
        id: 2,
        name: "50000"
    }, {
        id: 3,
        name: "100000"
    }
];

const ReadTab = () => {
    const [records, setRecords] = useState(0);
    return (
        <div className="read-tab-container">
            <span className='label'>Choose number of records to save to databases:</span>
            <div className="records-picker">
                <div className="records-picker__carousel">
                    {options.map((option) => (
                        <Button
                            variant='outlined'
                            className={cn("records-picker__button", records === option.id ? 'records-picker__button-active' : null)}
                            onClick={() => {
                                setRecords(option.id);
                            }}
                        >
                            <div className="type">{option.name}</div>
                        </Button>
                    ))}
                </div>
            </div>
            <Button variant="contained" className="save-button" onClick={() => {}}>
                Save
            </Button>
        </div>
    );
};

export default ReadTab;