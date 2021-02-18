// import React, {useContext, useEffect} from "react";
// import {Column, column_sides} from "../../../Components/Column";
// import "../../../Components/styles.scss"
// import {colors, FieldAndLabel, FieldOnly} from "../../../Components/Inputs";
// import {RootContext} from "../../../RootContext.jsx";
// import {label_sides} from "../../../Components/Label";
// import {useSimVar} from "../../../../Common/simVars";
//
//
// // TODO move this to utils?
// const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
// const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//
// function findNewMonthIndex(index) {
//     if (index === 0) {
//         return 11;
//     } else {
//         return index - 1;
//     }
// }
//
// function lessThan10(num) {
//     if (num < 10) {
//         return `0${num}`;
//     } else {
//         return num;
//     }
// }
//
// function calculateActiveDate(date) {
//     if (date.length === 13) {
//         const startMonth = date.slice(0, 3);
//         const startDay = date.slice(3, 5);
//
//         const endMonth = date.slice(5, 8);
//         const endDay = date.slice(8, 10);
//
//         return `${startDay}${startMonth}-${endDay}${endMonth}`;
//     } else {
//         return date;
//     }
// }
//
// function calculateSecDate(date) {
//     if (date.length === 13) {
//         const primStartMonth = date.slice(0, 3);
//         const primStartDay = date.slice(3, 5);
//
//         const primStartMonthIndex = months.findIndex((item) => item === primStartMonth);
//
//         if (primStartMonthIndex === -1) {
//             return "ERR";
//         }
//
//         let newEndMonth = primStartMonth;
//         let newEndDay = primStartDay - 1;
//
//         let newStartDay = newEndDay - 27;
//         let newStartMonth = primStartMonth;
//
//         if (newEndDay === 0) {
//             newEndMonth = months[findNewMonthIndex(primStartMonthIndex)];
//             newEndDay = monthLength[findNewMonthIndex(primStartMonthIndex)];
//         }
//
//         if (newStartDay <= 0) {
//             newStartMonth = months[findNewMonthIndex(primStartMonthIndex)];
//             newStartDay = monthLength[findNewMonthIndex(primStartMonthIndex)] + newStartDay;
//         }
//
//         return `${lessThan10(newStartDay)}${newStartMonth}-${lessThan10(newEndDay)}${newEndMonth}`;
//     } else {
//         return "ERR";
//     }
//
// }
//
//
// type IdentProps = {}
//
// const IdentPage: React.FC<IdentProps> = () => {
//     const [, , , setTitle] = useContext(RootContext);
//     //const date = useSimVar("FLIGHT NAVDATA DATE RANGE", "string")
//
//     useEffect(() => {
//         setTitle("A320-200")
//     }, []);
//     // TODO find a way to fix the right column
//     return (
//         <div className="two-columns">
//             <Column
//                 side={column_sides.Left}
//                 line1={<FieldAndLabel fieldValue={"LEAP-1A26"} labelValue={"\xa0ENG"} side={label_sides.Left} fieldColor={colors.GREEN} />}
//                 line2={<FieldAndLabel fieldValue={`TODO`} labelValue={"\xa0ACTIVE NAV DATA BASE"} side={label_sides.Left} fieldColor={colors.CYAN} />}
//                 line3={<FieldAndLabel fieldValue={`TODO`} fieldSize={"small"} labelValue={"\xa0SECOND NAV DATA BASE"} side={label_sides.Left} fieldColor={colors.INOP} />}
//                 line5={<FieldAndLabel fieldValue={"[  ]"} fieldSize={"small"} labelValue={"CHG CODE"} side={label_sides.Left}  fieldColor={colors.INOP} />}
//                 line6={<FieldAndLabel fieldValue={"+0.0/+0.0"} labelValue={"IDLE/PERF"} side={label_sides.Left} fieldColor={colors.GREEN} />}
//             />
//             <Column
//                 side={column_sides.Right}
//                 line2={<FieldOnly value={"AIRAC"} color={"green"} />}
//                 line6={<FieldAndLabel fieldValue={"STATUS/XLOAD>"} labelValue={"SOFTWARE"} side={label_sides.Right} fieldColor={colors.INOP} />}
//             />
//         </div>
//     )
// }
//
// export default IdentPage