import type { EventType } from '../index';

export type PvUvtype = 'pushState' | 'replaceState' | 'load' | 'unload' | 'popstate'


export type AutoTrackerAction = {
    name: string,
    type: EventType,
    html: string,
    text?: string | null | undefined
}

export type PvUv = {
    stayTime: number,
    currentPath: string,
    prePath: string,
    type: PvUvtype
}


export interface ErrorProps {
    message: string,
    name: string,
    /**
    *  001： 普通，
    *  002： 一般，
    *  003： 严重，
    *  101:  内部错误-普通,
    */
    rank: "001" | "002" | "003" | "101"
}
// internal error
export interface InternalError extends ErrorProps {
    type: 'internalError',

}
// async error
export interface AsyncError extends ErrorProps {
    url: string,
    type: "asyncError"
}

//  resource error
export interface ResourceError extends ErrorProps {
    url: string,
    type: "resourcError"
}
// promise Error
export interface PromiseError extends ErrorProps {
    type: "promisError",
    url?: string,
}
// request Error
export interface RequestError extends ErrorProps {
    type: "requestError",
    url?: string,
}
export type AllError = InternalError | AsyncError | ResourceError | PromiseError | RequestError
// reporting data
export type RequestParmas = {
    host: string,
    hostname: string,
    port: string,
    protocol: string,
    origin: string,
}

export type ElementInfo = {
    text?: null | string
}