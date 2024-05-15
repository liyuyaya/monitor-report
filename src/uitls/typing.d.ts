import { ErrorType, EventEnum } from './enums'

export type AutoTrackerAction = {
    name: string,
    type: EventEnum,
    html: string,
}

// internal error
export type InternalError = {
    message: string,
    name: string,
    errorType: ErrorType.INNEREXCEPTION | null
}

// async error
export type AsyncError = {
    message: string,
    url: string,
    rowCol: string,
    errorType: ErrorType.ASYNCERROR | null
}

//  resource error
export type ResourceError = {
    message: string,
    url: string,
    name: string,
    errorType: ErrorType.RESOURCEERROR | null
    html: string
}
// promise Error
export type PromiseError = {
    message: string,
    errorType: ErrorType.PROMISEERROR | null,
    url?: string,
}
// request Error
export type RequestError = {
    message: string,
    errorType: ErrorType.REQUESTEERROR | null,
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