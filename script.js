// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'b5c1352c0dmsh6c4a49c3a1533b7p105f27jsn5659af4de960',
//         'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
//     }
// };
// fetch('https://open-weather13.p.rapidapi.com/city/noida/EN', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.log(err));


// const url = 'https://open-weather13.p.rapidapi.com/city/noida/EN';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'b5c1352c0dmsh6c4a49c3a1533b7p105f27jsn5659af4de960',
//         'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
//     }
// };

// async function fetchData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData();

// const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?contentType=csv&unitGroup=us&aggregateHours=24&location=Washington%2CDC%2CUSA&shortColumnNames=false';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'b5c1352c0dmsh6c4a49c3a1533b7p105f27jsn5659af4de960',
//         'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com'
//     }
// };
// async function fetchData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// // fetchData();
const url = 'https://rapidweather.p.rapidapi.com/data/2.5/forecast?q=INDIA%2CUK';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b5c1352c0dmsh6c4a49c3a1533b7p105f27jsn5659af4de960',
        'x-rapidapi-host': 'rapidweather.p.rapidapi.com'
    }
};
async function fetchData() {

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
// fetchData();

