import { Options } from "../../typing";

//  default options values

export const defaultOptionsValue: Options = {

    mode: 'History',
    errorOptions: {
        url: window.location.origin + "/api",
        asyncErrorOptions: {},
        resourceErrorOptions: {},
        promiseErrorOptions: {}
    },
    behaviorOptions: {
        url: window.location.origin + "/api",
    },
    pvUvOptions: {
        url: window.location.origin + "/api",
    }
}