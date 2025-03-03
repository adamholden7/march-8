const { useState, useEffect } = React;

function App() {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        if (opened) {
            document.querySelectorAll(".heart").forEach((heart, i) => {
                setTimeout(() => {
                    heart.style.animation = `floatUp ${Math.random() * 4 + 2}s linear infinite`;
                    heart.style.opacity = "1";
                }, i * 300);
            });
        }
    }, [opened]);

    return (
        React.createElement("div", { className: "container" }, 
            React.createElement("div", {
                className: "envelope",
                onClick: () => setOpened(true),
                style: opened ? { display: "none" } : {},
            }, "Open Me"),
            opened && React.createElement("h1", { className: "message" }, "Happy Valentine's Day, Violet! ❤️"),
            opened && React.createElement("div", { className: "hearts-container" },
                [...Array(10)].map((_, i) =>
                    React.createElement("div", { key: i, className: "heart" }, "❤️")
                )
            )
        )
    );
}

// Render the React App into #root
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
