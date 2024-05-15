
import { InitConstructor } from "./common/index";
import { ErrorType, EventType, Options } from "../typing";
import { reportingTool } from "./utils/reportingTool";
import { defaultOptionsValue } from "./utils/defaultValues";
import { initParamsUtils } from "./utils/utils";

// init config
function monitorReport(options: Options) {
    const reusltOptions = initParamsUtils(defaultOptionsValue, options);
    new InitConstructor(options);
    return {
        reporting(type: (EventType | ErrorType)) {
            reportingTool({}, reusltOptions)
        },
    }
}

export {
    monitorReport
} 