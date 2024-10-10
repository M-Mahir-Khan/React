import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    let [data, setData] = useState({})
    useEffect(()=>{
        let api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(api)
        .then((res)=> res.json(res))
        .then((res)=> setData(res[currency]))
        .catch((e)=>console.log("error At API" , e));
    },[currency])
    return data
}

export default useCurrencyInfo