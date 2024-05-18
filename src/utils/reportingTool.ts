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

    if (globalOptions.isReport) {
        utils.log("上报中")
        navigator.sendBeacon(requestParams.requestURL as string, JSON.stringify(Object.assign(requestParams, globalOptions.customFields)))
    } else {
        utils.log("不上报")
    }
    utils.log(requestParams)
}

/**
 * error (错误上报)
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
 * behavior （操作上报）
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
 * pv uv （pu uv 上报）
 * @param params 
 * @param globalOptions 
 */
export function pvUvReportingTool<T>(params: T, globalOptions: Options) {
    const requestURL = window['__LIYU_PVUR_URL__']
    reportingTool<T>({ ...params, requestURL }, globalOptions)
}