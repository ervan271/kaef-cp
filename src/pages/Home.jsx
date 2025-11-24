import Carousel from "../components/Carousel";
import card1 from '../assets/images/card1.jpg'
import card2 from '../assets/images/card2.jpg'
import card3 from '../assets/images/card3.jpeg'

function Home() {
    return (
    <>
       <Carousel/>
       <section className="cards-news">
        <div className="container text-center">
            <div className="row justify-content-center align-items-center">
                <div className="col">
                    <h3>Company News</h3>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card" style={{minHeight: '100px'}}>
                            <img src={card1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{minHeight: '100px'}}>
                            <img src={card2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{minHeight: '100px'}}>
                            <img src={card3} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
    </>
    )

}


export default Home;