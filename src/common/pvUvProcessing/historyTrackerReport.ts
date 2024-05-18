import { Options, PvUvOptions } from "../../../index";
import { HistoryEventEnum } from "../../utils/enums";
import { createNewEventListener, listenerFc } from "./common";



/**
 * event listener 
 * @param options 
 * @param globalOptions 
 */
function eventListener(options: PvUvOptions, globalOptions: Options) {
    // 
    const listener = listenerFc(options, globalOptions)
    window.addEventListener('pushState', function () {
        listener('pushState')
    })
    window.addEventListener('replaceState', function () {
        listener('replaceState')
    })
    // init load 首次加载
    window.addEventListener('load', function () {
        listener('load')
    });
    //  unload  卸载
    window.addEventListener('unload', function () {
        listener('unload')
    });
    //   go, back ,forward   跳转
    window.addEventListener('popstate', function (e) {
        listener('popstate')
    })
}

/**
 * history 
 * @param {PvUvOptions} options  
 * @param {Options} globalOptions
 */
export function historyTrackerReport(options: PvUvOptions, globalOptions: Options) {
    // new event listener
    window.history.pushState = createNewEventListener('pushState')
    window.history.replaceState = createNewEventListener('replaceState')
    // add event listener
    eventListener(options, globalOptions)

}

