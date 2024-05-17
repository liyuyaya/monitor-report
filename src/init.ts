
import { InitConstructor } from "./common/index";
import { ErrorOptions, ErrorType, EventType, Options } from "../index";
import { behaviorReportingTool, errorReportingTool, pvUvReportingTool, reportingTool } from "./utils/reportingTool";
import { defaultOptionsValue } from "./utils/defaultValues";
import { initParamsUtils } from "./utils/utils";
import { AllError, AutoTrackerAction, PvUv } from "../types/typing";

// init config
function monitorReport(options: Options) {
    const resultOptions = initParamsUtils(defaultOptionsValue, options);
    window['__LIYU_IS_LOG__'] = resultOptions.log == false ? false : true;
    if (options.errorOptions) {
        window['__LIYU_ERROR_URL__'] = options.errorOptions.url;
    }
    if (options.behaviorOptions) {
        window['__LIYU_BEHAVIOR_URL__'] = options.behaviorOptions.url;
    }
    if (options.pvUvOptions) {
        window['__LIYU_PVUR_URL__'] = options.pvUvOptions.url;
    }
    new InitConstructor(resultOptions);
    return {
        errorReporting(errorOptions: AllError) {
            errorReportingTool<AllError>(errorOptions, resultOptions)
        },
        behaviorReporting(behaviorOptions: AutoTrackerAction) {
            behaviorReportingTool<AutoTrackerAction>(behaviorOptions, resultOptions)
        },
        pvUvReporting(PvUvOptions: PvUv) {
            pvUvReportingTool(PvUvOptions, resultOptions)
        }
    }
}

export {
    monitorReport
} 