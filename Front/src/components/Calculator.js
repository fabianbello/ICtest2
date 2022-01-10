import React, { useState } from 'react';
import {
  Button, Card, Col, Container, Row, Spinner,
} from 'react-bootstrap';
import axios from 'axios';
import Screen from './Screen';
import KeyboardForm from './KeyboardForm';

const Calculator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [resultNumber, setResultNumber] = useState(0);
  const [mathOperation, setMathOperation] = useState('+');
  const [showResult, setShowResult] = useState(false);

  const getMathOperation = (operation) => {
    if (operation === 'add') { return '+'; }
    if (operation === 'minus') { return '-'; }
    return '+';
  };

  const getApiMathOperation = (operation) => {
    if (operation === 'add') { return 'suma'; }
    if (operation === 'minus') { return 'resta'; }
    return 'suma';
  };

  const saveCalulatorDataHandler = async (enteredCalculatorData) => {
    setShowResult(true);
    setIsLoading(true);
    const calculatorData = {
      ...enteredCalculatorData,
    };

    setFirstNumber(calculatorData.firstNumber);
    setSecondNumber(calculatorData.secondNumber);
    setMathOperation(getMathOperation(calculatorData.mathOperation));

    try {
      const res = await axios({ method: 'GET', url: `http://localhost:8080/${getApiMathOperation(calculatorData.mathOperation)}/${calculatorData.firstNumber}/${calculatorData.secondNumber}` });
      // await new Promise((resolve) => setTimeout(resolve, 500));
      setResultNumber(res.data);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error.response.status);
    }
    setIsLoading(false);
  };

  const newCalculatorDataHandler = () => setShowResult(false);

  const width = '30rem';
  return (
    <Container className="mt-4 ">
      {showResult && (
        <>
          <Row>
            <Col className="d-flex justify-content-center">
              <Card body style={{ width, backgroundColor: '#353535' }}>
                {isLoading && (
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <Spinner animation="border" variant="light" />
                    </Col>
                  </Row>
                )}
                {!isLoading && (
                <Screen
                  firstNumber={firstNumber}
                  secondNumber={secondNumber}
                  resultNumber={resultNumber}
                  mathOperation={mathOperation}
                />
                )}
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4 d-flex justify-content-center">
              <Button style={{ width }} block variant="outline-primary" onClick={newCalculatorDataHandler}>Realizar otro cálculo</Button>
            </Col>
          </Row>
        </>
      )}
      {!showResult && (
        <Row className="mt-2">
          <Col className="d-flex justify-content-center">
            <Card body style={{ width }}>
              <Card.Title className="d-flex justify-content-center">Calculadora</Card.Title>
              <KeyboardForm onSaveCalculatorData={saveCalulatorDataHandler} />
            </Card>
          </Col>
        </Row>
      )}

    </Container>
  );
};

export default Calculator;
