import { Options, PvUvOptions } from "../../../typing";
import { HistoryEventEnum } from "../../utils/enums";

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
        type: 'pushState' | 'replaceState' | 'load' | 'unload' | 'popstate',
    ) {
        const stayTime = getTime();
        const currentPath = window.location.href;
        console.log("listener", {
            stayTime, currentPath, prePath, type
        });
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
