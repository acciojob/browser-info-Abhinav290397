//your JS code here. If required.
let str = navigator.userAgent;
let brouserName = "";
if(str.includes("Chrome")) {
    browserName = "Chrome";
} else if(str.includes("Firefox")) {
    browserName = "Firefox";
} else if(str.includes("Safari")) {
    browserName = "Safari";
} else if(str.includes("Opera")) {
    browserName = "Opera";
} else if(str.includes("MSIE")) {
    browserName = "Internet Explorer";
}

let VersionArr = str.split(browserName);

let version = VersionArr[1].split(" ")[0];

let Div = documnet.createElement("div");
Div.id = "browser-info";
Div.innerText = "You are using " + browserName + " version " + version;

