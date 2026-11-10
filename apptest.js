
const greet = require("./app");

if (greet() === "Hello, DevOps!") {
    console.log("Test Passed");
} else {
    console.log("Test Failed");
    process.exit(1);
}
