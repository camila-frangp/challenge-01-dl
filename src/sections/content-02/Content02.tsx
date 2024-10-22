import {useState} from 'react';

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
            <label>Ingrese los grados en Celsius</label>
            <input type='number' onChange={(e)=> setValue(e.target.value) }/>
            <button onClick={() => handleTemperature('kelvin')}>Grados Kelvin</button>
            <button onClick={() => handleTemperature('fahrenheit')}>Grados Fahrenheit</button>
            <p>{value}º Celusius quivalen a {resultKelvin ? `${resultKelvin}º Kelvin` : `${resultFahrenheit}º Fahrenheit`} </p>

        </section>
    )
}

export default Content02;