import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { shopByCategory } from "../../../Data/data";

function Carousel3() {
  // Split the data into chunks of 4
  const chunkData = [];
  for (let i = 0; i < shopByCategory.length; i += 4) {
    chunkData.push(shopByCategory.slice(i, i + 4));
  }
  return (
    <div>
      <center>
      <div style={{width:'25%',}}>
      <h1 className="text-center " style={{fontSize:'1.7rem',}}>SHOP BY CATEGORY</h1>
      <hr />
      </div>
      
      <Carousel
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "rem 2rem",
        }}
      >
        {chunkData.map((dataChunk, index) => (
          <Carousel.Item className="caro3" key={index}>
            {dataChunk.map((data, idx) => (
              <div key={idx} style={{ padding: "rem", textAlign: "center" }}>
                <img
                  className="img-bycategory"
                  //  style={{width :'25vw',

                  //  }}
                  src={data.image}
                />

                <p style={{ fontSize: "1.2rem" ,fontWeight:'600'}}>{data.para}</p>
              </div>
            ))}
          </Carousel.Item>
        ))}
      </Carousel>
      </center>
    </div>
  );
}

export default Carousel3;
