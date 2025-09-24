import ErrorImage from "../assets/404.svg"
import { useNavigate } from "react-router-dom"
const Error = ()=>{

    const navigate = useNavigate()
    
    return(
        <section className="w-full h-[100vh]  flex flex-col justify-around items-center">
            <img src={ErrorImage} alt="error-image" className="w-[80%] h-[50vh]"/>
            <p className="mt-4 text-gray-600">The page you are looking for doesn’t exist.</p>
            <button onClick={()=> navigate("/")} className="text-white text-lg cursor-pointer bg-red-600 w-46 h-14 rounded-md font-bold">Back to Homepage</button>
        </section>
    )
}

export default Error