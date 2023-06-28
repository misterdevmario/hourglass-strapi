
const key = "3ac3a13ff13181d397910c942cb3516e";

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${22.89088}&lon=${-109.91238}&appid=${key}&units=imperial`;



export async function weatherRequest() {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch data");
  
    return res.json();
  }
  // const descTranslate = weatherDesc.weatherEn.indexOf(res.weather.map(item => item.description).toString())
  // export const dataWeather ={
  //   descriptionEn:res.weather.map(item => item.description).toString(),
  //   descriptionEs:weatherDesc.weatherEs[descTranslate],
  //   degreesEn:Math.floor(res.main.temp),
  //   degreesEs:Math.floor((res.main.temp - 32) * 0.5556),
  //   degreesMaxEn:Math.floor(res.main.temp_max),
  //   degreesMaxEs:Math.floor((res.main.temp_max - 32) * 0.5556),
  //   degreesMinEn:Math.floor(res.main.temp_min),
  //   degreesMinEs:Math.floor((res.main.temp_min - 32) * 0.5556),
  //   tempEn:"°F",
  //   tempEs:"°C",
  //   nameEn:res.name,
  // }