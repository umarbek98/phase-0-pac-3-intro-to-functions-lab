function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log("hello".toUpperCase());
}

function logWhisper(string) {
    console.log("hello".toLowerCase());
}

function sayHiToHeadphonedRoommate(string = "Let's have dinner together!") {
    if (string === string.toLowerCase()){
        return "I can\'t hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === string) {
        return "I would love to!";
    }
}