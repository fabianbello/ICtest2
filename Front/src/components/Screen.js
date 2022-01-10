import React from 'react';
import propTypes from 'prop-types';
import './Screen.css';

const Screen = (props) => {
  const {
    firstNumber, secondNumber, resultNumber, mathOperation,
  } = props;
  return (
    <div>
      <p>Resultado</p>
      <p>
        { firstNumber }
        {' '}
        {mathOperation}
        {' '}
        { secondNumber }
        {' '}
        =
        {' '}
        { resultNumber }
      </p>
    </div>
  );
};

Screen.propTypes = {
  firstNumber: propTypes.number,
  secondNumber: propTypes.number,
  resultNumber: propTypes.number,
  mathOperation: propTypes.string,
};

Screen.defaultProps = {
  firstNumber: 0,
  secondNumber: 0,
  resultNumber: 0,
  mathOperation: '+',
};

export default Screen;
