import { AsyncErrorOptions, ErrorOptions, Options, PromiseErrorOptions, ResourceErrorOptions, } from "../../../typing";
import { ErrorType } from "../../uitls/enums";
import { reportingTool } from "../../uitls/index";
import { InternalError, PromiseError, RequestError, ResourceError } from "../../uitls/typing";

// 普通异常的错误
// async error tracker processing  
const asyncErrorTrackerReport = (options: AsyncErrorOptions, globalOptions: Options) => {
    const onError = window.onerror;
    window.onerror = function (message, url, row, col, error) {
        console.log(window, message, url, row, col, error);

        try {
            if (onError) {
                onError.call(window, message, url, row, col, error)
            };
            reportingTool({
                message: message as string,
                url: url as string,
                rowCol: row + ":" + col,
                errorType: ErrorType.ASYNCERROR
            }, globalOptions)
        } catch (error: any) {
            reportingTool<InternalError>({
                name: promiseErrorTrackerReport.name,
                message: error.message,
                errorType: ErrorType.INNEREXCEPTION
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
                    reportingTool<RequestError>({
                        message: reason.message + ": [ " + errorMessage.slice(startIndex, endIndex) + " ]",
                        url: reason.config.url,
                        errorType: ErrorType.REQUESTEERROR
                    }, globalOptions)
                }
            } else {
                reportingTool<PromiseError>({
                    message: reason,
                    errorType: ErrorType.PROMISEERROR
                }, globalOptions)
            }
        } catch (error: any) {
            reportingTool<InternalError>({
                name: promiseErrorTrackerReport.name,
                message: error.message,
                errorType: ErrorType.INNEREXCEPTION
            }, globalOptions)
        }
    }, true)


}
// resource 错误
// resource error tracker processing 
const resourceErrorTarckerReport = (options: ResourceErrorOptions, globalOptions: Options) => {
    window.addEventListener('error', function (error) {
        try {
            const target = error.target as (HTMLScriptElement | HTMLLIElement | HTMLImageElement);
            const isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLIElement || target instanceof HTMLImageElement;
            // 如果不是资源退出
            // If it weren't for resource exit
            if (!isElementTarget) {
                return;
            }
            reportingTool<ResourceError>({
                message: 'loadding ' + (target as HTMLImageElement).tagName + ' resource error',
                html: target.outerHTML,
                name: (target as HTMLImageElement).tagName,
                url: (target as HTMLImageElement).src,
                errorType: ErrorType.RESOURCEERROR
            }, globalOptions)
        } catch (error: any) {
            reportingTool<InternalError>({
                name: promiseErrorTrackerReport.name,
                message: error.message,
                errorType: ErrorType.INNEREXCEPTION
            }, globalOptions)
        }

    }, true)
}

// error tracker 
export function errorTrackerReport(errorOptions: ErrorOptions, options: Options) {

    const { asyncErrorOptions, promiseErrorOptions, resourceErrorOptions } = errorOptions;

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