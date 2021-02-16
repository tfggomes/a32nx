import React, {useContext, useEffect, useState} from 'react';
import {Column, column_sides} from "../../../Components/Column";
import { RootContext } from "../../../RootContext.jsx"
import "./stlyes.scss"
import {Input} from "../../../Components/LineSelect";
import {Label} from "../../../Components/Label";
import {useInteractionEvent} from "../../../../Common/hooks";

type MenuProps = {
    setPage: any
}

const SelectItem = (value: string, color: string = "white") => {
    return(
        <>
            <Label/>
            <Input value={value.toUpperCase()} color={color}/>
        </>
    )

}

const MenuPage: React.FC<MenuProps> = ({setPage}) => {
    const [activeSys, setActiveSys] = useState("FMGC");
    // Set to empty string as their set by the activeSys dependency
    const [FMGCColor, setFMGCColor] = useState("");
    const [ATSUColor, setATSUColor] = useState("");
    const [AIDSColor, setAIDSColor] = useState("");
    const [CFDSColor, setCFDSColor] = useState("");
    const [, , , setTitle] = useContext(RootContext);

    useInteractionEvent("A32NX_MCDU_L_L1_BUTTON_PRESSED", () => setActiveSys("FMGC"));
    useInteractionEvent("A32NX_MCDU_L_L2_BUTTON_PRESSED", () => setActiveSys("ATSU"));
    useInteractionEvent("A32NX_MCDU_L_L3_BUTTON_PRESSED", () => setActiveSys("AIDS"));
    useInteractionEvent("A32NX_MCDU_L_L4_BUTTON_PRESSED", () => setActiveSys("CFDS"));

    useEffect(() => {
        setTitle("MCDU MENU")
    }, []);

    useEffect(() => {
        setFMGCColor(activeSys === "FMGC" ? "green" : "white");
        setATSUColor(activeSys === "ATSU" ? "green" : "white");
        setAIDSColor(activeSys === "AIDS" ? "green" : "white");
        setCFDSColor(activeSys === "CFDS" ? "green" : "white");
    }, [activeSys]);

    return (
        <div className="menu-contents" >
            <Column
                side={column_sides.Left}
                line1={SelectItem("<FMGC (REQ)", FMGCColor)}
                line2={SelectItem("<ATSU", ATSUColor)}
                line3={SelectItem("<AIDS", AIDSColor)}
                line4={SelectItem("<CFDS", CFDSColor)}
            />
            <Column side={column_sides.Right} line5={SelectItem("OPTIONS>")} line6={SelectItem("RETURN>")}/>
        </div>
    )
}

export default MenuPage