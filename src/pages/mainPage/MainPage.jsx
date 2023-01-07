import React, { useState } from "react"
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import cn from "classnames";
import "./MainPage.scss";
import {Tab, Tabs} from "@mui/material";

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

const MainPage = () => {
    const [records, setRecords] = useState(0);
    const [navigate, setNavigate] = useState(false);
    const onClick = () => {
        setNavigate(true);
    };
    return (
            <div className="main-page-container">
                <span className='label'>Choose number of records to save to databases:</span>
                {navigate && (
                    <Navigate to="/query" replace={true} />
                )}
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
                <Button variant="contained" className="save-button" onClick={onClick}>
                    Save
                </Button>
            </div>
    )
};

export default MainPage;