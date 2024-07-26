import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

const CharacterCard = ({ character }) => {
return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={character.image} />
    <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
        {character.species}
        </Card.Text>
        <Button variant="primary">Meet {character.name}</Button>
    </Card.Body>
    </Card>
);
};

export default CharacterCard;