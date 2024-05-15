import { BehaviorOptions, Options } from "../../../typing";
import { EventEnum } from "../../uitls/enums";
import { reportingTool } from "../../uitls/index";
import { AutoTrackerAction, ElementInfo } from "../../uitls/typing";
import { dtUtils, getElementInfo, getPathToElement, isJosn } from "../../uitls/utils";

// "this" 隐式具有类型 "any"，因为它没有类型注释。
export function behaviorTrackerReport(options: BehaviorOptions, globalOptions: Options) {
    window.document.body.addEventListener('click', dtUtils((e: { target: HTMLScriptElement | HTMLLIElement | HTMLImageElement; }) => {
        const target = e.target as (HTMLScriptElement | HTMLLIElement | HTMLImageElement);
        if (target) {
            const noUse = target.getAttribute('no-use');
            if (noUse) {
                return;
            }
            const path = getPathToElement(target);
            const values = target.getAttribute('data-info');
            let elementInfo: ElementInfo = {}
            if (values) {
                // 暂无需求 
                if (isJosn(values as string)) {
                    elementInfo.text = values;
                } else {
                    elementInfo.text = values;
                }
            } else {
                elementInfo = getElementInfo(e);
            }
            reportingTool<AutoTrackerAction>({
                html: path,
                name: target.tagName,
                type: EventEnum.ONCLICK,
                ...elementInfo,
            }, globalOptions)
        }
    }, true, 500), false,)
}