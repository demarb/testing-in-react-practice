import React, {useEffect, useState} from 'react'

export default function APIComponent() {
    
    const [data, setData] = useState({
        name: ""
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

    return (
        <div>
            {data && 
                <div role='contentinfo'>
                    Name is {data.name}
                </div> 
            }
        </div>
    )
}
