import React, { useEffect, useState } from "react";
import axios from "axios";
import {STable, STHead, STHeadTR, STH, STBody, STBodyTR, STD} from "./style"

const Students = () => {

    const [student, setstudent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [err, setErr] = useState(false);
    // function for getting data from server using axios 

    const getstudent = (page)=>{
        setLoading(true);
        setErr(false);
        axios(`https://my.api.mockaroo.com/students?key=22483ba0&page=${page}&limit=20`,{
            method: 'GET',
            
          })
        .then(res =>{
            setLoading(false); 
            const data = res.data;
            setstudent(data); 
        })
        .catch(err =>{
            setLoading(false);
            setErr(true);
            setstudent([]);
            if (
				err.response &&
				err.response.status >= 400 &&
				err.response.status <= 500
			) {
				setErr(true);
                console.log(err.response.data.message)
			}
        })

    }

    useEffect(()=>{
          getstudent(page);
    },[page])

    // to check scrolling 

    const scrollToEnd = () =>{
        setPage(page+1);
    }
    window.onscroll = function(){
        if(window.innerHeight + window.documentElement.scrollTop === document.documentElement.offsetHeight)
        {
            scrollToEnd();
        }
    }

    return(
        <div>
            <STable>
                <STHead>
                    <STHeadTR>
                        <STH>ID</STH>
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
                                <STBodyTR key={entry.id}>
                                    <STD>{entry.id}</STD>
                                    <STD><img alt="profile" src={entry.avatarURL} height="100px" width="100px"></img></STD>
                                    <STD>{entry.name}</STD>
                                    <STD>{entry.lecturesAttended}</STD>
                                    <STD>{entry.totalLectures}</STD>
                                </STBodyTR>
                            )
                        })
                    }
                    
                </STBody>
                {loading && <div>...Loading</div>}
            </STable>
        </div>
    )
}

export default Students;