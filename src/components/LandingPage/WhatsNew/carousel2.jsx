import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { whatsNew } from "../../../Data/data";


function Carousel2() {
  // Split the data into chunks of 4
  const chunkedData = [];
  for (let i = 0; i < whatsNew.length; i += 4) {
    chunkedData.push(whatsNew.slice(i, i + 4));
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginLeft: "auto",
        marginRight: "2rem",
        marginBottom : '3rem' ,
        marginTop :'3rem',
      }}
    >
      <div>
        <p
          style={{
            fontSize: "3rem",
            padding: "1rem",
            marginLeft: "3rem",
            width: "20%",
          }}
        >
          WHAT'S
          <br /> NEW
        </p>
      </div>
      <div style={{ width: "80%" }}>
        <Carousel>
          {chunkedData.map((dataChunk, index) => (
            <Carousel.Item key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign :'center',
                }}
              >
                {dataChunk.map((data, idx) => (
                  <div key={idx} style={{ flex: "1", padding: "0 1rem" }}>
                    <img
                      style={{
                        borderRadius: "10rem",
                        border: "2px solid gray",
                        width: "100%",
                        height: "25vh",
                      }}
                      src={data.image}
                     
                    />
                    
                      <p style={{ fontSize: "1rem", }}>
                        {data.para}
                      </p>
                    
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Carousel2;