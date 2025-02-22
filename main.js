import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const answer = await inquirer.prompt({
    message: "please enter the amount of seconds",
    type: "number",
    name: "sec",
    validate: (input) => {
        if (isNaN(input)) {
            return ("please enter valid number");
        }
        else if (input > 60) {
            return ("Seconds must be in 60");
        }
        else {
            return true;
        }
    }
});
let input = answer.sec;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % 3600 * 24) / 3600);
        const sec = Math.floor((timeDiff % 60));
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
console.log(startTime(answer.sec));
