import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    // json server for database - npx json-server --watch data/db.json --port 8000

    useEffect(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Something wrong!");
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, [url]
    );
    // if deps array is empty, useEffect function only runs after initial render

    return {data, isPending, error};
}


export default useFetch;