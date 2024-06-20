const Temperature = () => {
    const celciusToFahrenheit = (celcius) => (9*celcius + 160)/5

    const fahrenheitToCelcius = (fahrenheit) => (fahrenheit - 32) * (5/9)

    const kelvin = (k) => {
        const celcius = k - 273
        const fahrenheit = fahrenheitToCelcius(k - 273) - 273
        return (
            {celcius, fahrenheit}
            /*JavaScript knows the property is the same name of the variable
            ONLY in this case the {name_property: variable} can be omited
            {celcius: celcius, fahrenheit: fahrenheit}
            */
        )
    }

    const c = 30
    const f = 50
    const k = 0
    const {celcius, fahrenheit} = kelvin(k)

    return (
        <div>
            <h1>{c} Celcius to Fahrenheit: {celciusToFahrenheit(c)}</h1>
            <h1>{f} Fahrenheit to Celcius: {fahrenheitToCelcius(f)}</h1>
            <h1>{k} Kelvin to Celcius, Fahrenheit: {JSON.stringify(kelvin(k))}</h1>
            <h1>{k} Kelvin to Celcius: {kelvin(k).celcius}</h1>
            <h1>{k} Kelvin to Fahrenheit: {kelvin(k).fahrenheit}</h1>
            <h1>{k} Kelvin to Celcius: {celcius}</h1>
            <h1>{k} Kelvin to Fahrenheit: {fahrenheit}</h1>
        </div>
    )
}

export default Temperature
