import React, { useState } from "react";
import Button from "@mui/material/Button";
import cn from "classnames";
import "./ReadTab.scss";
import { saveToDynamo, deleteAllFromDynamo } from "../../services/dynamoService";
import { saveToPostgresql, deleteAllFromPostgresql } from "../../services/postgresqlService";
import { saveToCassandra, deleteAllFromCassandra } from "../../services/cassandraService";
import { saveToMongo, deleteAllFromMongo } from "../../services/mongoService";
import FillDatabaseTimeTable from "../fillDatabaseTimeTable/FillDatabaseTimeTable";

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
    const [mongoRow, setMongoRow] = useState( {
        id: 'MONGODB',
        saveAll: '-',
        deleteAll: '-'
    });
    const [postgresRow, setPostgresRow] = useState( {
        id: 'POSTGRESQL',
        saveAll: '-',
        deleteAll: '-'
    });
    const [cassandraRow, setCassandraRow] = useState( {
        id: 'CASSANDRA',
        saveAll: '-',
        deleteAll: '-'
    });
    const [dynamoRow, setDynamoRow] = useState( {
        id: 'DYNAMODB',
        saveAll: '-',
        deleteAll: '-'
    });

    const onSave = () => {
        let mongoStart = new Date();
        saveToMongo(jsonSize).then(() => {
            setMongoRow({
                id: mongoRow.id,
                deleteAll: mongoRow.deleteAll,
                saveAll: new Date() - mongoStart + ' [ms]'
            });
        });
        let postgresStart = new Date();
        saveToPostgresql(jsonSize).then(() => {
            setPostgresRow({
                id: postgresRow.id,
                deleteAll: postgresRow.deleteAll,
                saveAll: new Date() - postgresStart + ' [ms]'
            });
        });
        let cassandraStart = new Date();
        saveToCassandra(jsonSize).then(() => {
            setCassandraRow({
                id: cassandraRow.id,
                deleteAll: cassandraRow.deleteAll,
                saveAll: new Date() - cassandraStart + ' [ms]'
            });
        });
        let dynamoStart = new Date();
        saveToDynamo(jsonSize).then(() => {
            setDynamoRow({
                id: dynamoRow.id,
                deleteAll: dynamoRow.deleteAll,
                saveAll: new Date() - dynamoStart + ' [ms]'
            });
        });
    }

    const onDelete = () => {
        let mongoStart = new Date();
        deleteAllFromMongo().then(() => {
            setMongoRow({
                id: mongoRow.id,
                deleteAll: new Date() - mongoStart + ' [ms]',
                saveAll: mongoRow.saveAll
            });
        });
        let postgresStart = new Date();
        deleteAllFromPostgresql().then(() => {
            setPostgresRow({
                id: postgresRow.id,
                deleteAll: new Date() - postgresStart + ' [ms]',
                saveAll: postgresRow.saveAll
            });
        });
        let cassandraStart = new Date();
        deleteAllFromCassandra().then(() => {
            setCassandraRow({
                id: cassandraRow.id,
                deleteAll: new Date() - cassandraStart + ' [ms]',
                saveAll: cassandraRow.saveAll
            });
        });
        let dynamoStart = new Date();
        deleteAllFromDynamo().then(() => {
            setDynamoRow({
                id: dynamoRow.id,
                deleteAll: new Date() - dynamoStart + ' [ms]',
                saveAll: dynamoRow.saveAll
            });
        });
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
                <Button variant="contained" className="reset-button" color="error" onClick={onDelete}>
                    Reset
                </Button>
            </div>
            <div className='time-table-container'>
                <FillDatabaseTimeTable dynamoRow={dynamoRow} mongoRow={mongoRow} cassandraRow={cassandraRow} postgresRow={postgresRow} />
            </div>
        </div>
    );
};

export default ReadTab;