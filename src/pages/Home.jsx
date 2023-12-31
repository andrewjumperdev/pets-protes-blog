
import Posts from "../components/Posts"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import background from '../assets/home-banner.webp';

const Home = () => {
    return (
        <>
            <Navigation />
            <div className="masthead" style={{ backgroundImage: `url(${background})` }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Pet Prosthetics</h1>
                                <span className="subheading">This is a blog dedicated to improving the lives of our pets.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <Posts />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home