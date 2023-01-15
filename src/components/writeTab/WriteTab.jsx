import React, { useState } from "react";
import ExecuteButton from "../ExecuteButton";
import DatabasePicker from "../databasePicker/DatabasePicker";
import QuerySelect from "../querySelect/QuerySelect";
import "./WriteTab.scss";

const WriteTab = () => {
    const [activeTypeId, setActiveTypeId] = useState('POSTGRESQL');
    const [queryId, setQueryId] = useState('READ');

    return (
    <div className='database-project-query'>
        <DatabasePicker active={activeTypeId} changeType={setActiveTypeId} />
        <QuerySelect queryId={queryId} onChange={setQueryId} />
        <ExecuteButton type={activeTypeId} query={queryId}/>
    </div> );
};

export default WriteTab;