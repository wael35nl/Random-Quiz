import { useState, useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    useEffect(() => {
        fetch('https://quizapi.io/api/v1/questions?apiKey=VwnzWX5vO3Zh9IsL0rEkJCg7eLS297WFjr5Ois8O')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to load...');
                }
                return res.json()
            })
            .then(json => setData(json))
            .catch(error => setError(error.message));
    }, [])
    return { data, error };
}

export default useFetch;