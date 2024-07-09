import React, {useEffect, useState} from "react";

const useFetch = ()=> {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await fetch('/api/images/get');
        return await response.json();
    }

    const init = async () => {
        const responsedata = await fetchData();
        setData(responsedata);
    }

    useEffect(()=> {
        init();
    }, [])

    return data
}

export default useFetch;