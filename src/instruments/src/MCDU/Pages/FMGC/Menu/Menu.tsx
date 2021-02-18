import React, {useContext, useEffect, useState} from 'react';
import {Column} from "../../../Components/Column";
import {RootContext} from "../../../RootContext.jsx"
import "../../../Components/styles.scss"
import {useInteractionEvent} from "../../../../Common/hooks";
import {LineHolder} from "../../../Components/Lines/LineHolder";
import {LineOnly} from "../../../Components/Lines/LineOnly";
import {lineColors, lineSides} from "../../../Components/Lines/Line";
import {LabelAndLine} from "../../../Components/Lines/LabelAndLine";

type MenuProps = {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

const MenuPage: React.FC<MenuProps> = ({setPage}) => {
    const [activeSys, setActiveSys] = useState("FMGC"); // Placeholder till FMGS in place
    const [selected, setSelected] = useState(false);
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

    function determineColor(system) {
        if (activeSys == system) {
            return lineColors.green
        } else {
            return lineColors.white
        }
    }

    function determineText(system) {
        if (activeSys == system) {
            if (selected) {
                return `<${system} (SEL)`
            } else {
                return system === "FMGC" ? `<FMGC (REQ)` : `<${system}`;
            }
        } else {
            return system === "FMGC" ? `<FMGC (REQ)` : `<${system}`
        }
    }

    return (
        <>
            <Column> //TODO find a way to insert
                <LineHolder>
                    <LineOnly value={determineText("FMGC")} color={determineColor("FMGC")} />
                </LineHolder>
                <LineHolder>
                    <LineOnly value={determineText("ATSU")} color={determineColor("ATSU")} />
                </LineHolder>
                <LineHolder>
                    <LineOnly value={determineText("AIDS")} color={determineColor("ATSU")} />
                </LineHolder>
                <LineHolder>
                    <LineOnly value={determineText("CFDS")} color={determineColor("CFDS")} />
                </LineHolder>
                <LineHolder />
                <LineHolder />
            </Column>
            <Column>
                <LineHolder>
                    <LabelAndLine
                        labelValue={"SELECT\xa0"}
                        lineValue={"NAV B/UP>"}
                        labelSide={lineSides.right}
                        lineSide={lineSides.right}
                    />
                </LineHolder>
                <LineHolder />
                <LineHolder />
                <LineHolder />
                <LineHolder>
                    <LineOnly value={"OPTIONS>"} side={lineSides.right}/>
                </LineHolder>
                <LineHolder>
                    <LineOnly value={"RETURN>"} side={lineSides.right} />
                </LineHolder>
            </Column>
        </>
    )
}

export default MenuPage