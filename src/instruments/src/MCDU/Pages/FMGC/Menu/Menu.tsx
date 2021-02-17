import React, {useContext, useEffect, useState} from 'react';
import {Column, column_sides} from "../../../Components/Column";
import {RootContext} from "../../../RootContext.jsx"
import "../../../Components/styles.scss"
import {label_sides} from "../../../Components/Label";
import {useInteractionEvent} from "../../../../Common/hooks";
import {colors, FieldAndLabel, FieldOnly} from "../../../Components/Inputs";

type MenuProps = {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

const MenuPage: React.FC<MenuProps> = ({setPage}) => {
    const [activeSys, setActiveSys] = useState("FMGC"); // Placeholder till FMGS in place
    const [selected, setSelected] = useState(false);
    const [FMGCText, setFMGCText] = useState("<FMGC (REQ)")
    const [FMGCColor, setFMGCColor] = useState("");
    const [ATSUColor, setATSUColor] = useState("");
    const [AIDSColor, setAIDSColor] = useState("");
    const [CFDSColor, setCFDSColor] = useState("");
    const [, , , setTitle] = useContext(RootContext);

    useInteractionEvent("A32NX_MCDU_L_L1_BUTTON_PRESSED", () => {
        setSelected(true);
        setActiveSys("FMGC")
    });
    useInteractionEvent("A32NX_MCDU_L_L2_BUTTON_PRESSED", () => {
        setSelected(true);
        setActiveSys("ATSU")
    });
    useInteractionEvent("A32NX_MCDU_L_L3_BUTTON_PRESSED", () => {
        setSelected(true);
        setActiveSys("AIDS")
    });
    useInteractionEvent("A32NX_MCDU_L_L4_BUTTON_PRESSED", () => {
        setSelected(true);
        setActiveSys("CFDS")
    });

    useEffect(() => {
        setTitle("MCDU MENU")
    }, []);

    useEffect(() => {
        setFMGCColor(activeSys === "FMGC" ? colors.GREEN : colors.WHITE);
        setATSUColor(activeSys === "ATSU" ? colors.GREEN : colors.WHITE);
        setAIDSColor(activeSys === "AIDS" ? colors.GREEN : colors.WHITE);
        setCFDSColor(activeSys === "CFDS" ? colors.GREEN : colors.WHITE);

        if (selected) {
            switch(activeSys) {
                case "FMGC":
                    setFMGCText("<FMGC (SEL)");
                    setFMGCColor(colors.CYAN);
                    setTimeout(() => {
                        setPage("IDENT");
                    }, 300);
                    break;
                case "ATSU":
                    break;
                case "AIDS":
                    break;
                case "CFDS":
                    break;
            }
        }
    }, [activeSys, selected]);

    return (
        <div className="two-columns" >
            <Column
                side={column_sides.Left}
                line1={<FieldOnly value={FMGCText} color={FMGCColor} />}
                line2={<FieldOnly value={"<ATSU"} color={ATSUColor} />}
                line3={<FieldOnly value={"<AIDS"} color={AIDSColor} />}
                line4={<FieldOnly value={"<CFDS"} color={CFDSColor} />}
            />
            <Column
                side={column_sides.Right}
                line1={<FieldAndLabel  fieldValue={"NAV B/UP>"} labelValue={"SELECT\xa0"} side={label_sides.Right} />}
                line5={<FieldOnly value={"OPTIONS>"} />}
                line6={<FieldOnly value={"RETURN>"} />}
            />
        </div>
    )
}

export default MenuPage