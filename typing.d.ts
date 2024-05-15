import { AsyncError } from "./src/uitls/typing"

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
    asyncErrorOptions: AsyncErrorOptions | false,
    promiseErrorOptions: PromiseErrorOptions | false,
    resourceErrorOptions: ResourceErrorOptions | false,
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
    errorOptions: ErrorOptions | false,
    behaviorOptions: BehaviorOptions | false,
    pvUvOptions: PvUvOptions | false,
    mode: 'Hash' | 'History'
}
//  init 
export interface InItClass {
    loaddingConfig: (options: Options) => void;
}