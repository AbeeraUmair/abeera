import React from "react";
import  Form  from "react-bootstrap/Form";
import InputGroup  from "react-bootstrap/InputGroup";

const Footer = () => {
  return (
    <div style={{marginTop : '5rem',}}>
      <div
        style={{ display: "flex", backgroundColor: "#f6f6f8", padding: "1rem",}}
      >
        <div style={{ width: "50%",margin :'.5rem', }}>
          <h6> CONTACT US</h6>
          <p>
            Sapphire Retail Head Office 1.5-Km, Defence Road, Bhobtian Chowk,
            Off Raiwind Road, Opposite University of Lahore, Lahore.
          </p>
          <p> wecare@sapphireonline.pk</p>
          <p>+92(0)42 111-738-245</p>
        </div>
        <div style={{ width: "50%",margin :'.5rem', }}>
          <h6> CUSTOMER CARE</h6>
          <p>
            Exchange & Return Policy <br />
            FAQs <br />
            Contact Us
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#f6f6f8",
          padding: "1rem",
        }}
      >
        <div style={{ width: "50%" ,margin :'.5rem', }}>
          <h6>INFORMATION</h6>
          About Us <br /> Privacy Policy <br /> SafePay Guide  <br />Payments  <br />Store Locator <br /> Fabric
          Glossary  <br />Blogs <br />
        </div>

        <div style={{ width: "50%", margin :'.5rem', }}>
          <p>NEWSLETTER SIGNUP</p>
          <p>Subscribe to our Newsletter for Exclusive Updates</p>
          <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
       
       />
        <InputGroup.Text id="basic-addon2" style={{backgroundColor : 'black',color : 'white',}}>Subscribe</InputGroup.Text>

      </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Footer;
