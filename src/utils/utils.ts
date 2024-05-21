import { Options, PromiseErrorOptions } from "../../index";
import { ElementInfo, RequestError } from "../../types/typing";

/**
 * init options values （初始化值）
 * @param initValues 
 * @param options 
 * @returns 
 */
export function initParamsUtils(initValues: Options, options: Options) {
    for (const key in options) {
        if (Object.prototype.hasOwnProperty.call(options, key)) {
            if (typeof options[key] == 'object') {
                initParamsUtils(initValues[key], options[key])
            } else {
                if (options[key]) {
                    initValues[key] = options[key];
                } else {
                    if (typeof options[key] == 'boolean' || typeof options[key] == 'number') {
                        initValues[key] = options[key];
                    }
                }
            }
        }
    }
    return initValues;
}

/** no use  */
export function setFiekdNames(fieldNames: RequestError, options: PromiseErrorOptions) {

}


/**
 *  防抖节流
 * @param fn  
 * @param type false= 防抖  true = 节流
 * @param time  时间默认 1s
 * @returns 
 */
export function dtUtils(fn: (e: Event) => void, type = false, time = 1000) {
    let timer: any = null;

    return function (this: any, ...args: any) {
        if (type) {
            if (timer) {
                clearTimeout(timer);
            }
        } else {
            if (timer) {
                return;
            }
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
            if (!type) {
                clearTimeout(timer);
                timer = null;
            }
        }, time)

    }
}

/**
 * 
 * get element path
 * @param element  
 * @returns 
 */
export function getPathToElement(element: any): any {
    if (element.id !== '')
        return '//*[@id="' + element.id + '"]';
    if (element === document.body)
        return element.tagName;

    let ix = 0;
    let siblings = element.parentNode.childNodes;
    for (let i = 0; i < siblings.length; i++) {
        const sibling = siblings[i];
        if (sibling === element)
            return getPathToElement(element.parentNode) + '/' + element.tagName + '[' + (ix + 1) + ']';
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName)
            ix++;
    }
}
/**
 * get element info
 * @param event 
 * @returns 
 */
export function getElementInfo(event: any) {
    const target = event.target;
    const result: ElementInfo = {
    }
    if (target.tagName == "BUTTON") {
        result.text = target;
    }
    return result;
}
/**
 * is json 
 * @param values  
 * @returns 
 */
export const isJosn = (values: string) => {
    if (values == '{}') {
        return true;
    } else {
        try {
            if (Object.prototype.toString.call(JSON.parse(values) == '[object Object]')) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }

}
/**
 * message log
 * @param message 
 */
const log = (message: any, type: 'success' | 'fail' = 'success') => {
    const log = window['__LIYU_IS_LOG__'];
    enum Color {
        success = '#0abf5b',
        fail = '#D6312D'
    }

    if (log) {
        console.log(
            '%c鲤鱼日志',
            `font-family:Arial,Helvetica,sans-serif;color: white; font-weight: bold;background-color:${Color[type]};padding:2px 10px;border-radius: 3px;font-size: 12px;`,
            message,
        );
    }
}

export const utils = {
    log
}