import { Options } from "../../index";

//  default options values

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