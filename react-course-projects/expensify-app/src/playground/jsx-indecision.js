console.log('App.js is running!');

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); // pysäyttää koko sivun lataamisen, kun jotain muuttuu sivulla

    const option = e.target.elements.option.value; // e.target osoittaa elementtiin, joka element aloitti

    if (option) { // tarkistaa, onko mitään syötetty inputiin
        // string on aina falsy
        app.options.push(option); // laitetaan arvo tauluun (option)
        e.target.elements.option.value = ""; // tyhjentää inputin
        renderTemplate();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderTemplate();
}

const appRoot = document.getElementById('app');

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.title) && <p>{app.subtitle}</p>}
    
            <p>{app.options.length > 0 ? "Here are your options:" : "No Options"}</p>
            
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={onRemoveAll}>Remove All</button>

            <ol>
                {
                   app.options.map((option) => {
                       return <li key={option}>{option}</li>
                   })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();