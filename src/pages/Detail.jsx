import { useParams } from "react-router-dom";
import arr from "../data";
import { useEffect, useState } from "react";

const Detail = () => {
    const {id} = useParams() // bu hooks => yukardan bir isim veya deger gönderilirse bunu görmemi sağlar.
    const [data,SetData] = useState([]);

    useEffect(() => {
        SetData(arr)
    },[id])

    console.log("data",data);
    const redirectFunc = () => {
        window.location = "/";
    }
    return (
        <>
        <div>
            <button onClick={redirectFunc}>Ana sayfaya yönlendir</button>
            {data.filter(dt => dt.id == id).map((dat) => (
            <div key={dat.id}>{dat.name}</div>
            ))}
        </div>
        
        </>
        
    )
}
export default Detail;