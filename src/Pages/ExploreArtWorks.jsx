import React from 'react';
import { useLoaderData } from 'react-router';
import ArtworkCard from '../Components/ArtWorkCard';

const ExploreArtWorks = () => {
    const artworks = useLoaderData();
    // console.log(artworks)
    return (
       <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Artworks</h2>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork._id} artwork={artwork} />
        ))}
      </div>
    </div>
    );
};

export default ExploreArtWorks;