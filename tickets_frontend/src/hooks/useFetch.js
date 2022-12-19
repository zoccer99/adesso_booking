import { useEffect, useState } from "react";

//Hook zum fetchen, eigener Hook da das Fetchen von daten immer gleiche Struktur und viel Code kann ausgelagert werden

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
        
    }, [url]);
    return { data, error, loading };
};
