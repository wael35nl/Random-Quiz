import { useState, useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const data = await fetch('https://quizapi.io/api/v1/questions?apiKey=D91t9Yld1icwQstXdfWbjrGElhBJ8ZeAPjEeQYmf');
                if (!data.ok) throw new Error('Failed to load...');
                const jsonData = await data.json();
                setData(jsonData);
                setIsLoading(false);
                setError(null);
            } catch (error) {
                setData([]);
                setIsLoading(false);
                setError(error.message);
            }
        }
        fetchData();
    }, [])
    return ({ data, error, isLoading }
    );
}

export default useFetch;