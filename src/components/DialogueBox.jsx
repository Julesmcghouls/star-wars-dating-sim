import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const DialogueBox = ({ dialogue }) => {
return (
<Container>
    <Row>
    <Col>
        <Card>
        <Card.Body>
            <p>{dialogue}</p>
        </Card.Body>
        </Card>
    </Col>
    </Row>
</Container>
);
};

export default DialogueBox;
