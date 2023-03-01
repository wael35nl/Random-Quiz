import { useState, useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch('https://quizapi.io/api/v1/questions?apiKey=VwnzWX5vO3Zh9IsL0rEkJCg7eLS297WFjr5Ois8O');
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