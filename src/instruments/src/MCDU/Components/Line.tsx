import React from "react";

enum column_sides {
    Left = "align-left",
    Center = "align-center",
    Right = "align-right"
}

type LineProps = {
    side: column_sides,
    line?: JSX.Element,
}

const Line: React.FC<LineProps> = ({line, side}) => {
    return (
        <div className={side}>
            {line}
        </div>
    )
}

export {Line, column_sides, LineProps};