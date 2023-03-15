import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect( () => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error("could not fetch the resource");
                }else{
                    return res.json();
                }
            })
            .then(data => {
                setData(data);
                setPending(false)
                setError(null);
            })
            .catch(err => {
                if(err.name !== "AbortError"){
                    setError(err.message);
                    setPending(false);
                    setData(null)
                }else{
                    console.log("fetch aborted")
                }
            })
            return () => abortCont.abort();
    }, [url])
    return { data, error, isPending};
}

export default useFetch;