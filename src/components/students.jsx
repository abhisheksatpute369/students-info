import React, { useEffect, useState } from "react";
import axios from "axios";
import {STable, STHead, STHeadTR, STH, STBody, STBodyTR, STD} from "./style"

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
        // getstudent();
    },[])

    return(
        <div>
            <STable>
                <STHead>
                    <STHeadTR>
                        <STH>Image</STH>
                        <STH>Name</STH>
                        <STH>Attendence</STH>
                        <STH>Total lectures</STH>
                    </STHeadTR>
                </STHead>
                <STBody>
                    {
                        student.map((entry)=>{
                            return(
                                <STBodyTR>
                                    <STD><img alt="profile" src={entry.avatarURL} height="100px" width="100px"></img></STD>
                                    <STD>{entry.name}</STD>
                                    <STD>{entry.lecturesAttended}</STD>
                                    <STD>{entry.totalLectures}</STD>
                                </STBodyTR>
                            )
                        })
                    }
                    
                </STBody>
            </STable>
        </div>
    )
}

export default Students;