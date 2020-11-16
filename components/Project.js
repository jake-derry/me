// pages/Project.js

const { Card } = require("react-bootstrap");

import './Project.scss';

const Project = props => 
  <div className="Project">
    <Card className="Card" bg="Secondary">
      <Card.Body>
        <Card.Title className="CardTitle">{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>;

export default Project;
