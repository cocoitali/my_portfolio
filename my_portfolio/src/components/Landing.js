import React, { Component } from 'react';
import {Button, Icon} from "semantic-ui-react";
import {
    Cta
  } from "./Styled";

class Landing extends Component {
    render() {
        return (
            
            <Cta>
              <div>Hi,</div>
              <div>I'm Courtney</div> 
              <Button style={{ marginTop: "30px", marginLeft: "3%", height:"60px", width: "70%", color: "#0d98ba", fontSize: '16px'
              }}><Icon name='download'/>download my cv</Button> 
            </Cta>
           
        );
    }
}

export default Landing;
