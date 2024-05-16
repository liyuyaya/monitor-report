import { AsyncErrorOptions, ErrorOptions, Options, PromiseErrorOptions, ResourceErrorOptions, } from "../../../index";
import { ErrorTypeEnum } from "../../utils/enums";
import { errorReportingTool } from "../../utils/reportingTool";
import { AsyncError, InternalError, PromiseError, RequestError, ResourceError } from "../../../types/typing";

// 普通异常的错误
// async error tracker processing  
const asyncErrorTrackerReport = (options: AsyncErrorOptions, globalOptions: Options) => {
    const onError = window.onerror;
    window.onerror = function (message, url, row, col, error) {
        try {
            if (onError) {
                onError.call(window, message, url, row, col, error)
            };
            errorReportingTool<AsyncError>({
                message: message as string,
                url: url as string,
                type: ErrorTypeEnum.ASYNCERROR,
                name: `eroor：[${row + ":" + col}]`,
                rank: "001"
            }, globalOptions)
        } catch (error: any) {
            errorReportingTool<InternalError>({
                name: promiseErrorTrackerReport.name,
                message: error.message,
                type: ErrorTypeEnum.INTERNALERROR,
                rank: "101"
            }, globalOptions)
        }
    };
}
// promise 的错误
// promise error tracker processing 
const promiseErrorTrackerReport = (options: PromiseErrorOptions, globalOptions: Options) => {

    window.addEventListener('unhandledrejection', function (error) {
        let reason = error.reason;
        try {
            if (typeof reason == 'object') {
                if (reason.response.data) {
                    const errorMessage = reason.response.data;
                    const startIndex = errorMessage.indexOf('<pre>') + 5;
                    const endIndex = errorMessage.indexOf('</pre>');
                    errorReportingTool<RequestError>({
                        message: reason.message + ": [ " + errorMessage.slice(startIndex, endIndex) + " ]",
                        url: reason.config.url,
                        type: ErrorTypeEnum.REQUESTEERROR,
                        name: "",
                        rank: "003"
                    }, globalOptions)
                }
            } else {
                errorReportingTool<PromiseError>({
                    message: reason,
                    type: ErrorTypeEnum.PROMISEERROR,
                    name: "",
                    rank: "002"
                }, globalOptions)
            }
        } catch (error: any) {
            errorReportingTool<InternalError>({
                name: promiseErrorTrackerReport.name,
                message: error.message,
                type: ErrorTypeEnum.INTERNALERROR,
                rank: "101"
            }, globalOptions)
        }
    }, true)


}
// resource 错误
// resource error tracker processing 
const resourceErrorTarckerReport = (options: ResourceErrorOptions, globalOptions: Options) => {
    window.addEventListener('error', function (error) {
        try {
            console.log("error");

            const target = error.target as (HTMLScriptElement | HTMLLIElement | HTMLImageElement);
            const isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLIElement || target instanceof HTMLImageElement;
            // 如果不是资源退出
            // If it weren't for resource exit
            if (!isElementTarget) {
                return;
            }
            errorReportingTool<ResourceError>({
                message: 'loadding ' + (target as HTMLImageElement).tagName + ' resource error:' + target.outerHTML,
                name: (target as HTMLImageElement).tagName,
                url: (target as HTMLImageElement).src,
                type: ErrorTypeEnum.RESOURCEERROR,
                rank: "002"
            }, globalOptions)
        } catch (error: any) {
            errorReportingTool<InternalError>({
                name: promiseErrorTrackerReport.name,
                message: error.message,
                type: ErrorTypeEnum.INTERNALERROR,
                rank: "002"
            }, globalOptions)
        }

    }, true)
}

// error tracker 
export function errorTrackerReport(errorOptions: ErrorOptions, options: Options) {
    const { asyncErrorOptions, promiseErrorOptions, resourceErrorOptions } = errorOptions;
    console.log(errorOptions);

    if (asyncErrorOptions) {
        asyncErrorTrackerReport(asyncErrorOptions, options);
    }
    if (promiseErrorOptions) {
        promiseErrorTrackerReport(promiseErrorOptions, options);
    }
    if (resourceErrorOptions) {
        resourceErrorTarckerReport(resourceErrorOptions, options)
    }
}