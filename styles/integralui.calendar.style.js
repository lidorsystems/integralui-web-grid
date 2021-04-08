import { c as css } from '../external/lit-element.js';

export const iuiCalendarDefaultStyle = css`
    .iui-calendar {
        background: white;
        border: thin solid #cecece;
        margin: 0;
        padding: 0;
        overflow: hidden;
        position: relative;
        cursor: default;
        
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-calendar:focus {
        outline: none !important;
    }

    .iui-calendar-header-button {
        display: inline-block;
        opacity: 0.6;
    }
    .iui-calendar-header-button:hover {
        opacity: 1;
    }
    .iui-calendar-header-button span {
        display: block;
        padding: 0;
        margin: 0;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .iui-calendar-header-button-prev {
        float: left;
    }
    .iui-calendar-header-button-prev span {
        background-image: url(../icons/prev-24.png);
    }
    .iui-calendar-header-button-next {
        float: right;
    }
    .iui-calendar-header-button-next span {
        background-image: url(../icons/next-24.png);
    }
    .iui-calendar-header-title {
        display: inline-block;
        text-align:center;
        white-space: nowrap;
    }
    .iui-calendar-cell-header {
        border: thin solid transparent;
        text-align: center;
        white-space: nowrap;
    }
    .iui-calendar-cell {
        border: thin solid transparent;
        border-radius: 3px;
        padding: 0 3px;
        text-align: right;
    }
    .iui-calendar-normal {
    }
    .iui-calendar-cell-hovered {
        background: #f5f5f5;
        border-color: #efefef;
    }
    .iui-calendar-cell-selected {
        background: #e5e5e5;
        border-color: #dedede;
    }
    .iui-calendar-cell-grayed {
        opacity: 0.5;
    }
    .iui-calendar-cell-grayed:hover {
        background: #f5f5f5;
        border-color: #efefef;
    }
    .iui-calendar-cell-today {
        border-color: #bebebe;
        font-weight: bold;
    }

    /* Disabled State */
    .iui-calendar-disabled {
        opacity: 0.75;
        pointer-events: none;
    }

    .iui-calendar-cell-enter {
        animation-name: calendar-cell-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes calendar-cell-enter {
        0% { 	   
            background: transparent;
            border-color: transparent;
        }
        100% { 
            background: #f5f5f5;
            border-color: #efefef;
        }
    }
    .iui-calendar-cell-leave {
        animation-name: calendar-cell-leave;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes calendar-cell-leave {
        0% { 	   
            background: #f5f5f5;
            border-color: #efefef;
        }
        100% { 
            background: transparent;
            border-color: transparent;
        }
    }
`;