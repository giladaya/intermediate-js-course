import { echo, ANSWER } from "./module.js";
import * as Lib from "./module.js";
import bar from "./module.js";

echo("run 1");

console.log("The answer is", ANSWER);

Lib.echo("run 2");

bar();
