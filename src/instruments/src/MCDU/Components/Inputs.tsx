// TODO think of a new name for this file.

import {Label, label_sides} from "./Label";
import {DefaultInputProps, Input, InputProps} from "./Input";
import React from "react";

export enum colors  {
    GREEN = "green",
    WHITE = "white",
    INOP = "inop",
    CYAN = "cyan",
    YELLOW = "yellow",
    AMBER = "amber",
    RED = "red",
    MAGENTA = "magenta",
}

export const FieldOnly: React.FC<InputProps> = ({value, color, size}) =>
    (
        <>
            <Label/>
            <Input value={value.toUpperCase()} color={color} size={size}/>
        </>
    )

FieldOnly.defaultProps = DefaultInputProps;

type FieldAndLabelProps = {
    fieldValue: string,
    labelValue: string,
    side: label_sides,
    fieldColor?: string,
    labelColor?: string,
    fieldSize?: string
}

const FieldAndLabelDefaultProps = {
    fieldValue: "",
    labelValue: "",
    side: label_sides.Center,
    fieldColor: "white",
    labelColor: "white",
    fieldSize: ""
}

export const FieldAndLabel: React.FC<FieldAndLabelProps> = (
    {
        fieldValue,
        fieldSize,
        labelValue,
        side,
        fieldColor,
        labelColor
    }) =>
    (
        <>
            <Label side={side} color={labelColor} text={labelValue.toUpperCase()}/>
            <Input value={fieldValue.toUpperCase()} color={fieldColor} size={fieldSize}/>
        </>
    )

FieldAndLabel.defaultProps = FieldAndLabelDefaultProps