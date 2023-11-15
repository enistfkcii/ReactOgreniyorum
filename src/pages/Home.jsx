import arr from "../data";

const Home = () => {
    const redirectFunc = (id) => {
        window.location = `detail/${id}`;
    }

    return (
        <div>
            {/* <button onClick={redirectFunc}>Detay Sayfasına Yönlendir.</button> */}
            {
                arr.map((ar,i) => (
                    <div onClick={() => redirectFunc(ar.id)} key={ar.id} style={{margin:"10px",cursor:"pointer,",border:'1px solid black',padding:"5px"}}>{ar.name}</div>
                ))
            }
        </div>
    )
}
export default Home;