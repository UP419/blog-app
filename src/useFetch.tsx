import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    // json server for database - npx json-server --watch data/db.json --port 8000

    useEffect(() => {
            const abortCont = new AbortController();

            fetch(url, {signal: abortCont.signal})
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
                    if (err.name === "AbortError") {
                        console.log("Fetch aborted")
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                })
            return () => abortCont.abort();
        }, [url]
    );
    // if deps array is empty, useEffect function only runs after initial render

    return {data, isPending, error};
}


export default useFetch;