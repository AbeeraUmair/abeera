import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { styledByYou } from "../../../Data/data";

const Stylebyu = () => {
  // Split the data into chunks of 4
  const chunkData = [];
  for (let i = 0; i < styledByYou.length; i += 4) {
    chunkData.push(styledByYou.slice(i, i + 4));
  }
  return (
    <div style={{ backgroundColor: "rgb(254, 249, 232)" }}>
      <center>
      <h1 className="text-center" style={{ fontSize: "1.7rem" }}>
        STYLED BY YOU
      </h1>
      <h4 className="text-center" style={{ fontSize: "1.2rem" }}>
        #SAPPHIREXME
      </h4>

      <Carousel
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "rem",
        }}
      >
        {chunkData.map((dataChunk, index) => (
          <Carousel.Item className="caro3" key={index}>
            {dataChunk.map((data, idx) => (
              <div key={idx} style={{ margin: ".2rem", textAlign: "center",lineHeight:'.2rem' }}>
                <img style={{width:'14rem',height:'14rem',margin:'',}}  src={data.image} />
                
                  <h6 style={{marginTop:'1.5rem',}}>{data.name}</h6>
                  <p style={{ fontSize: ".8rem", }}>{data.nameId}</p>
                  <p style={{ fontSize: ".8rem", }}>
                    {data.para}
                  </p>
                  <p style={{ fontSize: "1rem", }}>{data.dress}</p>
                
              </div>
            ))}
          </Carousel.Item>
        ))}
      </Carousel>
      </center>
    </div>
  );
};

export default Stylebyu;
