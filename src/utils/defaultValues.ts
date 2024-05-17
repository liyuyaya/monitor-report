import { Options } from "../../index";

//  default options values

export const defaultOptionsValue: Options = {
    mode: 'History',
    log: true,
    isReport: true,
    errorOptions: {
        url: window.location.origin + "/example",
        asyncErrorOptions: {},
        resourceErrorOptions: {},
        promiseErrorOptions: {}
    },

    behaviorOptions: {
        url: window.location.origin + "/example",
    },
    pvUvOptions: {
        url: window.location.origin + "/example",
    }
}