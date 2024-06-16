import { Autocomplete } from "@mui/material"
import {TextField} from "@mui/material"
import { Fragment, useEffect } from "react"
import useFetchTitles from "../hooks/useFetchTitles"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const TitleSelect = ({selectedAuthor, setTitle, title, disabled}) => {
    const {loadingTitles, titles} = useFetchTitles(selectedAuthor)

    useEffect(() => {
        setTitle(null)
    },[selectedAuthor])

    return(
        <div className="flex justify-center">
            <Autocomplete
                disabled={disabled}
                value={title}
                options={loadingTitles ? ['loading']: titles}
                sx={{ width: 300, color:'white'}}
                getOptionLabel={(option) => option}
                renderInput={params =>  {return (<TextField {...params}  label="Select a title" />)}}
                onChange={(event, newValue) => setTitle(newValue)}
            />
            <ToastContainer position="bottom-right"/>
        </div>
    )
}

export default TitleSelect