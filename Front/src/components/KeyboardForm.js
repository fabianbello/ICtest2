import React, { useState } from 'react';
import {
  Button, Col, Form, Row,
} from 'react-bootstrap';

const KeyboardForm = (props) => {
  const [enteredFirstNumber, setEnteredFirstNumber] = useState(0);
  const [mathOperation, setMathOperation] = useState('add');
  const [enteredSecondNumber, setEnteredSecondNumber] = useState(0);

  const firstNumberChangeHandler = (event) => {
    setEnteredFirstNumber(event.target.valueAsNumber);
  };

  const addMathOperationHandler = () => {
    setMathOperation('add');
  };

  const minusMathOperationHandler = () => {
    setMathOperation('minus');
  };

  const secondNumberChangeHandler = (event) => {
    setEnteredSecondNumber(event.target.valueAsNumber);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const calculatorData = {
      firstNumber: enteredFirstNumber,
      mathOperation,
      secondNumber: enteredSecondNumber,
    };
    props.onSaveCalculatorData(calculatorData);
    setEnteredFirstNumber(0);
    setMathOperation('add');
    setEnteredSecondNumber(0);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row>
        <Col>
          <Form.Group controlId="firstNumber">
            <Form.Label>Primer número</Form.Label>
            <Form.Control
              placeholder="Ingrese un número"
              type="number"
              value={enteredFirstNumber}
              onChange={firstNumberChangeHandler}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <fieldset>
            <Form.Label>Operación</Form.Label>
            <Form.Group controlId="Operation">
              <Form.Check
                type="radio"
                inline
                checked={mathOperation === 'add'}
                label="Sumar"
                id="addOperation"
                name="mathOperation"
                onChange={addMathOperationHandler}
              />
              <Form.Check
                type="radio"
                inline
                checked={mathOperation === 'minus'}
                label="Restar"
                id="minusOperation"
                name="mathOperation"
                onChange={minusMathOperationHandler}
              />
            </Form.Group>
          </fieldset>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="secondNumber">
            <Form.Label>Segundo número</Form.Label>
            <Form.Control
              placeholder="Ingrese otro número"
              type="number"
              value={enteredSecondNumber}
              onChange={secondNumberChangeHandler}
            />
          </Form.Group>
        </Col>
      </Row>
      <hr className="mt-2" />
      <Button
        type="submit"
        block
        variant="outline-primary"
        className="mt-4"
      >
        Calcular
      </Button>
    </Form>
  );
};

export default KeyboardForm;
