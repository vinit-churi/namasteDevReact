const secondaryHeading = React.createElement(
    "h1",
    { id: "secondaryHeader" },
    "Hello world from react"
);
console.log(secondaryHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: "parent" }, secondaryHeading);
root.render(parent);
