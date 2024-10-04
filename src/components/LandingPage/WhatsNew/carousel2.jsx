import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { whatsNew } from "../../../Data/data";


function Carousel2() {
  // Split the data into chunks of 4
  const chunkedData = [];
  for (let i = 0; i < whatsNew.length; i += 6) {
    chunkedData.push(whatsNew.slice(i, i + 6));
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
            fontSize: "5vw",
            padding: ".5vw",
            // marginLeft: "3vw",
            margin:"2vw 1vw",
            width: "18vw",
          }}
        >
          WHAT'S
          <br /> NEW
        </p>
      </div>
      <div style={{ width: "80vw" }}>
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
                  <div key={idx} style={{ display: "flex",flexDirection:"column", padding: ".5vh",gap:'1.5vw' }}>
                    <img
                      style={{
                        borderRadius: "15vh",
                        border: "2px solid gray",
                        width : "14vh",
                        height: "13vh",
                      }}
                      src={data.image}
                     
                    />
                    
                      <p style={{ fontSize: "1.8vw", }}>
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