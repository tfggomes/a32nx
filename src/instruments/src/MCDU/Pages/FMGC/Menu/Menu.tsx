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

const SelectItem = (value: string, color: string = "white",) => {
    return(
        <>
            <Label/>
            <Input value={value} color={color}/>
        </>
    )

}

const MenuPage: React.FC<MenuProps> = ({setPage}) => {
    const [l1, setl1] = useState("FMGC");
    const [l2, setl2] = useState("ATSU");
    const [l3, setl3] = useState("AIDS");
    const [l4, setl5] = useState("CFDS");
    const [r6, setr6] = useState("Return");
    const [, , , setTitle] = useContext(RootContext);

    useEffect(() => {
        setTitle("MCDU MENU")
    }, []);

    return (
        <div className="menu-contents" >
            <Column
                side={column_sides.Left}
                line1={SelectItem(l1)}
                line2={SelectItem(l2)}
                line3={SelectItem(l3)}
                line4={SelectItem(l4)}
            />
            <Column side={column_sides.Right} line6={SelectItem(r6)}/>
        </div>
    )
}

export default MenuPage