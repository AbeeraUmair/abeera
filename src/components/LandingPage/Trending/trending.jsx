import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { MdOutlineShoppingBag } from "react-icons/md";
import { trending } from "../../../Data/data";
import "./style.css";
import { Col } from "react-bootstrap";
const Trending = () => {
  // Split the data into chunks of 3
  const chunkedData = [];
  for (let i = 0; i < trending.length; i += 3) {
    chunkedData.push(trending.slice(i, i + 3));
  }
  return (
    <div>
      <center>
        <div style={{ width: "30%", marginTop: "1rem" }}>
          <h1 style={{ fontSize: "2.67vh", letterSpacing: ".1rem" }}>
            TRENDING
          </h1>
          <hr />
        </div>

        <Carousel
          style={{
            width: "100%",
            objectFit:"cover",        
          }}
        
        >
          {chunkedData.map((dataChunked, index) => (
            <Carousel.Item className="caro3 container-fluid px-3 mx-auto" key={index}>
              {dataChunked.map((data, idx) => (
                <div
                key={idx}
                style={{ width: "30%", margin: "", textAlign: "center" }}
                >
                  <div
                    style={{
                      border: "1px solid gray",
                      borderRadius: "2rem",
                      marginTop: "vh",
                      height: "3.5vh",
                      width: "3vh",
                      position: "relative",
                      top: "4.5vh",
                      left: "8vh",
                      backgroundColor: "white",
                      opacity: ".7",
                      zIndex: "5",
                    }}
                  >
                    sold
                    <br /> out
                    
                  </div>

                  <img
                  className= "img-bycategory img-fluid w-100 px-2 "
                  src={data.image} />
                  <div
                    style={{
                      display: "flex",
                      margin: ".5rem rem",
                      lineHeight: ".1rem",
                      width: "15rem",
                    }}
                  >
                    <div style={{
                        marginTop: "2vh",
                    }}>
                      <p style={{ fontWeight: "bold", fontSize: ".7rem" }}>
                        {data.p}
                      </p>
                      <p style={{ fontSize: ".8rem", textAlign: "left" }}>
                        {data.para}
                      </p>
                      <p style={{ fontSize: ".7rem", textAlign: "left" }}>
                        {data.pkr}
                      </p>
                    </div>
                     <div >

                      <MdOutlineShoppingBag
                        style={{
                          float: "right",
                          marginTop: "-4.2vh",
                          fontSize: "1.5vh",
                          position: "relative",
                          top: "",
                          left: "11vh",
                        }}
                      />
                    </div>
                  </div>
                </div>

              ))}
            </Carousel.Item>
          ))
          }
        </Carousel>
      </center>
    </div>
  );
};

export default Trending;
