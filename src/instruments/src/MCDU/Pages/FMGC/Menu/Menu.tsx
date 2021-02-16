import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {Column, column_sides} from "../../../Components/Column";
import {LineType} from "../../../Components/Line";
import { RootContext } from "../../../RootContext.jsx"
import "./stlyes.scss"

type MenuProps = {

}
const MenuPage: FunctionComponent<MenuProps> = () => {
    const [l1, setl1] = useState<LineType>({field: {text: "FMGC",}});
    const [l2, setl2] = useState<LineType>({field: {text: "ATSU",}});
    const [l3, setl3] = useState<LineType>({field: {text: "AIDS",}});
    const [l4, setl5] = useState<LineType>({field: {text: "CFDS",}});
    const [r6, setr6] = useState<LineType>({field: {text: "Return",}});
    const [, , , setTitle] = useContext(RootContext);

    useEffect(() => {
        setTitle("MCDU MENU")
    }, []);

    return (
        <div className="menu-contents" >
            <Column side={column_sides.Left} line1={l1} line2={l2} line3={l3} line4={l4}/>
            <Column side={column_sides.Right} line6={r6}/>
        </div>
    )
}

export default MenuPage