import React from "react";
import  Form  from "react-bootstrap/Form";
import InputGroup  from "react-bootstrap/InputGroup";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";


const Footer = () => {
  return (
    <div style={{marginTop : '5rem',}}>
      <div
        style={{ display: "flex", backgroundColor: "#f6f6f8", padding: "1rem",}}
      >
        <div style={{ width: "50%",margin :'.5rem', }}>
          <h6> CONTACT US</h6>
          <div style={{ display: "flex", fontSize:'.9rem',}}>
            <div >
            <CiLocationOn style={{width:'1.5rem',height:'1.5rem',marginTop:'.2rem',}} />
            </div>
            <div style={{marginLeft:'.5rem',}}>
              <p>
           Sapphire Retail Head Office<br/> 1.5-Km, Defence Road, Bhobtian Chowk,
            Off Raiwind Road, Opposite<br/> University of Lahore, Lahore.
          </p>
            </div>
          </div>
          <div style={{ display: "flex", }}>
            <div><MdOutlineMailOutline style={{width:'1.5rem',height:'1.5rem',marginTop:'.2rem',}} /> </div>
            <div style={{marginLeft:'.5rem',}}><p>wecare@sapphireonline.pk</p></div>
          </div>
          <div style={{ display: "flex", }}>
            <div><LuPhone  style={{width:'1.5rem',height:'1.5rem',marginTop:'.2rem',}}/></div>
            <div style={{marginLeft:'.5rem',}}><p>
          +92(0)42 111-738-245</p></div>
          </div>
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
          <h6 >INFORMATION</h6>
          About Us <br /> Privacy Policy <br /> SafePay Guide  <br />Payments  <br />Store Locator <br /> Fabric
          Glossary  <br />Blogs <br />
        </div>

        <div style={{ width: "50%", margin :'.5rem', }}>
          <p>NEWSLETTER SIGNUP</p>
          <p>Subscribe to our Newsletter for Exclusive Updates</p>
          <InputGroup className="mb-3">
        <Form.Control
          placeholder="Your email address"
          aria-label="Your email address"
          aria-describedby="basic-addon2"
       
       />
        <InputGroup.Text id="basic-addon2" style={{backgroundColor : 'black',color : 'white',}}>Subscribe</InputGroup.Text>

      </InputGroup>
       <FaFacebookF style={{fontSize :'1.5rem',}}/>
       <FaInstagram style={{fontSize :'1.7rem',margin: '1rem',}} />
       <FaYoutube style={{fontSize :'1.9rem' ,margin: '.5rem',}} />

        </div>
       
      </div>
    </div>
  );
};

export default Footer;
