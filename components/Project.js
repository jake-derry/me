// pages/Project.js

const { Card } = require("react-bootstrap");
import Link from "next/link";

import './Project.scss';

const Project = props => 
  <div className="Project">
    <Link href={`/projects/${props.id}`}>
      <button className="CardButton">
      <Card className="Card" bg="Secondary">
        <Card.Body>
          <Card.Title className="CardTitle">{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
      </button>
    </Link>
  </div>;

export default Project;
