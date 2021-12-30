/*
    Imagine we're making a weather app!
    
    We have a list of cities that the user wants to track.
    We also already have a temperatureService function which will take a city as a parameter and return a temparature.

    Implement the function below:
        - take the array of cities as a parameter
        - return an array of strings, which is a statement about the temperature of each city.
            For example, "The temperature in London is 10 degrees"
        - Hint: you can call the temperatureService function from your function
*/

let usersCities = [
    "London",
    "Paris",
    "São Paulo"
]

function getTemperatureReport(cities) {
    // TODO
}


/* ======= TESTS - DO NOT MODIFY ===== */

function temperatureService(city) {
    let temparatureMap  = new Map();

    temparatureMap.set('London', 10);
    temparatureMap.set('Paris', 12);
    temparatureMap.set('Barcelona', 17);
    temparatureMap.set('Dubai', 27);
    temparatureMap.set('Mumbai', 29);
    temparatureMap.set('São Paulo', 23);
    temparatureMap.set('Lagos', 33);
    
    return temparatureMap.get(city);
}

test("should return a temperature report for the user's cities", () => {
    expect(getTemperatureReport(usersCities)).toEqual([
        "The temperature in London is 10 degrees",
        "The temperature in Paris is 12 degrees",
        "The temperature in São Paulo is 23 degrees"
    ]);
});
