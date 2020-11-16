// pages/Post.js

const { Card } = require("react-bootstrap");
import Link from "next/link";

import './Post.scss';

const Post = props => 
  <div className="Post">
    <Link href={`/posts/${props.id}`}>
      <button className="PostCardButton">
      <Card className="PostCard" bg="Secondary">
        <Card.Body>
          <Card.Title className="PostCardTitle">{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Card.Text className="PostDate">{props.date}</Card.Text>
        </Card.Body>
      </Card>
      </button>
    </Link>
  </div>;

export default Post;
