import { useState, useEffect } from "react"
import { toast } from "react-toastify"

const useFetchTitles = (author) => {
    const [loadingTitles, setLoadingTitles] = useState(false)
    const [titles, setTitles] = useState([])

    //whenever the author state is changed, and is not null, fetch titles from said author
    useEffect(() => {
        if(author !== null){
            fetchTitles()
        }
    },[author])

    //function used to fetch the title data. if successful, the data will be save to the titles state
    //if unsuccessful the application will throw up a notification alerting user
    const fetchTitles = async() => {
        setLoadingTitles(true)
        const response = await fetch(`https://poetrydb.org/author/${author}/title`)
        if (response.ok){
            const data = await response.json()
            if ('status' in data && data.status !== 200){
                toast('Failed to fetch titles')
            }
            else{
                setTitles(data.map((option) => option.title))
            }

        }
        else{
            toast('Failed to fetch titles')
        }
        setLoadingTitles(false)
    }
    return {loadingTitles, titles}
}

export default useFetchTitles


