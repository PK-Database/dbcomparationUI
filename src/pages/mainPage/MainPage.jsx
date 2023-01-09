import React, { useState } from "react"
import {Tab, Tabs} from "@mui/material";
import WriteTab from "../../components/writeTab/WriteTab";
import ReadTab from "../../components/readTab/ReadTab";
import "./MainPage.scss";

const MainPage = () => {
    const [tab, setTab] = useState(0);
    return (
        <div className="main-page-container">
            <Tabs
                value={tab}
                onChange={(e, newValue) => setTab(newValue)}
                variant="fullWidth"
                className="tabs"
            >
                <Tab label="Save to databases" value={0} className="tab" />
                <Tab label="Execute query" value={1} className="tab" />
            </Tabs>
            {tab === 0 ? (
                <ReadTab />
            ) : (
                <WriteTab />
            )}
        </div>
    )
};

export default MainPage;