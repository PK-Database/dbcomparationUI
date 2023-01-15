import React, { useState } from "react";
import Button from "@mui/material/Button";
import { queryMongo } from "../services/mongoService";
import { queryPostgresql } from "../services/postgresqlService";
import { queryCassandra } from "../services/cassandraService";
import { queryDynamo } from "../services/dynamoService";

const ExecuteButton = ({ type, query }) => {
    const handleExecute = () => {
        console.log(type);
        console.log(query);
        switch (type) {
            case 'MONGODB':
                queryMongo(query).then(() => console.log('query mongo completed'));
                break;
            case 'POSTGRESQL':
                queryPostgresql(query).then(() => console.log('query postgresql completed'));
                break;
            case 'CASSANDRA':
                queryCassandra(query).then(() => console.log('query cassandra completed'));
                break;
            case 'DYNAMO':
                queryDynamo(query).then(() => console.log('query cassandra completed'));
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