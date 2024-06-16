import { useEffect, useState } from "react"
import AuthorSelect from "../Components/AuthorSelect"
import TitleSelect from "../Components/TitleSelect"
import Poem from "../Components/Poem"

const Landing = () => {
    //states use to store the selected author and title
   const [selectedAuthor, setSelectedAuthor] = useState(null)
   const [selectedTitle, setSelectedTitle] = useState(null)

    return (
        <div>
            <div className="pt-10 mb-10 text-white">
                <h1 className="text-2xl pb-5">Andrew Staneceks'</h1>
                <h1 className="title  text-8xl text-white text-center justify-center ">Poetry DB</h1>
            </div>
            <div className="flex justify-center gap-5">
                <AuthorSelect setAuthor={setSelectedAuthor}/>
                <TitleSelect disabled={selectedAuthor === null} setTitle={setSelectedTitle} selectedAuthor={selectedAuthor} title={selectedTitle}/>
            </div>
            <div className="pt-10">
                {selectedAuthor !== null && selectedTitle !== null && 
                    <Poem selectedAuthor={selectedAuthor} selectedTitle={selectedTitle}/>
                }
            </div>
            
        </div>
    )
}

export default Landing