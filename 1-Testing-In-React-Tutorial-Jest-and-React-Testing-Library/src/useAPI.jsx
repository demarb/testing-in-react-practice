import React, {useEffect, useState} from 'react'

export default function useAPI() {
    const [data, setData] = useState({
        name: "Matt"
    })

    useEffect(()=>{
        let isMounted = true;
        fetch("https://www.fakeapicall.com/api")
            .then((response)=>response.json())
            .then((data)=>{
                if(isMounted){
                    setData(data)
                }
            });

        //Cleanup Function
        return () => {
            isMounted =false;
        }
    }, [])

    return data
}
