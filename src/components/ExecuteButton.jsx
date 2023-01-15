import React from "react";
import Button from "@mui/material/Button";
import { queryMongo } from "../services/mongoService";
import { queryPostgresql } from "../services/postgresqlService";
import { queryCassandra } from "../services/cassandraService";
import { queryDynamo } from "../services/dynamoService";


const ExecuteButton = ({ type, query, setRows, rows }) => {
    const handleExecute = () => {
        let items;
        let newRow;
        let start;
        switch (type) {
            case 'MONGODB':
                items = [...rows];
                newRow = {...rows[0]};
                start = new Date();
                queryMongo(query)
                    .then(() => {
                        newRow[query.toLowerCase()] = new Date() - start;
                        items[0] = newRow;
                        setRows(items);
                    });
                break;
            case 'POSTGRESQL':
                items = [...rows];
                newRow = {...rows[1]};
                start = new Date();
                queryPostgresql(query).then(() => {
                    newRow[query.toLowerCase()] = new Date() - start;
                    items[1] = newRow;
                    setRows(items);
                });
                break;
            case 'CASSANDRA':
                items = [...rows];
                newRow = {...rows[2]};
                start = new Date();
                queryCassandra(query).then(() => {
                    newRow[query.toLowerCase()] = new Date() - start;
                    items[2] = newRow;
                    setRows(items);
                });
                break;
            case 'DYNAMODB':
                items = [...rows];
                newRow = {...rows[3]};
                start = new Date();
                queryDynamo(query).then(() => {
                    newRow[query.toLowerCase()] = new Date() - start;
                    items[3] = newRow;
                    setRows(items);
                });
                break;
            default:
                console.log('cusik nie dziala');
        }
    }

    return (
        <Button onClick={handleExecute} variant='contained' className='execute-button'>
            Execute
        </Button>
    );
}

export default ExecuteButton;