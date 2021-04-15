import classes from "./Jackets.module.css";

import video from "../../video/Stork.mp4"

const Jackets = () => {

  return (
    <div className={classes.Jackets}>
      <h1>Jackets</h1>
      <p> 
      
Women's Coats & Jackets
There’s no need to tone down a great outfit with a dull jacket. Step out in style and turn heads with our edit of coats and jackets for women. Make a statement with your outerwear with bold colours and patterns from COLLUSION, or show off your jeans with a women’s cropped jacket from New Look. Take your everyday look to the next level with a long jacket and explore ASOS DESIGN belted trench coats. From macs and parkas to puffer jackets    
</p>
  
 <video src={video} controls onPlay look></video>
 
    </div>
  );
}

export default Jackets; 