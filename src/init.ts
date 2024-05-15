
import { InitConstructor } from "./common/index";
import { ErrorType, EventType, Options } from "../index";
import { behaviorReportingTool, errorReportingTool, pvUvReportingTool, reportingTool } from "./utils/reportingTool";
import { defaultOptionsValue } from "./utils/defaultValues";
import { initParamsUtils } from "./utils/utils";
import { AllError, AutoTrackerAction, PvUv } from "../types/typing";

// init config
function monitorReport(options: Options) {
    const resultOptions = initParamsUtils(defaultOptionsValue, options);
    new InitConstructor(options);
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