import React, {FunctionComponent} from "react";
import "./styles.scss"
import {Line, column_sides} from "./Line";

type ColumnProps = {
    side: column_sides
    line1?: JSX.Element,
    line2?: JSX.Element,
    line3?: JSX.Element,
    line4?: JSX.Element,
    line5?: JSX.Element,
    line6?: JSX.Element,
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