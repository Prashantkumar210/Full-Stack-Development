import React from "react";
import Card from "../card/card";
import './hero.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"
import image4 from "../../assets/image4.jpg"

function Hero(){
    return (
        <div className="hero">
            <Card name="BMW" price="5cr" imageUrl={image1}/>
            <Card name="Red lombogirni" price="4cr" imageUrl={image2}/>
            <Card name="Green lombogirni" price="8cr" imageUrl={image3} />
            <Card name="Yellow Lombogirni" price ="5cr" imageUrl={image4} />
        </div>
    )
}

export default Hero