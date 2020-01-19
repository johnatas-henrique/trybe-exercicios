const messageDelay = () => Math.floor(Math.random() * 5000)

const getMarsTemperature = () => {
  const maxTemperature = 58
  return Math.floor(Math.random() * maxTemperature)
}

const toFarenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32
const temperatureInFarenheit = (temperature) => console.log(`It is currently ${toFarenheit(temperature)}ºF at Mars`)
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`)

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`)

// definição da função sendMarsTemperature...


// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFarenheit, handleError)

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError)
