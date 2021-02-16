import React, {FunctionComponent} from "react";
import "./styles.scss"

type FieldProps = {
    text?: string,
    color?: string,
}

const defaultProps: FieldProps = {
    text: "",
    color: "white"
}

const Field: FunctionComponent<FieldProps> = ({text, color}) => (
    <p>
        <span className={color}>{text}</span>
    </p>
)

Field.defaultProps = defaultProps

export {Field, FieldProps};