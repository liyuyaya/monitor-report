
import { InitConstructor } from "./common/index";
import { InItClass, Options } from "../typing";

// init config
function init(options: Options): InItClass {
    return new InitConstructor(options)
}
export {
    init
} 