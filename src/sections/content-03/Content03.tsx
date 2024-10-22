import {useState} from 'react';

const Content03 = () => {
    const [quantityDays, setQuantityDays] = useState<number>(0);
    const [year, setYear] = useState<number>(0);
    const [week, setWeek] = useState<number>(0);
    const [days, setDays] = useState<number>(0);

    const handleResult = (value: number) => {
        const YEAR = 365;
        const WEEK = 7;

        const years = Math.floor(value / YEAR);
        const remainingAfterYears = value % YEAR;
        const weeks = Math.floor(remainingAfterYears / WEEK);
        const days = remainingAfterYears % WEEK;
        setYear(years);
        setWeek(weeks);
        setDays(days);
    }

    return(
        <section className='content content__02'>
            <label>Ingrese la cantidad de días que desee.</label>
            <input type='number' onChange={(e)=> setQuantityDays(Number(e.target.value)) }/>
            <button onClick={() => handleResult(quantityDays)}>Calcular</button>
            <p>{quantityDays > 1 ? `${quantityDays} días`: `${quantityDays} día` } equivale a {year > 1 ? `${year} años`: `${year} año` }, {week > 1 ? `${week} semanas`: `${week} semana` } y {days > 1 ? `${days} días`: `${days} día` }</p>
        </section>
    )
}

export default Content03;