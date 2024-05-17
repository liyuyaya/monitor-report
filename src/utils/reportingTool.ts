import { ErrorType, Options } from "../../index";
import { AllError, AsyncError, AutoTrackerAction, PromiseError, RequestParams, RequestURL } from "../../types/typing";
import { utils } from "./utils";


export function reportingTool<T>(params: T, globalOptions: Options) {
    const requestParams: T & RequestURL = Object.assign({
        host: window.location.host,
        hostname: window.location.hostname,
        port: window.location.port,
        protocol: window.location.protocol,
        origin: window.location.origin,
    }, params)
    console.log("实际结果：", globalOptions);

    if (globalOptions.isReport) {
        utils.log("上报中")
        console.log("requestparams.requestURL", requestParams.requestURL);
        navigator.sendBeacon(requestParams.requestURL as string, JSON.stringify(requestParams))

    } else {
        utils.log("不上报")
    }

    console.log("parmas", requestParams);
    utils.log(requestParams)
}

/**
 * error 
 * @param param  
 * @param globalOptions 
 */
export function errorReportingTool<T>(params: T, globalOptions: Options) {
    const requestURL = window['__LIYU_ERROR_URL__']
    reportingTool<T>({
        ...params, requestURL
    }, globalOptions)
}
/**
 * behavior 
 * @param params 
 * @param globalOptions 
 */
export function behaviorReportingTool<T>(params: T, globalOptions: Options) {
    const requestURL: string = window['__LIYU_BEHAVIOR_URL__'] as string
    reportingTool<T>({
        ...params,
        requestURL
    }, globalOptions)
}
/**
 * pv uv
 * @param params 
 * @param globalOptions 
 */
export function pvUvReportingTool<T>(params: T, globalOptions: Options) {
    const requestURL = window['__LIYU_PVUR_URL__']
    reportingTool<T>({ ...params, requestURL }, globalOptions)
}