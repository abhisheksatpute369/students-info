import React, { useState } from "react"
import axios from "axios";
import "../App.css"
import { SInput, SButton } from "./style";

const Search = () => {
    
    const [search, setSearch] = useState([]);

    const handlechange = (e)=>{
        const {value} = e.target;
        axios.get(`https://demo.dataverse.org.api/search?q=${value}`)
        .then(res => res.json())
        .then(json => setSearch(json.data.item))
    }
    return(
        <div id = "inputdiv">
            <form>
                <SInput type="text" name="search" onChange={handlechange} placeholder="enter name"></SInput>
                <SButton>Search</SButton>
            </form>
            {
                search.length > 0 &&
                <div>
                    {
                        search.map((el, i)=>{
                            <div key={i}>
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