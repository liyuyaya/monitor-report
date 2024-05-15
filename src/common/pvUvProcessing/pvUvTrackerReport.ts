import { Options, PvUvOptions } from "../../../typing";
import { hashTackerReport } from "./hashTackerReport";
import { historyTrackerReport } from "./historyTrackerReport";





export function pvUvTrackerReport(options: PvUvOptions, globalOptions: Options) {
    if (globalOptions.mode == 'History') {
        historyTrackerReport(options, globalOptions)
    }
    if (globalOptions.mode == 'Hash') {
        hashTackerReport(options, globalOptions)
    }
} 