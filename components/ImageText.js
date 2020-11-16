// pages/about.js

import "./ImageText.scss";

const ImageText = props => {
  var imageClasses = "Image " + props.align;
  return <div>
    <div className={ imageClasses }>
      <img 
        src={props.imageSource}
        alt={props.imageAltText}
        width="300"
        height="300"
      />
    </div>
    <div className="Text">
      {props.children}
    </div>
  </div>};

export default ImageText;
