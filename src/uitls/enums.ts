
export enum ErrorType {
    // async error 
    ASYNCERROR = "ASYNCERROR",
    // promise error 
    PROMISEERROR = "PROMISEERROR",
    // resource error 
    RESOURCEERROR = "RESOURCEERROR",
    // request error 
    REQUESTEERROR = "REQUESTEERROR",
    // internal error 
    INNEREXCEPTION = 'INNEREXCEPTION',
}

// event enum 
export enum HistoryEventEnum {
    PUSHSTATE = 'pushState',
    REPLACESTATE = 'replaceState',
    LOAD = 'load',
    UNLOAD = 'unload',
    POPSTATE = 'popstate'
}
// event enum 
export enum HashEventEnum {
    LOAD = 'load',
    UNLOAD = 'hashchange',
}

export enum EventEnum {
    ONCLICK = "ONCLICK"
}