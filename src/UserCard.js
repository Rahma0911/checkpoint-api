import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const UserCard = ({id, name, username, email, address, phone}) => {
    return (
        <Card className='userCard'>
        <Card.Body className='bg'>
            <Card.Title>User {id}</Card.Title>
            <Card.Text>{name} {username}</Card.Text>
        </Card.Body>
        <ListGroup className='bg'>
            <ListGroupItem>Email: {email}</ListGroupItem>
            <ListGroupItem>Phone: {phone}</ListGroupItem>
            <ListGroupItem>Address: {address.street} {address.suite} {address.city}</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">See more</Card.Link>
        </Card.Body>
        </Card>
    )
}

export default UserCard;
