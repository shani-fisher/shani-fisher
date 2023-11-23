import React, { useRef, useState, useEffect } from 'react';
export default function CountryAndCitiy(props) {
    const [username, SetUsername] = useState('אורח');
    const inputRef = useRef(null);
    let flag = false;
    return (
        <>
            <h1>שלום {username}</h1>
            <input type='text' placeholder='name' ref={inputRef}></input>
            <button onClick={() => { SetUsername(inputRef.current.value)}} >הכנס שם</button>
            {username != 'אורח' && <SelectCountry username={username}></SelectCountry>}
        </>
    )
}

const SelectCountry = (props) => {
    const username = props.username;
    const countriesAndCities = {
        Israel: ['Jerusalem', 'Tel Aviv', 'Raanana'],
        USA: ['New York', 'Woshington'],
        Denemark: ['Kopenhagen', 'Hilrud', 'Olburg']
    }
    const [selectCountry, setSelectCountry] = useState(null);
    const [selectCity, setSelectCity] = useState(null);
    useEffect(() => {
        setSelectCity(null)
    }, [selectCountry])
    useEffect(() => {
        setSelectCountry(null)
    }, [username]);
    return (
        <div>
            <p>You select:{selectCountry}/{selectCity}</p>
            <select onChange={(e) => { setSelectCountry(e.target.value) }}>
                <option disabled selected value >Please select a country</option>
                {Object.keys(countriesAndCities).map((item, index) => (<option key={index} value={item}>{item}</option>))}
            </select>
            {selectCountry && <SelectCity cities={countriesAndCities[selectCountry]} setSelectCity={setSelectCity}></SelectCity>}
        </div>

    )
}

const SelectCity = (props) => {
    const { cities, setSelectCity } = props;
    return (
        <>
            <select onChange={(e) => { setSelectCity(e.target.value) }}>
                <option disabled selected value >Please select a city</option>
                {cities.map((item, index) => (<option key={index} value={item}>{item}</option>))}
            </select>
        </>
    )
}
