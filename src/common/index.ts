import { InItClass, Options } from "../../typing";
import { defaultOptionsValue } from "../uitls/defaultValues";
import { initParamsUtils } from "../uitls/utils";
import { pvUvTrackerReport } from "./pvUvProcessing/pvUvTrackerReport";
import { behaviorTrackerReport } from "./behaviorProcessing/behaviorTrackerReport";
import { errorTrackerReport } from "./errorProcessing/errorTrackerReport";


//  init 
export class InitConstructor implements InItClass {
    constructor(options: Options) {
        const reusltOptions = initParamsUtils(defaultOptionsValue, options);
        this.loaddingConfig(reusltOptions);
        console.log(
            '%c鲤鱼',
            'font-family:Arial,Helvetica,sans-serif;color: white; font-weight: bold;background-color: #0abf5b;padding:2px 10px;border-radius: 3px;font-size: 12px;',
            '启动成功',
        );
    }
    // loadding  config
    loaddingConfig(options: Options) {
        if (options.errorOptions) errorTrackerReport(options.errorOptions, options);
        if (options.behaviorOptions) behaviorTrackerReport(options.behaviorOptions, options);
        if (options.pvUvOptions) pvUvTrackerReport(options.pvUvOptions, options);
    }
}