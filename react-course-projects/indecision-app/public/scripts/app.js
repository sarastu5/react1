'use strict';

var app = {
    title: "Visibility toggle"
};

var onShowDetails = function onShowDetails(e) {
    e.preventDefault();

    React.createElement(
        'p',
        null,
        'Here are some details'
    );
    console.log('näytä');

    renderPage();
};

var renderPage = function renderPage() {
    var page = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: onShowDetails },
            'Show details'
        )
    );

    ReactDOM.render(page, document.getElementById('app'));
};

renderPage();
