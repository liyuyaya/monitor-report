import { Options } from "../../index";
import { defaultOptionsValue } from "../utils/defaultValues";
import { initParamsUtils, utils, } from "../utils/utils";
import { pvUvTrackerReport } from "./pvUvProcessing/pvUvTrackerReport";
import { behaviorTrackerReport } from "./behaviorProcessing/behaviorTrackerReport";
import { errorTrackerReport } from "./errorProcessing/errorTrackerReport";


//  init 
export class InitConstructor {
    constructor(options: Options) {
        this.loaddingConfig(options);
        if (options.log) {
            utils.log('启动成功')
        }
    }
    // loadding  config
    loaddingConfig(options: Options) {
        console.log("options,options",options);
        
        if (options.errorOptions) errorTrackerReport(options.errorOptions, options);
        if (options.behaviorOptions) behaviorTrackerReport(options.behaviorOptions, options);
        if (options.pvUvOptions) pvUvTrackerReport(options.pvUvOptions, options);
    }
}