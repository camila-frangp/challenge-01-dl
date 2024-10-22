import { useState } from 'react';

const Content02 = () => {
    const [value, setValue] = useState<string>('');
    const [resultKelvin, setResultKelvin] = useState<number | undefined>(undefined);
    const [resultFahrenheit, setResultFahrenheit] = useState<number | undefined>(undefined);

    const handleTemperature = (temp: string) => {
        const celsius = parseInt(value);
        if(temp === 'kelvin'){
            setResultFahrenheit(undefined);
                setResultKelvin(celsius + 273.15);
        }

        if(temp === 'fahrenheit'){
            setResultKelvin(undefined);
            setResultFahrenheit((celsius * 9/5) + 32);
        }
    }

    return(
        <section className='content content__02'>
            <h3 className='content_title'>Ingrese los grados en Celsius</h3>
            <div className='content-actions'>
                <input className='content-actions_input' type='number' onChange={(e)=> setValue(e.target.value) }/>
            </div>
            <div className='content-actions'>
                <button className='content-actions_button' onClick={() => handleTemperature('kelvin')}>Grados Kelvin</button>
                <button className='content-actions_button' onClick={() => handleTemperature('fahrenheit')}>Grados Fahrenheit</button>
            </div>
            <div className='content_result'>{value}º Celusius quivalen a {resultKelvin ? `${resultKelvin}º Kelvin` : `${resultFahrenheit}º Fahrenheit`} </div>
        </section>
    )
}

export default Content02;