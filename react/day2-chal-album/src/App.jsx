import { useState } from 'react';
import style from "./App.module.scss";
import AlbumsFlex from "./components/AlbumsFlex";
import AlbumCard from "./components/AlbumCard";

function App() {
  return (
    <main className={style.main}>
      <h1 className={style.heading}>My favourite Albums</h1>
      <AlbumsFlex>
        <AlbumCard 
          title="Flower Boy"
          band="Tyler, The creator"
          rating={5}
          coverUrl="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/07/09121803/Untitled-design-2023-06-09T094746.065-1600x900.jpg"
        />
        <AlbumCard 
          title="Flower Boy2"
          band="Tyler, The creator2"
          rating={4}
          coverUrl="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/07/09121803/Untitled-design-2023-06-09T094746.065-1600x900.jpg"
        />
        <AlbumCard 
          title="Flower Boy3"
          band="Tyler, The creator3"
          rating={3}
          coverUrl="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/07/09121803/Untitled-design-2023-06-09T094746.065-1600x900.jpg"
        />
        <AlbumCard 
          title="Flower Boy4"
          band="Tyler, The creator4"
          rating={5}
          coverUrl="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/07/09121803/Untitled-design-2023-06-09T094746.065-1600x900.jpg"
        />
        <AlbumCard 
          title="Flower Boy5"
          band="Tyler, The creator5"
          rating={5}
          coverUrl="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/07/09121803/Untitled-design-2023-06-09T094746.065-1600x900.jpg"
        />
        <AlbumCard 
          title="Flower Boy6"
          band="Tyler, The creator6"
          rating={4}
          coverUrl="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/07/09121803/Untitled-design-2023-06-09T094746.065-1600x900.jpg"
        />
        <AlbumCard 
          title="Flower Boy7"
          band="Tyler, The creator7"
          rating={3}
          coverUrl="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/07/09121803/Untitled-design-2023-06-09T094746.065-1600x900.jpg"
        />
        <AlbumCard 
          title="Flower Boy8"
          band="Tyler, The creator8"
          rating={5}
          coverUrl="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/07/09121803/Untitled-design-2023-06-09T094746.065-1600x900.jpg"
        />
      </AlbumsFlex>

    </main>
  )
}

export default App
