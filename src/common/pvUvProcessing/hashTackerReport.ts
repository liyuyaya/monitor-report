import { Options, PvUvOptions } from "../../../index";
import { HashEventEnum } from "../../utils/enums";
import { createNewEventListener, listenerFc } from "./common";
function eventListener(options: PvUvOptions, globalOptions: Options) {
    const listener = listenerFc(options, globalOptions);
    // init load 首次加载
    window.addEventListener('load', function () {
        listener('load')
    });
    window.addEventListener('pushState', function () {
        listener('pushState')
    })
}
export function hashTackerReport(options: PvUvOptions, globalOptions: Options) {
    // new event listener
    window.history.pushState = createNewEventListener('pushState')
    eventListener(options, globalOptions)
}