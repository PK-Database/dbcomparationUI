import React, { useState } from "react";
import ExecuteButton from "../../components/ExecuteButton";
import "./QueryPage.scss";
import DatabasePicker from "../../components/databasePicker/DatabasePicker";
import RecordsCounter from "../../components/recordsCounter/RecordsCounter";
import QuerySelect from "../../components/querySelect/QuerySelect";

const QueryPage = () => {
    const [activeTypeId, setActiveTypeId] = useState(0);
    const [recordsNumber, setRecordsNumber] = useState(0);
    const [queryId, setQueryId] = useState(0);

    return (
    <div className='database-project-query'>
        <DatabasePicker active={activeTypeId} changeType={setActiveTypeId} />
        <RecordsCounter recordsNumber={recordsNumber} onNumberChange={setRecordsNumber} />
        <QuerySelect queryId={queryId} onChange={setQueryId} />
        <ExecuteButton type={activeTypeId} record={recordsNumber} query={queryId}/>
    </div> );
};

export default QueryPage;