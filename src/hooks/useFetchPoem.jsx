
import { useState, useEffect } from "react"
import { toast } from "react-toastify"

const useFetchPoem = (selectedAuthor, selectedTitle) => {
    const [loadingPoem, setLoadingPoem] = useState(false)
    const [poem, setPoem] = useState(null)

    //whenever the selected title state changes, and the author and title state are not
    //null, fetch the poem data associated with said author and title
    useEffect(() => {
        if ((selectedAuthor !== null) && (selectedTitle !== null)){
            fetchPoem()
        }
    },[selectedTitle])


    //function used to fetch the poem data. if successful, the data will be save to the poem state
    //if unsuccessful the application will throw up a notification alerting user
    const fetchPoem = async() => {
        setLoadingPoem(true)
        const response = await fetch(`https://poetrydb.org/author,title/${selectedAuthor};${selectedTitle}`)
        if (response.ok){
            const data = await response.json()
            if ('status' in data && data.status !== 200){
                toast('Failed to fetch poem')
            }
            else{
                setPoem(data[0])
            }
        }
        else{
            toast('Failed to fetch poem')
        }
        setLoadingPoem(false)
        
    }

    return {loadingPoem, poem}
}

export default useFetchPoem