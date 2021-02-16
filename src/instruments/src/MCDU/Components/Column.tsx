import React, {FunctionComponent} from "react";
import "./styles.scss"
import {Line, LineType, column_sides} from "./Line";

type ColumnProps = {
    side: column_sides
    line1?: LineType,
    line2?: LineType,
    line3?: LineType,
    line4?: LineType,
    line5?: LineType,
    line6?: LineType,
}

const defaultProps: ColumnProps = {
    side: column_sides.Center
}

const Column: FunctionComponent<ColumnProps> = (
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
        <div className="column">
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