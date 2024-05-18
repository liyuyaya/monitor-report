import type { AsyncError, AllError, AutoTrackerAction, PvUv } from "./types/typing"
// async field name
export type AsyncFieldNameOptions = {
    message: string | null,
    url: string | null,
    rowCol: string | null,
    errorType: string | null,
}

// asycn errpr options config
export type AsyncErrorOptions = {
    // fieldNames: AsyncFieldNameOptions
}
// promise errpr options config
export type PromiseErrorOptions = {
    // fieldNames: AsyncError
}

// resourece errpr options config
export type ResourceErrorOptions = {
    // fieldNames: AsyncError
}
// error options config
export type ErrorOptions = {
    asyncErrorOptions?: AsyncErrorOptions | false,
    promiseErrorOptions?: PromiseErrorOptions | false,
    resourceErrorOptions?: ResourceErrorOptions | false,
    url: string
}
export type BehaviorOptions = {
    url: string
}
export type PvUvOptions = {
    url: string
}
// options config
export interface Options extends Record<string, any> {
    /**
     *  error optipns  (错误配置)
     */
    errorOptions: ErrorOptions | false,
    /**
     *  behavior options (操作配置)
     */
    behaviorOptions?: BehaviorOptions | false,
    /**
     *  PV UV options (PV UV 配置)
     */
    pvUvOptions?: PvUvOptions | false,
    /**
     *  router0 mode (路由模式)
     */
    mode: 'Hash' | 'History',
    /**
     *  is log  (是否打印日志)
     */
    log?: boolean
    /**
     *  is report data （是否上报数据）
     */
    isReport: boolean;
    /**
     *  coustom fields (自定义上传字段)
     */
    customFields?: object;

}
export type EventType = 'onclick'
export type ErrorType = "asyncError" | "promisError" | "resourcError" | "requestError" | 'internalError'

/**
 * 
 * @param options 配置
 * @param {ErrorOptions | false} errorOptions error options (错误配置)
 * @param {BehaviorOptions | false} behaviorOptions behavior options (操作配置)   
 * @param {PvUvOptions | false} pvUvOptions pv uv options (pv，uv统计)
 * @param {'Hash' | 'History'} mode   mode(模式)
 * @param {boolean} log  log(日志)
 */
export function monitorReport(options: Options): {
    /**
     * 错误上报
     * @param options 
     */
    errorReporting(options: AllError): void;
    /**
     * 行为上报
     * @param behaviorOptions 
     */
    behaviorReporting(behaviorOptions: AutoTrackerAction): void;
    /**
     * pv uv 上报
     * @param PvUvOptions 
     */
    pvUvReporting(PvUvOptions: PvUv): void;
};
export default monitorReport;