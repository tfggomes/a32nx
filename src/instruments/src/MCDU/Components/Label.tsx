import React, {FunctionComponent} from "react";
import "./styles.scss"

enum label_sides {
    Left = "left-label",
    Center = "center-label",
    Right = "right-label"
}

type LabelProps = {
    text?: string,
    side?: label_sides,
    color?: string,
}

const defaultProps: LabelProps = {
    text: "",
    side: label_sides.Left,
    color: "white"
}

const Label: FunctionComponent<LabelProps> = ({text, side, color}) => (
        <label className={side}>
            <span className={color}>{text}</span>
        </label>
);

Label.defaultProps = defaultProps;

export {Label, LabelProps, label_sides} ;