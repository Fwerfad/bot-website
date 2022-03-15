import {CCarousel, CCarouselCaption, CCarouselItem, CImage} from "@coreui/react";
import im1 from "../images/t1.png";
import im2 from "../images/t2.png";
import im3 from "../images/t3.png";
import im4 from "../images/t4.png";
import im5 from "../images/t5.png";
import im6 from "../images/t6.png";
import im7 from "../images/t7.png";

export function CarouselElem() {
    return(
        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="d-inline-block w-50" src={im1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-inline-block w-50" src={im2} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-inline-block w-50" src={im3} alt="slide 3" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-inline-block w-50" src={im4} alt="slide 3" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-inline-block w-50" src={im5} alt="slide 3" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-inline-block w-50" src={im6} alt="slide 3" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-inline-block w-50" src={im7} alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
    )
}