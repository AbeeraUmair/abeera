import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { moreToExplore } from "../../../Data/data";
import "./style.css"
import { Col } from "react-bootstrap";

const Moretoexplore = () => {
  // Split the data into chunks of 3
  const chunkData = [];
  for (let i = 0; i < moreToExplore.length; i += 3) {
    for (let j = 0; j < moreToExplore.length; j += 3){
      
    }
    chunkData.push(moreToExplore.slice(i, i + 3));
  }
  return (
    <div>
      <center>
        <div style={{ width: "25%" }}>
          <h1 className="text-center " style={{ fontSize: "1.7rem" }}>
           MORE TO EXPLORE
          </h1>
          <hr />
        </div>

        <Carousel style={{ marginLeft: "rem" ,width:'100%',}}>
         
          {chunkData.map((dataChunk, index) => (
          <Carousel.Item className="caro3" key={index}>
            {dataChunk.map((data, idx) => (
                            <Col xs={12} md={4} lg={4}>

              <div key={idx} >
                <img  style={{display:'flex',margin:'.5rem',}} 
                  className="img-moretoexplore"

                  src={data.image}
                />

                <p style={{ fontSize: "1.2rem" ,fontWeight:'600'}}>{data.para}</p>
              </div>
              </Col>

            ))}
          </Carousel.Item>
        ))}
      </Carousel>
      </center>
    </div>
  );
};

export default Moretoexplore;
