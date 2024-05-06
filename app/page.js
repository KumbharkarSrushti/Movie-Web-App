import Header from "./header";
import Grid from "./grid.js"

const Home=()=>{
    return(
        <>
        <div className="first_row">
            <Header />
            <div className="line"></div>
        </div>
        <Grid/>
        </>
    )
}


export default Home;