import React, {FunctionComponent, useContext, useEffect, useState} from "react";
import { RootContext } from "../RootContext.jsx";
import { useInteractionEvent } from "../../Common/hooks";

export type NumberInputProps = {
    color?: string
    min: number,
    max: number,
    value?: number | string,
    event: string
}

const defaultNumberInputProps: NumberInputProps = {
    color: "white",
    min: 0,
    max: 10,
    event: "null"
}

export const NumberInput : FunctionComponent<NumberInputProps> = ({event, color, min, max, value: propsValue}) => {
    if (event === "null") {
        throw new Error();
    }

    const [input, handleInput] = useState(1);
    const [value, setValue] = useState(propsValue);
    const [scratchpad, setScratchpad, ,] = useContext(RootContext);

    useInteractionEvent(event, () => handleInput(1))

    useEffect(() => {
        if (scratchpad >= min && scratchpad <= max) {
            setValue(scratchpad)
        } else {
            setScratchpad("ERROR");
        }
    },[input])

    return (
        <Input color={color} value={value} />
    )
}

NumberInput.defaultProps = defaultNumberInputProps

export type InputProps = {
    color?: string
    value?: any
}

const DefaultInputProps = {
    color: "white"
}

export const Input : FunctionComponent<InputProps> = ({color, value}) => {
    return (
        <p>
            <span className={color}>{value}</span>
        </p>
    )
}

Input.defaultProps = DefaultInputProps;