import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { MdOutlineShoppingBag } from "react-icons/md";
import { trending } from "../../../Data/data";
import "./style.css";

const Trending = () => {
  // Split the data into chunks of 3
  const chunkedData = [];
  for (let i = 0; i < trending.length; i += 3) {
    chunkedData.push(trending.slice(i, i + 3));
  }
  return (
    <div>
      <center>
        <div style={{ width: "20%", marginTop: "1rem" }}>
          <h1 style={{ fontSize: "1.7rem", letterSpacing: ".1rem" }}>
            TRENDING
          </h1>
          <hr />
        </div>

        <Carousel
          style={{
            width: "100%",
            
          }}
        
        >
          {chunkedData.map((dataChunked, index) => (
            <Carousel.Item className="caro3" key={index}>
              {dataChunked.map((data, idx) => (
                <div
                  key={idx}
                  style={{ width: "30%", margin: "", textAlign: "center" }}
                >
                  <div
                    style={{
                      border: "1px solid gray",
                      borderRadius: "2rem",
                      marginTop: "rem",
                      height: "3rem",
                      width: "3rem",
                      position: "relative",
                      top: "3.5rem",
                      left: "7rem",
                      backgroundColor: "white",
                      opacity: ".7",
                      zIndex: "5",
                    }}
                  >
                    sold
                    <br /> out
                  </div>
                  <img className="img-trending" src={data.image} />
                  <div
                    style={{
                      display: "flex",
                      margin: ".5rem .5rem",
                      lineHeight: ".1rem",
                      width: "15rem",
                    }}
                  >
                    <div>
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
                    <div style={{ float: "right" }}>
                      <MdOutlineShoppingBag
                        style={{
                          float: "right",
                          marginTop: "-2rem",
                          fontSize: "1.5rem",
                          position: "relative",
                          top: "rem",
                          left: "4rem",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel.Item>
          ))}
        </Carousel>
      </center>
    </div>
  );
};

export default Trending;
