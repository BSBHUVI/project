import React from 'react'
import video from '../video/farm.mp4'

function AboutFarmers() {
  return (
    <>
     <h1 style={{marginTop:"4rem",textAlign:"center",color:"black",fontWeight:"900",fontSize:"2rem"}}>About Farmers</h1>
    <div style={{ padding: '20px',height:"50vh",width:"100%",display:"flex",justifyContent:"center",flexDirection:'column',alignItems:"center" }}>
   
    <video style={{width:"75%",height:"100%"}} autoPlay controls muted>
  <source src={video} type="video/mp4"/>

  Your browser does not support the video tag.
</video>
    </div>
    <p style={{color:"black",padding:"1rem",textAlign:"justify",wordSpacing:"0.4rem",margin:"1rem"}}>Farmers play a crucial role in society by producing the food that we eat. Without farmers, we would not have the fruits, vegetables, grains, and other agricultural products that make up a significant part of our diet. In addition to providing us with nourishment, farming also has a number of other important impacts on our lives and communities.

One of the main reasons why farmers are so important is that they ensure a stable and reliable food supply. In many parts of the world, farmers are responsible for producing the majority of the food that people consume, and without them, there would be significant shortages and food insecurity. Farmers also contribute to the local economy by providing jobs and supporting small businesses in rural areas.

In addition to their role in food production, farmers also play a vital role in the health of the environment. Sustainable farming practices can help to preserve natural resources, such as water and soil, and reduce the negative impacts of agriculture on the environment. Farmers can also help to mitigate climate change by using techniques such as crop rotation and cover cropping, which can reduce greenhouse gas emissions and sequester carbon in the soil.

Overall, the importance of farmers cannot be overstated. They are essential to the well-being of our communities and the health of our planet, and it is important that we support and appreciate the important work that they do.</p>
    </>
  )
}

export default AboutFarmers
