import React, { useCallback, useState } from "react"
import axios from "axios";
import "../App.css"
import { SInput, SButton } from "./style";

const Search = () => {
    
    const [search, setSearch] = useState([]);

    // for optimize the search request 
    const debounce = (func) => {
        let timer;
        return function(...args){
            const context = this;
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 1000);
        }
    }

    const handlechange = (e)=>{
        const {value} = e.target;
        if(value.length >3 ){
            axios(`https://my.api.mockaroo.com/students?key=22483ba0&q=${value}`,{method : "GET"})
            .then(res =>{
                const data = res.data
                setSearch(data);
            })
        }
        
    }

    const optimesed = useCallback(debounce(handlechange),[])

    const handlesubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div id = "inputdiv">
            <form>
                <SInput type="text" name="search" onChange={optimesed} placeholder="enter name"></SInput>
                <SButton onClick={handlesubmit}>Search</SButton>
            </form>
            {
                search.length > 0 &&
                <div>
                    {
                        search.map((el, i)=>{
                            <div key={i} id="debounce">
                                <span>{el.name}</span>
                            </div>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Search;