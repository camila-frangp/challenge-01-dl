import {  useState} from 'react';

function Content01() {
  const [result, setResult] = useState<number | undefined>(undefined);
  const [activeError, setActiveError] = useState<boolean>(false);
  const [textError, setTextError] = useState<string>('Error!!');

  const [value01, setValue01] = useState<number>(0);
  const [value02, setValue02] = useState<number>(0);

  const handleError = (option: string): boolean => {
    if(value01 === value02){
      setTextError('Los números no pueden ser iguales');
      setActiveError(true);
      return true;
    }
    if(value01 < 0 || value02 < 0){
      setActiveError(true);
      setTextError(`¡No puedes ${option} con números negativos!`);
      return true;
    }
    return false;
  }

  const handleOperation = (operation: string) => {
    setActiveError(false);
    if (handleError(operation)) return;
    switch (operation) {
      case 'add':
        setResult(value01 + value02);
        break;
      case 'subtract':
        setResult(value01 - value02);
        break;
      case 'divide':
        setResult(value01 / value02);
        break;
      case 'multiply':
        setResult(value01 * value02);
        break;
      case 'module':
        setResult(value01 % value02);
        break;
      default:
        break;
    }
  }

  return (
    <section className='content content__01'>
      <h3 className='content_title'>Ingrese los números para operar</h3>
      <div className='content-actions'>
        <input className='content-actions_input' type="number" onChange={(e) => setValue01(parseFloat(e.target.value))}/>
        <input className='content-actions_input' type="number" onChange={(e) => setValue02(parseFloat(e.target.value))}/>
      </div>
      <div className='content-actions'>
        <button className='content-actions_button' onClick={() => handleOperation('add')}>Sumar</button>
        <button className='content-actions_button' onClick={() => handleOperation('subtract')}>Restar</button>
        <button className='content-actions_button' onClick={() => handleOperation('divide')}>Dividir</button>
        <button className='content-actions_button' onClick={() => handleOperation('multiply')}>Multiplicar</button>
        <button className='content-actions_button' onClick={() => handleOperation('module')}>Modulo</button>
      </div>
      {!activeError && <div className='content_result'>El resultado es: {result}</div>}
      {activeError && <div className='content_result content_result__error'>{textError}</div>}
    </section>
  );
}

export default Content01;
