import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function customcarousel(){
    return(
        <div>
           
           <Carousel width={"30"} showIndicators={true}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLj09ZpqA-TNAbYBJltnpNrVV9-YE2MD9w_w&s" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLj09ZpqA-TNAbYBJltnpNrVV9-YE2MD9w_w&s" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLj09ZpqA-TNAbYBJltnpNrVV9-YE2MD9w_w&s" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}