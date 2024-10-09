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
      <div style={{width:'30%',}}>
      <h1 className="text-center " style={{fontSize: '2.67vh',}}>SHOP BY CATEGORY</h1>
      <hr />
      </div>
      
      <Carousel
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap :"1",
        }}
      >
        {chunkData.map((dataChunk, index) => (
       <Carousel.Item className="caro3 container-fluid px-3 mx-auto " key={index}>
                   
            {dataChunk.map((data, idx) => (
                  
              <div key={idx} style={{ textAlign: "center" }}>
                <img
                  className= "img-bycategory img-fluid w-100 px-2 "
                  src={data.image}
                />
                <p style={{ fontSize: "1.5vh" ,fontWeight:'600'}}>{data.para}</p>
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
