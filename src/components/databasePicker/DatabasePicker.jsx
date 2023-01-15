import React from "react";
import Button from "@mui/material/Button";
import cn from "classnames";
import "./DatabasePicker.scss";

const types = [
    {
        name: 'PostgreSQL',
        value: 'POSTGRESQL'
    },
    {
        name: 'MongoDB',
        value: 'MONGODB'
    },
    {
        name: 'Cassandra',
        value: 'CASSANDRA'
    },
    {
        name: 'Dynamo',
        value: 'DYNAMODB'
    }
];

const DatabasePicker = ({ active, changeType }) => (
    <div className='database-picker'>
        <span className='label'>Choose database:</span>
        <div className="database-picker__carousel">
            {types.map((type) => (
                <Button variant='outlined' className={cn("database-picker__button", active === type.value ? 'database-picker__button-active' : null)} onClick={() => changeType(type.value)}>
                    <img className="icon" src={require("../../assets/" + type.name + ".png")} alt={type.name} />
                    <div className="type">{type.name}</div>
                </Button>
            ))}
        </div>
    </div>
)

export default DatabasePicker;