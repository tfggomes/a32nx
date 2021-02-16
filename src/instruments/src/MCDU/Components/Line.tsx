import {Label, LabelProps} from "./Label";
import {Field, FieldProps} from "./Field";
import React, {FunctionComponent} from "react";

enum column_sides {
    Left = "align-left",
    Center = "align-center",
    Right = "align-right"
}


type LineType = {
    label?: LabelProps,
    field?: FieldProps,
}

type LineProps = {
    side: column_sides,
    line?: LineType
}

const Line: FunctionComponent<LineProps> = ({line, side}) => {
    return (
        <div className={side}>
            <Label text={line?.label?.text} color={line?.label?.color} side={line?.label?.side}/>
            <Field text={line?.field?.text} color={line?.field?.color}/>
        </div>
    )
}

export {Line, LineType, column_sides};