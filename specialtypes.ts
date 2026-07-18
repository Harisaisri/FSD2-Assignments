let flexibleValue: any = 10;
flexibleValue = "Now I am a string"; // No error
flexibleValue = true; // No error

// 2. Using the 'unknown' type
let mysteryValue: unknown = "Hello Vishnu";

// This would cause a compile error without a check
// let length: number = mysteryValue.length;

if (typeof mysteryValue === "string") {
    console.log("Length of mysteryValue is -->", mysteryValue.length);
}

function logNotification(message: string): void {
    console.log("Alert " + message);
}

logNotification("You have a new message");