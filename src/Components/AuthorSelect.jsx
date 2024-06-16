import { Autocomplete } from "@mui/material"
import {TextField} from "@mui/material"
import useFetchAuthors from "../hooks/useFetchAuthors"
import { ToastContainer } from "react-toastify"

const AuthorSelect = ({setAuthor}) => {
    const {loadingAuthors, authors} = useFetchAuthors()

    return(
        <div className="flex justify-center">
            <Autocomplete
            options={loadingAuthors ? ['loading']: authors}
            sx={{ width: 300, color:'white'}}
            renderInput={(params) => <TextField {...params} label="Select an author" />}
            onChange={(event, newValue) => setAuthor(newValue)}
            />
            <ToastContainer position="bottom-right"/>
        </div>
    )
}

export default AuthorSelect