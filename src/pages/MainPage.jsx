import React, { useState } from "react";
import ExecuteButton from "../components/ExecuteButton";
import "./MainPage.scss";
import DatabasePicker from "../components/databasePicker/DatabasePicker";
import RecordsCounter from "../components/recordsCounter/RecordsCounter";

const MainPage = () => {
    const [activeTypeId, setActiveTypeId] = useState(0);
    const [recordsNumber, setRecordsNumber] = useState(0);

    return (
    <div className='database-project-container'>
        <DatabasePicker active={activeTypeId} changeType={setActiveTypeId} />
        <RecordsCounter recordsNumber={recordsNumber} onNumberChange={setRecordsNumber} />
        <ExecuteButton query={activeTypeId} records={recordsNumber}/>
    </div> );
};

export default MainPage;