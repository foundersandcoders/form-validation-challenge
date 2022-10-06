const { JSDOM } = require("jsdom");

async function load(file) {
  let dom = await JSDOM.fromFile(file, {
    runScripts: "dangerously",
    resources: "usable",
  });
  return new Promise((resolve) => {
    dom.window.addEventListener("load", () => {
      dom.$ = (s) => dom.window.document.querySelector(s);
      resolve(dom);
    });
  });
}

const path = "solution/index.html";
const loader = load(path);

// function getByLabelText(document, text) {
//   const labels = document.querySelectorAll("label");
//   const label = [...labels].find(({ textContent }) => textContent === text);
//   if (!label) {
//     throw new Error(`Couldn't find label with textContent '${text}'`);
//   }
//   if (!label.htmlFor) {
//     throw new Error(`Label \`${label.outerHTML}\` has no \`for\` attribute`);
//   }
//   const el = document.querySelector("#" + label.htmlFor);
//   if (!el) {
//     throw new Error(`Couldn't find element with id '${label.htmlFor}'`);
//   }
//   return el;
// }

module.exports = { loader };
