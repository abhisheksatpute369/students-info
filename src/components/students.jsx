import React, { useEffect, useState } from "react";
import axios from "axios";

const Students = () => {

    const [student, setstudent] = useState([]);
    // function for getting data from server using axios 
    const getstudent = ()=>{
        axios.get("https://my.api.mockaroo.com/students?key=22483ba0")
        .then(res =>{
            const data = res.data;
            setstudent(data); 
        })
        .catch(err =>{
            console.log(err);
        })

    }

    useEffect(()=>{
        getstudent();
    },[])

    return(
        <div>
            
        </div>
    )
}

export default Students;