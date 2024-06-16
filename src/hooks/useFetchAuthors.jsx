import { useState, useEffect } from "react"
import { toast } from "react-toastify"

const useFetchAuthors = () => {
    //state used to represent when the authors data is being fetched
    const [loadingAuthors, setLoadingAuthors] = useState(false)
    //state used to hold the author data
    const [authors, setAuthors] = useState([])

    //on first render, fetch the authors
    useEffect(() => {
        fetchAuthors()
    },[])

    //function used to fetch the author data. if successful, the data will be save to the authors state
    //if unsuccessful the application will throw up a notification alerting user
    const fetchAuthors = async() => {
        setLoadingAuthors(true)
        const response = await fetch('https://poetrydb.org/author')
        if (response.ok){
            const data = await response.json()

            if ('status' in data && data.status !== 200){
                toast('Failed to fetch authors')
            }
            else{
                setAuthors(data.authors)
            }
        }
        else{
            toast('Failed to fetch authors')
        }
        setLoadingAuthors(false)
        
    }
    //return the states for use in components
    return {loadingAuthors, authors}
}

export default useFetchAuthors


