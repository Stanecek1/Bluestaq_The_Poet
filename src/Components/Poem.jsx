import useFetchPoem from "../hooks/useFetchPoem"
import { Oval } from 'react-loader-spinner'

const Poem = ({selectedAuthor, selectedTitle}) => {
    const  {loadingPoem, poem} = useFetchPoem(selectedAuthor, selectedTitle)
    return(
        <div className="justify-center text-white">
            {loadingPoem ? <div className="flex justify-center"><Oval/></div> : 
                <div>
                    {poem && 
                        <div>
                            <h1 className="text-2xl font-bold">{poem.title} by {poem.author}</h1>
                            <div className="pt-5 pb-10 justify-center text-center">
                                {poem.lines.map((line, index) => (
                                    <p key={`poem ${index}`}>{line}</p>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Poem