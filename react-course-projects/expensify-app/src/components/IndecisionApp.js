import React from 'react';

import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal';

//ei ole oikeutta lifecycle metodeihin
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // eventhandlerit ensin

  // muutetaan eventhandlerit arrow funktioiksi
  handleDeleteOptions = () => {
      console.log("handleDeteleOptions");
      this.setState(() => ({options: []}));
  };

  handleDeleteOption = (optionToRemove) => {
      console.log("handleDeteleOption");
      this.setState((prevState) => ({
         options: prevState.options.filter((option) => optionToRemove !== option)
      }));
  };

  handlePick = () => {
    console.log("handlePick");
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleAddOption = (option) => {
    console.log("handleAddOption");
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
        options: prevState.options.concat(option)
    }));
  };

  handleClearSelectedOption = () => {
    console.log("handleClearSelectedOption");
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

    //lifecycle methods
  componentDidMount() {
      try {
          const json = localStorage.getItem("options");
          const options = JSON.parse(json);

          if (options) {
              this.setState(() => ({options: options}));
          }
      } catch(e) {
          //nothing at all
      }
  }

  componentDidUpdate(prevProps, prevState) {
      //tarkistetaan, onko options-taulukon pituus muuttunut
      if (prevState.options.length !== this.state.options.length) {
          const json = JSON.stringify(this.state.options);
          localStorage.setItem("options", json);
      }
  }

  componentWillUnmount() {
      console.log("componentWillUnmount");
      //vaihdetaan sivua tms eli kun ko. komponentti "häviää"
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
    options: []
};

Header.defaultProps = { //jos ei ole titlea, otsikkona näkyy Indecision
    title: 'Indecision'
};