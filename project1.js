/*const heading= React.createElement("h1",{id: "heading"},"hello world from React");
const divs= ReactDOM.createRoot(document.getElementById("root"));
divs.render(heading);
*/

// below is the where we can write nested divs in react

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{id:"son"}, " hii this is me"),
        React.createElement("h2",{id:"second child"},"hii i am other child"),
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{id:"son"}, " hii this is me"),
        React.createElement("h2",{id:"second child"},"hii i am other child"),
    ]),
]);
console.log(parent);
const allow=ReactDOM.createRoot(document.getElementById("root"));
allow.render(parent);


const varia=React.createElement("div",{id:"first"},[
    React.createElement("div",{id:"second"},[React.createElement("h1",{id:"chilsone"},"hiii"),React.createElement("h1",{id: "childtwo"},"this is me")]),
    React.createElement("div",{id:"second"},[React.createElement("h1",{id:"chilsone"},"hiii"),React.createElement("h1",{id: "childtwo"},"this is me")])
]
);
const add=ReactDOM.createRoot(document.getElementById("hoop"));
add.render(varia);
// this looks clumsy in react and wrinting in html is better than this so so will use jsx to write all this