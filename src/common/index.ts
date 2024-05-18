import { Options } from "../../index";
import { defaultOptionsValue } from "../utils/defaultValues";
import { initParamsUtils, utils, } from "../utils/utils";
import { pvUvTrackerReport } from "./pvUvProcessing/pvUvTrackerReport";
import { behaviorTrackerReport } from "./behaviorProcessing/behaviorTrackerReport";
import { errorTrackerReport } from "./errorProcessing/errorTrackerReport";


//  init 
export class InitConstructor {
    constructor(options: Options) {
        const inspectResult = this.inspect(options);
        if (inspectResult) {
            this.loaddingConfig(options);
            utils.log('successfully started')
        } else {
            utils.log('fail to start', "fail")
        }

    }
    // loadding  config
    loaddingConfig(options: Options) {
        if (options.errorOptions) errorTrackerReport(options.errorOptions, options);
        if (options.behaviorOptions) behaviorTrackerReport(options.behaviorOptions, options);
        if (options.pvUvOptions) pvUvTrackerReport(options.pvUvOptions, options);
    }
    inspect(options: Options) {
        try {
            if (options.mode !== "History" && options.mode !== "Hash") {
                throw new Error("mode error (History or Hash)[模式错误，请使用History或者Hash模式] ")
            }
            if (typeof options.errorOptions == "object") {
                if (!options.errorOptions.url) {
                    throw new Error("options.errorOptions.url not define")
                }
            }
            if (typeof options.behaviorOptions == "object") {
                if (!options.behaviorOptions.url) {
                    throw new Error("options.behaviorOptions.url not define")
                }
            }
            if (typeof options.pvUvOptions == "object") {
                if (!options.pvUvOptions.url) {
                    throw new Error("options.pvUvOptions.url not define")
                }
            }
            return true
        } catch (error: any) {
            utils.log(error.message, "fail")
            return false;
        }
    }
}