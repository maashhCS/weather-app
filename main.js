(()=>{"use strict";const e=document.querySelector(".city-name"),t=document.querySelector(".city-temperature"),n=document.querySelector(".city-humidity h5"),r=document.querySelector(".weather-humidity-img"),c=document.querySelector(".city-wind h5"),i=document.querySelector(".weather-wind-img");function d(d){e.innerText=`${d.location.name}, ${d.location.country}`,t.innerText=`${d.current.temp_c} °C`,r.classList.remove("hidden"),n.innerText=`${d.current.humidity}%`,i.classList.remove("hidden"),c.innerText=`${d.current.wind_kph}km/h`}const o=document.querySelector(".search-input-field-error-city-not-found");async function s(e){try{const t=await fetch("https://api.weatherapi.com/v1/current.json?key=d7ad6837fd37407e8e0163826230105&q="+e,{mode:"cors"});if(200!==t.status)return void o.classList.remove("hidden");const n=await t.json();o.classList.add("hidden"),d(n)}catch(e){console.log(e)}}const u=document.querySelector("#search-input-field"),a=document.querySelector("#magnify-svg"),l=document.querySelector(".search-input-field-error");a.addEventListener("click",(()=>{""!==u.value?(l.classList.add("hidden"),s(u.value)):l.classList.remove("hidden")})),u.addEventListener("keydown",(e=>{if("Enter"===e.key){if(""===u.value)return void l.classList.remove("hidden");l.classList.add("hidden"),s(u.value)}}))})();