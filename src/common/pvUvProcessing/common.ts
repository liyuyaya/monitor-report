import { Options, PvUvOptions } from "../../../index";
import { HistoryEventEnum } from "../../utils/enums";
import { pvUvReportingTool } from "../../utils/reportingTool";
import { PvUvtype } from "../../../types/typing";

export function listenerFc(
    options: PvUvOptions,
    globalOptions: Options
) {
    let preTime = Date.now();
    let prePath = '';
    const getTime = () => {
        const currentTIme = Date.now();
        const stayTime = currentTIme - preTime;
        preTime = currentTIme;
        return stayTime;
    }
    return function (
        type: PvUvtype,
    ) {
        const stayTime = getTime();
        const currentPath = window.location.href;
        console.log("listener", {
            stayTime, currentPath, prePath, type
        });
        pvUvReportingTool({
            stayTime,
            currentPath,
            prePath,
            type,
        }, globalOptions)
        prePath = currentPath;
    }
}


//  create new event listener
export function createNewEventListener(type: 'pushState' | 'replaceState') {
    // const origin = window.history[type];
    const origin: any = window.history[type];
    return function (this: any) {
        const res = origin.apply(this as any, arguments);
        const event = new Event(type);
        window.dispatchEvent(event);
        return res;
    }
}
