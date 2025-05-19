// === Daily Fear & Greed Notification Script ===
// Fetches CNN & Crypto Fear & Greed Index from RapidAPI and sends a local notification
// Replace YOUR_RAPIDAPI_KEY with your own

// -- CONFIG --
let headersCNN = {
  "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
  "X-RapidAPI-Host": "fear-and-greed-index.p.rapidapi.com"
};

let headersCrypto = {
  "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
  "X-RapidAPI-Host": "crypto-fear-greed-index-bitcoin.p.rapidapi.com"
};

// -- CNN Fear & Greed --
let cnnReq = new Request("https://fear-and-greed-index.p.rapidapi.com/v1/fgi");
cnnReq.headers = headersCNN;
let cnnData = await cnnReq.loadJSON();
let cnnScore = cnnData.fgi.now.value;
let cnnText = cnnData.fgi.now.valueText;

// -- Crypto Fear & Greed --
let cryptoReq = new Request("https://crypto-fear-greed-index-bitcoin.p.rapidapi.com/fng?limit=1&format=json");
cryptoReq.headers = headersCrypto;
let cryptoData = await cryptoReq.loadJSON();
let latest = cryptoData.data[0];
let cryptoScore = latest.value;
let cryptoText = latest.value_classification;

// -- Date --
let date = new Date();
let dateStr = date.toLocaleDateString("en-UK", {
  day: "numeric", month: "long", year: "numeric"
});

// -- Notification --
let body = `${dateStr}
CNN Fear & Greed Index: ${cnnScore} - ${cnnText}
Crypto Fear & Greed Index: ${cryptoScore} - ${cryptoText}`;

let notif = new Notification();
notif.title = "📊 Daily Fear & Greed";
notif.body = body;
notif.interruptionLevel = "time-sensitive";
notif.schedule();

Script.complete();
