import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import ProgressBar from 'react-bootstrap/ProgressBar';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const now1 = 100
  const now2 = 95
  const now3 = 90
  const now4 = 85
  const now5 = 85
  const labelnow1 = 'HTML & CSS';
  const labelnow2 = 'BootStrap';
  const labelnow3 = 'JavaScript';
  const labelnow4 = 'React.Js';
  const labelnow5 = 'React.BootStrap';
  return (
    <section className="skill" id="skills">
        <div className="container">
            {/* <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML & CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>BootStrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>React.BootStrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div> */}
            <h2>Skills</h2>
            <ProgressBar variant="success" now={now1} label={`${labelnow1}`}/> <br /> 
            <ProgressBar variant="success" now={now2} label={`${labelnow2}`}/> <br />
            <ProgressBar variant="success" now={now3} label={`${labelnow3}`}/> <br />
            <ProgressBar variant="success" now={now4} label={`${labelnow4}`}/> <br />
            <ProgressBar variant="success" now={now5} label={`${labelnow5}`}/> <br />
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
