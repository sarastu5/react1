const app = {
    title: "Visibility toggle"
};

const onShowDetails = (e) => {
    e.preventDefault();

    <p>Here are some details</p>;
    console.log('näytä');

    renderPage();
}

const renderPage = () => {
    const page = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onShowDetails}>Show details</button>
        </div>

    );

    ReactDOM.render(page, document.getElementById('app'));
}

renderPage();