import { useState } from 'react';

const Content04 = () => {
    const [number01, setNumber01] = useState<number>(0);
    const [number02, setNumber02] = useState<number>(0);
    const [number03, setNumber03] = useState<number>(0);
    const [number04, setNumber04] = useState<number>(0);
    const [number05, setNumber05] = useState<number>(0);
    const [resultSum, setResultSuma] = useState<number>(0);
    const [resultAverage, setResultAverage] = useState<number>(0);

    const handleSum = (value01: number, value02: number, value03: number, value04: number, value05: number) => {
        const sum = value01 + value02 + value03 + value04 + value05;
        setResultSuma(sum);
    }

    const handleAverage = (value01: number, value02: number, value03: number, value04: number, value05: number) => {
        const average = (value01 + value02 + value03 + value04 + value05) / 5;
        setResultAverage(average);
    }

    return(
        <section className='content content__02'>
            <h3 className='content_title'>Ingrese la cantidad de días que desee.</h3>
            <div className='content-actions'>
                <input className='content-actions_input' type='number' onChange={(e)=> setNumber01(Number(e.target.value)) }/>
                <input className='content-actions_input' type='number' onChange={(e)=> setNumber02(Number(e.target.value)) }/>
                <input className='content-actions_input' type='number' onChange={(e)=> setNumber03(Number(e.target.value)) }/>
                <input className='content-actions_input' type='number' onChange={(e)=> setNumber04(Number(e.target.value)) }/>
                <input className='content-actions_input' type='number' onChange={(e)=> setNumber05(Number(e.target.value)) }/>
            </div>
            <div className='content-actions'>
                <button className='content-actions_button' onClick={() => handleSum(number01, number02, number03, number04, number05)}>Sumar</button>
                <button className='content-actions_button' onClick={() => handleAverage(number01, number02, number03, number04, number05)}>Promediar</button>
            </div>

            <div className='content_result'>La suma total de los números es: {resultSum}</div>
            <div className='content_result'>El promerio de los números es: {resultAverage}</div>

        </section>
    )
}

export default Content04;