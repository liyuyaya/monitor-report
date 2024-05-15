import type { EventType } from '../../typing';
export type AutoTrackerAction = {
    name: string,
    type: EventType,
    html: string,
}

export interface ErrorProps {
    message: string,

}
// internal error
export type InternalError = {
    message: string,
    name: string,
    type: 'internalError'
}

// async error
export type AsyncError = {
    message: string,
    url: string,
    rowCol: string,
    type: "asyncError"
}

//  resource error
export type ResourceError = {
    message: string,
    url: string,
    name: string,
    type: "resourcError"
    html: string
}
// promise Error
export type PromiseError = {
    message: string,
    type: "promisError",
    url?: string,
}
// request Error
export type RequestError = {
    message: string,
    type: "requestError",
    url?: string,
}
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