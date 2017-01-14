var ReactDOMServer = require("react-dom/server");
const Resume = require("../.next/dist/components/resume");
const React = require("react");
const data = require("../data/resume.json");

const html = ReactDOMServer.renderToStaticMarkup(React.createElement("Resume", data));

console.log(html);
