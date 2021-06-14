const readline = require("readline");

function getResponse(query) {
  const readlineInstance = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInstance.question(query, (res) => {
      resolve(res);
      readlineInstance.close();
    });
  });
}

function girlfriendObserver() {
  console.log("N: Apagar as luzes.");
  console.log("N: Pedir silêncio.");
  console.log("N: Anunciar surpresa.");
}

function liquidatorObserver() {
  console.log("S: Monitrar barulho.");
}

function dispatchEvent(key = "", events = {}) {
  const event = events[key.toLowerCase()];

  event();
}

function shouldTriggerEvent(key = "", events = {}) {
  return typeof events[key.toLowerCase()] === "function";
}

async function doormanSubject(...observers) {
  while (true) {
    const response = await getResponse("O namorado chegou? (s/N/q): ");
    const events = {
      s: () => observers.forEach((observer) => observer()),
      n: () => {},
    };

    if (shouldTriggerEvent(response, events)) {
      dispatchEvent(response, events);
    } else {
      break;
    }
  }
}

doormanSubject(girlfriendObserver, liquidatorObserver);
