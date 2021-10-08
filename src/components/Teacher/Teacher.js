import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Teacher = (props) => {
    
    
    return (
        <div >
            
               <Col>
      <Card >
        <Card.Img variant="top"   src={props.teacher.img}/>
        <Card.Body>
          <Card.Title>Teacher Name: {props.teacher.name}</Card.Title>
          <Card.Text>
                    {props.teacher.speciality}
          </Card.Text>
          
         
        </Card.Body>
        
      </Card>
    </Col>
        </div>
    );
};

export default Teacher;