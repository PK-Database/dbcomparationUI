import React from "react";
import Button from "@mui/material/Button";
import cn from "classnames";
import "./DatabasePicker.scss";

const types = [
    {
        id: 0,
        name: 'PostgreSQL'
    },
    {
        id: 1,
        name: 'MongoDB'
    },
    {
        id: 2,
        name: 'Cassandra'
    },
    {
        id: 3,
        name: 'Dynamo'
    }
];

const DatabasePicker = ({ active, changeType }) => (
    <div className='database-picker'>
        <span className='label'>Choose database:</span>
        <div className="database-picker__carousel">
            {types.map((type) => (
                <Button variant='outlined' className={cn("database-picker__button", active === type.id ? 'database-picker__button-active' : null)} onClick={() => changeType(type.id)}>
                    <img className="icon" src={require("../../assets/" + type.name + ".png")} alt={type.name} />
                    <div className="type">{type.name}</div>
                </Button>
            ))}
        </div>
    </div>
)

export default DatabasePicker;