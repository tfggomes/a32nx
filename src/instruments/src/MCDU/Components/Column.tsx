import React from "react";
import "./styles.scss"
import {Line, column_sides} from "./Line";

type ColumnProps = {
    side: column_sides
    line1?: React.ReactElement,
    line2?: React.ReactElement,
    line3?: React.ReactElement,
    line4?: React.ReactElement,
    line5?: React.ReactElement,
    line6?: React.ReactElement,
}

const defaultProps: ColumnProps = {
    side: column_sides.Center
}

const Column: React.FC<ColumnProps> = (
    {
        line1,
        line2,
        line3,
        line4,
        line5,
        line6,
        side
    }) => {
    return (
        <div className="column-holder">
           <Line side={side} line={line1}/>
           <Line side={side} line={line2}/>
           <Line side={side} line={line3}/>
           <Line side={side} line={line4}/>
           <Line side={side} line={line5}/>
           <Line side={side} line={line6}/>
        </div>
    )
}

Column.defaultProps = defaultProps

export {Column, column_sides};