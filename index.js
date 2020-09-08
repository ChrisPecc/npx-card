#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const data = {
    name: chalk.yellow("       Christophe Pecceu"),
    handle: chalk.red("ChrisPecc"),
    work: chalk.blue("        Junior web developer"),
    npm: "https://npmjs.com/" + "~chrispecc",
    github: "https://github.com/" + "ChrisPecc",
    linkedin: "https://linkedin.com/in/" + "christophe-pecceu",
    npx: "npx" + " " + "@chrispecc/card",
    labelNpm: chalk.cyan("        npm:"),
    labelGitHub: chalk.cyan("     GitHub:"),
    labelLinkedIn: chalk.cyan("   LinkedIn:"),
    labelCard: chalk.cyan("       Card:"),
};
const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.work}`,
                EMPTYLINE,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "double",
            },
        ),
    ),
);
