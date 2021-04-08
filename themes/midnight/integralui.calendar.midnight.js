import { c as css } from '../../external/lit-element.js';

export const iuiCalendarMidnightStyle = css`
    .iui-calendar {
        background-color: #252526;
        border-color: #151515;
        color: #cccccc;
    }
    .iui-calendar-cell {
        color: #cccccc;
    }
    .iui-calendar-cell-hovered, .iui-calendar-cell-grayed:hover {
        background: #1177bb;
        border-color: #1177bb;
    }
    .iui-calendar-cell-selected {
        background: #0e639c;
        border-color: #0e639c;
        color: white;
    }
    .iui-calendar-cell-today {
        border-color: #0a4369;
    }
    .iui-calendar-header-button-prev span {
        background-image: url(../../icons/prev-white-24.png);
    }
    .iui-calendar-header-button-next span {
        background-image: url(../../icons/next-white-24.png);
    }
    @keyframes calendar-cell-enter {
        0% { 	   
            background: transparent;
            border-color: transparent;
        }
        100% { 
            background: #1177bb;
            border-color: #1177bb;
        }
    }
    @keyframes calendar-cell-leave {
        0% { 	   
            background: #1177bb;
            border-color: #1177bb;
        }
        100% { 
            background: transparent;
            border-color: transparent;
        }
    }
`;