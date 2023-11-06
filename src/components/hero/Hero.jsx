import "./hero.scss"

function Hero() {
    return (
        <div className="hero">
            <div className="wrapper">
            <div className="textContainer">
                <h2>OZKAN HASAN</h2>
                <h1>Web Developper</h1>
                <div className="buttons">
                    <button>Download CV</button>
                    <button>Contact Me</button>
                </div>
                <img src="/scroll.png" alt="" />
            </div>
            </div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero