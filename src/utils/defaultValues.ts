import type { Options } from "../../index";
export const defaultOptionsValue: Options = {
    mode: 'History',
    log: true,
    isReport: false,
    errorOptions: {
        asyncErrorOptions: {},
        promiseErrorOptions: {},
        resourceErrorOptions: {}
    },
    customFields: {}
}