import React from "react";
import ReactDOM from "react-dom/client";
//Practice
const heading = React.createElement(
    "div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"This is Namaste React"),
        React.createElement("h2",{},"I  am h2  tag")
    ]
    ),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")
    ])]
);
const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(heading);



