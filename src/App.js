// import { useEffect, useMemo, useReducer, useRef, useState } from "react";
// import Enis from "./components/Enis";
// import Tufekci from "./components/Tufekci";
// import { GiLion } from "react-icons/gi";
// import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Detail from "./pages/Detail";

import { useSelector } from "react-redux";

// import axios from "axios";
// import { useEffect, useState } from "react";

function App() {

  // const [count,setCount] = useState(0);
  // const [text,setText] = useState("");
  // // const firstRef = useRef(0);
  // const func = ({num}) => {
  //   console.log("hesapplanıyor.")
  //   for(let i = 0; i < 100000; i++){
  //     num += 1;
  //   }
  //   return num;
  // }
  // const memo = useMemo(() => func(count),[text]); // ikinci parametrede verilen kısım değişmediği sürece render edilmez.
  // useMemo => cok büyük fonksiyonların calıstılıp birden fazla kere render edilmesinin önüne geçilmesini sağlar.
  // setCount => 0 dan başlayan bir count degeri ve setCountun amacı içini güncellemek istersen kullanabileceğin fonksiyon.
  // const [color,setColor] = useState('blue');
  // // console.log("count",count);
  // const yazi = "props mantığı";
  // const clickFunc = () => {
  //   setColor('red');
  // }
  // const arr = [
  //   {name:"Enis",id:0},{name:"Aybuke",id:1},{name:"Sevim",id:2}
  // ]
  // console.log(arr,'arr');
  // return (
  //   <div className="App">
  //     { /* ad  {} => bu şekilde yazarak yukardaki değişkenleri html içerisinde kullanabiliyoruz.Bu esnekliğe de jsx yapısı deniyor. */}
  //     <Enis props={yazi}></Enis>
  //     {/* Props mantıgı appden yolladıgımız bir değerin component sayfalarında karşılanmasıdır. */}
  //     {/* Component mantıgı bunlardır. */}
  //     <Tufekci></Tufekci>
  //     <div style={{color}}>
  //       RENKLERLE OYNAYALIM
  //     </div>
  //     {
  //       arr.map((ar,i) => (
  //         <div key={ar.id}>{ar.name}</div>
  //         // map => dışarda olusturdugumuz cok elemanlı yapıları ekrana bastırmamıza olanak sağlayan yapı.
  //       ))
  //     }
  //     <button onClick={clickFunc}>TIKLA</button>
  //   </div>
  // );
  
  // useEffect(() => {
  //   setStatus("deneme2");
  // },[]);
  // useEffect => sayfa her renderlandıgında calısmasını istediğimiz fonksiyon.
  //  console.log("firstRef",firstRef.current.value = 5);
  // const refFunc = () => {
  //   //firstRef.current
  // }
  // const [text,setText] = useState("");
  // const [message,setMessage] = useState([]);

  // const onChangeFunc = (e) => {
  //   setText(e.target.value)
  // }
  // const messageFunc = () => {
  //   setMessage(prev => [...prev,text]) // ...prev => önceki tüm mesajları al demek istedik.
  //   setText('');
  // }
  // console.log(message,"message");
//   const [country,setCountry] = useState([]);
//   useEffect(() => {
//     const getCountry = async () => {
//       const data = await axios.get('https://restcountries.com/v3.1/all');
//       setCountry(data);
//     }
//     getCountry();
//   },[])

// console.log(country);
console.log("object",useSelector(state => state));
  return(
    <>
    {/* <div>

      {memo}
      <GiLion></GiLion>
    ENIS
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="detail/:id" element={<Detail/>}></Route>
    </Routes>
    </BrowserRouter>
    </div> */}
    {/* <input onClick={refFunc} ref={firstRef} placeholder="Ara"/> */}
    {/* <input value={text} placeholder="ara"onChange={e => setText(e.target.value)}></input> */}

    {/* <div>
    <input value={text} onChange={onChangeFunc} type="text" placeholder="Ekle"></input>
    <button onClick={messageFunc}>Ekle</button>
    {
      message?.map((msg,i)=>(
        <div key={i}>{msg}</div>
      ))
    }
    </div> */}
<div>
{/* {
  country?.data?.map((dt,i) => (
    <div key={i}>
      {dt.name.common}
    </div>
  ))
} */}
enis

</div>




    </>
    
  )
}

export default App;
