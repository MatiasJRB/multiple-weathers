 
import { useEffect, useState } from 'react'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c7ee9a4897msh35e0b50a4ce6dd8p16b97bjsnd1d780f55737',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
}

export default function useWeather (location) {
    const [weather, setWeather] = useState({
        current: {
            temp_c: null
        }
    })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
     useEffect(() => {
        setLoading(true)
        let url = "https://weatherapi-com.p.rapidapi.com/current.json?q=%3C"+location+"%3E"
        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                setWeather(response)
            })
            .catch(err => setError(err))
            .finally(() => {
                setTimeout(() => {
                    
                setLoading(false)
                    
                    
                }, 400)
            })
            
        
    }, [location])
    
    return {
        weather,
        error,
        loading
    }
}



 