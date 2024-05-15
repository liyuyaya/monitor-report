
export enum ErrorTypeEnum {
    // async error 
    ASYNCERROR = "asyncError",
    // promise error 
    PROMISEERROR = "promisError",
    // resource error 
    RESOURCEERROR = "resourcError",
    // request error 
    REQUESTEERROR = "requestError",
    // internal error 
    INTERNALERROR = 'internalError',
}

export enum ErrorName {
    
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
    ONCLICK = "onclick"
}
