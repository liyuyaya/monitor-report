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
        console.log("options,options", options);

        if (options.errorOptions) errorTrackerReport(options.errorOptions, options);
        if (options.behaviorOptions) behaviorTrackerReport(options.behaviorOptions, options);
        if (options.pvUvOptions) pvUvTrackerReport(options.pvUvOptions, options);
    }
    inspect(options: Options) {
        try {
            if (options.mode !== "History" && options.mode !== "Hash") {
                throw new Error("mode error (History or Hash) ")
            }
            return true
        } catch (error: any) {
            utils.log(error.message, "fail")
            return false;
        }
    }
}