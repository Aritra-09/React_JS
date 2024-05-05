import { useEffect, useState } from "react";

function useCurrency_Info(currency){

    const [data , setData] = useState({});

        useEffect(() => {
            fetch(`https://v6.exchangerate-api.com/v6/eab56f868e4b20e24b5e02ff/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates))
            // console.log(data);
        }, [currency])
        // console.log(data);
    return data;
}


export default useCurrency_Info;