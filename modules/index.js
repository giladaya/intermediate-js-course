import { echo, ANSWER as theAnswer } from "./module.js";
import * as Lib from "./module.js";
import bar from "./module.js";

echo("run 1");

console.log("The answer is", theAnswer);

Lib.echo("run 2");

bar();
