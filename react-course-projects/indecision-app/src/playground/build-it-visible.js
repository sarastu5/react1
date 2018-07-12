const app = {
    title: "Visibility toggle"
};

let visibility = false; 

const onShowDetails = () => {
    visibility = !visibility;
    renderPage();
}

const renderPage = () => {
    const page = (
        <div>
            <h1>{app.title}</h1>
            
            <button onClick={onShowDetails}>
                {visibility ? "Hide details" : "Show details"}
            </button>

            {visibility && (
                <div>
                    <p>Hey, these are some details you can now see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(page, document.getElementById('app'));
}

renderPage();