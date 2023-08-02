// import React, { useState } from 'react'
// import { CarouselItem } from './CarouselItem';
// import chicken1 from '../../Media/chicken1.jpg';
// import chicken2 from '../../Media/chicken2.jpg';
// import chicken3 from '../../Media/chicken3.jpg';


// export const Carousel = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const items = [
//         {   
//             title: "Fried",
//             description: "blah blah",
//             icon: chicken1,
//             // icon: require("./Media/chicken1.jpg"),
//         },
//         {
//             title: "Spicey",
//             description: "blah blah",
//             icon : chicken2,
//             // icon: require("./Media/chicken2.jpg"),
//         },
//         {   
//             title: "half",
//             description: "blah blah",
//             icon : chicken3,
//             // icon: require("./Media/chicken3.jpg"),
//         },
//     ];
    
//   return (  
//     <div className = "carousel">
//         <div className='inner'
//             style={{transform: `translate:( ${activeIndex * 100})`}}>
//             {items.map((item, index) => {
                
//                     return <CarouselItem item={item} key={index}/>;
//                 })}
//         </div>
//     </div> 
//     );
        
// };



