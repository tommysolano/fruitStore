import React, {useState} from "react"
import "../../assets/style/slider.scss"
import ImgComp from "./imgComponent.js"
import i1 from "../../assets/static/1.jpg"
import i2 from "../../assets/static/2.jpg"

function Slider(){
    let sliderArr = [<ImgComp src={i1} name_title={"FRUTAS"}/>, <ImgComp src={i2} name_title={"VERDURAS"}/>]
    const [x, setX] = useState(0);
    const goLeft = () =>{
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
    }
    const goRight = () =>{
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    }
    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return(
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={goLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
} 

export default Slider 