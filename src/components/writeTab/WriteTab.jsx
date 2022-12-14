import React, { useState } from "react";
import ExecuteButton from "../ExecuteButton";
import DatabasePicker from "../databasePicker/DatabasePicker";
import RecordsCounter from "../recordsCounter/RecordsCounter";
import QuerySelect from "../querySelect/QuerySelect";
import "./WriteTab.scss";

const WriteTab = () => {
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

export default WriteTab;