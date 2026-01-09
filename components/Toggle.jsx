import { FaMoon, FaSun } from "react-icons/fa";
import { useState , useEffect } from "react";

function Toggle()
{
    const [darkMode, setdarkMode] = useState(false);
    useEffect(()=>{
        if(darkMode)
        {
            document.documentElement.classList.add("dark");
        }
        else
        {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return(
        <button className="flex items-center mr-10" onClick={()=> setdarkMode(!darkMode)}>
            {darkMode ? <FaMoon color="gray" size={24}/> : <FaSun color="yellow" size={24}/>}
        </button>
    );
}
export default Toggle;