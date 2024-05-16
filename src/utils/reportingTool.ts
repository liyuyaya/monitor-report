import { ErrorType, Options } from "../../index";
import { AllError, AsyncError, AutoTrackerAction, PromiseError, RequestParmas } from "../../types/typing";
import { utils } from "./utils";

export function reportingTool<T>(parmas: T, globalOptions: Options) {
    const requestParmas: RequestParmas & T = Object.assign({
        host: window.location.host,
        hostname: window.location.hostname,
        port: window.location.port,
        protocol: window.location.protocol,
        origin: window.location.origin,
    }, parmas)
    console.log("实际结果：", globalOptions);

    if (globalOptions.isReport) {
        utils.log("上报中")
    } else {
        utils.log("不上报")
    }

    console.log("parmas", parmas);
    utils.log(parmas)
    // console.log("requestParmas", requestParmas);
    // console.log("globalOptions", globalOptions);
}

/**
 * error 
 * @param param  
 * @param globalOptions 
 */
export function errorReportingTool<T extends AllError>(params: T, globalOptions: Options) {
    reportingTool(params, globalOptions)
}
/**
 * behavior 
 * @param params 
 * @param globalOptions 
 */
export function behaviorReportingTool<T extends AutoTrackerAction>(params: T, globalOptions: Options) {
    reportingTool(params, globalOptions)
}
/**
 * pv uv
 * @param params 
 * @param globalOptions 
 */
export function pvUvReportingTool<T>(params: T, globalOptions: Options) {
    reportingTool(params, globalOptions)
}