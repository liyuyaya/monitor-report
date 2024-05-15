import { Options } from "../../typing";
import { AsyncError, PromiseError, RequestParmas } from "./typing";

export function reportingTool<T>(parmas: T, globalOptions: Options) {
    const requestParmas: RequestParmas & T = Object.assign({
        host: window.location.host,
        hostname: window.location.hostname,
        port: window.location.port,
        protocol: window.location.protocol,
        origin: window.location.origin,
    }, parmas)
    console.log("parmas", parmas);

    // console.log("requestParmas", requestParmas);
    // console.log("globalOptions", globalOptions);


}