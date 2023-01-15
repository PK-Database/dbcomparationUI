import React, { useState } from "react";
import ExecuteButton from "../ExecuteButton";
import DatabasePicker from "../databasePicker/DatabasePicker";
import QuerySelect from "../querySelect/QuerySelect";
import "./WriteTab.scss";
import QueryTimeTable from "../queryTimeTable/QueryTimeTable";

const timeRows = [
    {
        id: 'MONGODB',
        read: '-',
        update: '-',
        delete: '-'
    },
    {
        id: 'POSTGRESQL',
        read: '-',
        update: '-',
        delete: '-'
    },
    {
        id: 'CASSANDRA ',
        read: '-',
        update: '-',
        delete: '-'
    },
    {
        id: 'DYNAMODB',
        read: '-',
        update: '-',
        delete: '-'
    }
];

const WriteTab = () => {
    const [activeTypeId, setActiveTypeId] = useState('POSTGRESQL');
    const [queryId, setQueryId] = useState('READ');
    const [rows, setRows] = useState(timeRows);

    return (
    <div className='database-project-query'>
        <DatabasePicker active={activeTypeId} changeType={setActiveTypeId} />
        <QuerySelect queryId={queryId} onChange={setQueryId} />
        <ExecuteButton type={activeTypeId} query={queryId} setRows={setRows} rows={rows} />
        <div className="time-table-container">
            <QueryTimeTable rows={rows} />
        </div>
    </div> );
};

export default WriteTab;