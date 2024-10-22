import React, { useRef, useState} from 'react';
import './content-01.scss';

function Content01() {
  const [result, setResult] = useState<number | undefined>(undefined);
  const [activeError, setActiveError] = useState<boolean>(false);
  const [textError, setTextError] = useState<string>('Error!!');

  const [value01, setValue01] = useState<number>(0);
  const [value02, setValue02] = useState<number>(0);

  const handleError = (option: string) => {
    if(value01 === value02){
      setTextError('Los números no pueden ser iguales');
      setActiveError(true);
    }
    if(value01 < 0 || value02 < 0){
      setActiveError(true);
      setTextError(`¡No puedes ${option} con números negativos!`);
    }
  }

  const handleOperation = (operation: string) => {
    setActiveError(false);
    switch (operation) {
      case 'add':
        handleError('sumar');
        if (!activeError) setResult(value01 + value02);
        break;
      case 'subtract':
        handleError('restar');
        if (!activeError) setResult(value01 - value02);
        break;
      case 'divide':
        handleError('dividir');
        if (!activeError) setResult(value01 / value02);
        break;
      case 'multiply':
        handleError('multiplicar');
        if (!activeError) setResult(value01 * value02);
        break;
      case 'module':
          handleError('modulo');
          if (!activeError) setResult(value01 % value02);
          break;
      default:
        break;
    }
  }

  return (
    <section className='content content__01'>
      <div>
        <input type="number" onChange={(e) => setValue01(parseFloat(e.target.value))}/>
        <input type="number" onChange={(e) => setValue02(parseFloat(e.target.value))}/>
      </div>
      <div>
        <button onClick={() => handleOperation('add')}>Sumar</button>
        <button onClick={() => handleOperation('subtract')}>Restar</button>
        <button onClick={() => handleOperation('divide')}>Dividir</button>
        <button onClick={() => handleOperation('multiply')}>Multiplicar</button>
        <button onClick={() => handleOperation('module')}>Modulo</button>
      </div>
      {!activeError && <div>El resultado es: {result}</div>}
      {activeError && <div>{textError}</div>}
    </section>
  );
}

export default Content01;
