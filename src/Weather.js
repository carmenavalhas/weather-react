import React from "react";
import axios from "axios";
import { Dna } from  'react-loader-spinner'


export default function Weather (props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}ºC`
      );
    }
  let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
  axios.get(apiUrl).then(handleResponse);
  return (
  <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
  );
}