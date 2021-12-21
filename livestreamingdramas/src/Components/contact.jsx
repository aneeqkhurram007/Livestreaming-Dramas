import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Accordion } from 'react-bootstrap';
import "font-awesome/css/font-awesome.css";
const contact = () => {
    return ( 
        <>
           <div className="jumbotron jumbotron-fluid">
                <h1 class="display-4">We'd Love to hear from you</h1>
                <p class="lead">Whether you have a question about trials,piricing, or anything else our team is ready to <br></br>
                                   answer all your queries  </p>
           </div>
           <div>
           <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                   <Accordion.Header>Piricing and plans</Accordion.Header>
                   <Accordion.Body><p>Live stream today <br></br>
                   Get started with live video, engage audiences everywhere.
                   <b>$75$56.25/month (billed annually)</b></p>
                   <p>Explore secure live streaming
                    <b>Get 25% off Vimeo Events **</b>
                   <br></br>Make stunning events and drive impact for your business.</p>
                   <p>Create a subscription channel with live <br></br>
                      Build a subscription channel and monetize your content <br></br>
                      with apps everywhere.</p>
                   </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                   <Accordion.Header>Every plan includes</Accordion.Header>
                   <Accordion.Body>
                      Full HD 1080p Live streaming <br></br>
                      Brand control for your player and apps<br></br>
                      Ad-free streaming and stream to social<br></br> 
                      Unlimited live events
                   </Accordion.Body>
               </Accordion.Item>
           </Accordion>
                   
        </div>
        <br />
        <div>
            <h4 style={{padding:"10px",backgroundColor:'whitesmoke'}}><b>You can connect us via these links</b></h4> <br />
            <a href="https://www.facebook.com/ayesha.aleem.90"> <i class="fa fa-facebook fa-4x"></i></a>
            <a href="www.linkedin.com/in/ayeshaaleem2109"> <i class="fa fa-linkedin-square fa-4x"></i></a>
            <a href="www.gmail/ayeshaaleem02@gmail.com"> <i class="fa fa-envelope fa-4x"></i></a>
        </div>
        </>
     );
}
 
export default contact;