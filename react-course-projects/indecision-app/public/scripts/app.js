"use strict";

var app = {
    title: "Visibility toggle"
};

var visibility = false;

var onShowDetails = function onShowDetails() {
    visibility = !visibility;
    renderPage();
};

var renderPage = function renderPage() {
    var page = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "button",
            { onClick: onShowDetails },
            visibility ? "Hide details" : "Show details"
        ),
        visibility && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "Hey, these are some details you can now see!"
            )
        )
    );

    ReactDOM.render(page, document.getElementById('app'));
};

renderPage();
