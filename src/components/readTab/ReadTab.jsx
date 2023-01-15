import React, { useState } from "react";
import Button from "@mui/material/Button";
import cn from "classnames";
import "./ReadTab.scss";
import { saveToDynamo, deleteAllFromDynamo } from "../../services/dynamoService";
import { saveToPostgresql, deleteAllFromPostgresql } from "../../services/postgresqlService";
import { saveToCassandra, deleteAllFromCassandra } from "../../services/cassandraService";
import { saveToMongo, deleteAllFromMongo } from "../../services/mongoService";

const options = [
    {
        name: "10000",
        value: 'HUGE'
    },{
        name: "7500",
        value: 'BIG'
    },{
        name: "5000",
        value: 'MEDIUM'
    }, {
        name: "2500",
        value: 'SMALL'
    }, {
        name: "1000",
        value: 'TINY'
    }
];

const ReadTab = () => {
    const [jsonSize, setJsonSize] = useState('');

    const onSave = () => {
        saveToMongo(jsonSize).then(() => console.log('mongo deleted all'));;
        saveToPostgresql(jsonSize).then(() => console.log('postgresql deleted all'));;
        saveToCassandra(jsonSize).then(() => console.log('cassandra deleted all'));;
        saveToDynamo(jsonSize).then(() => console.log('dynamo deleted all'));;
    }

    const onReset = () => {
        deleteAllFromCassandra().then(() => console.log('cassandra deleted all'));
        deleteAllFromMongo().then(() => console.log('mongo deleted all'));
        deleteAllFromPostgresql().then(() => console.log('postgresql deleted all'));
        deleteAllFromDynamo().then(() => console.log('dynamo deleted all'));
    }

    return (
        <div className="read-tab-container">
            <span className='label'>Choose number of records to save to databases:</span>
            <div className="records-picker">
                <div className="records-picker__carousel">
                    {options.map((option) => (
                        <Button
                            variant='outlined'
                            className={cn("records-picker__button", jsonSize === option.value ? 'records-picker__button-active' : null)}
                            onClick={() => {
                                setJsonSize(option.value);
                            }}
                        >
                            <div className="type">{option.name}</div>
                        </Button>
                    ))}
                </div>
            </div>
            <div className="button-group">
                <Button variant="contained" className="save-button" onClick={onSave}>
                    Save
                </Button>
                <Button variant="contained" className="reset-button" color="error" onClick={onReset}>
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default ReadTab;