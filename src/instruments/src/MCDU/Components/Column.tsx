import React, {ReactElement, useEffect, useState} from "react";
import "./styles.scss";
import {LineHolder, LineHolderProps} from "./Lines/LineHolder";

type ColumnProps = {
    side?: string,
    children?: React.FC<LineHolderProps>
}

const defaultProps: ColumnProps = {
    side: "column-left"
}

const   Column: React.FC<ColumnProps> = ({side, children}) => {
    const [contents, setContents] = useState(<></>);

    //TODO finish this
    let test = (React.Children.map(children, (child) => {
        let currentIndex = 0;
        if (React.isValidElement(child)) {
            let {index} = child.props;
            index = currentIndex;
        }
    }))
    useEffect(() => {
        setContents(React.Children.map(children, (child) => {

        }));
    }, [children]);
    return (
        <div className={`column-holder ${side}`}>
            {children}
        </div>
    )
}

Column.defaultProps = defaultProps

export {Column};