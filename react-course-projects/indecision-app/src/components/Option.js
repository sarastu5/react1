import React from 'react';

const Option = (props) => { // muuttujaa ei voi exportata suoraan ->
    return (
      <div>
        {props.optionText}
        <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
              }}
        >
            Remove
        </button>
      </div>
    );
  };

  export default Option; // siksi se pitä exportata näin