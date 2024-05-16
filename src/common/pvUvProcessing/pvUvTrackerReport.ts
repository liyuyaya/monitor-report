import { Options, PvUvOptions } from "../../../index";
import { hashTackerReport } from "./hashTackerReport";
import { historyTrackerReport } from "./historyTrackerReport";





export function pvUvTrackerReport(options: PvUvOptions, globalOptions: Options) {
    console.log("ddd", globalOptions);

    if (globalOptions.mode == 'History') {
        historyTrackerReport(options, globalOptions)
    }
    if (globalOptions.mode == 'Hash') {
        hashTackerReport(options, globalOptions)
    }
} 