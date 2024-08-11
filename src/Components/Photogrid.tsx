import React, { useState, useEffect } from 'react';
import { fetchPhotosByCategory } from '../Services/ApiServices';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export interface PhotoGridProps {
  category: string;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ category }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const newPhotos = await fetchPhotosByCategory(category);
      setPhotos(newPhotos);
      setLoading(false);
    };

    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, [category]);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {loading ? (
        Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <Skeleton height="100%" />
          </div>
        ))
      ) : (
        photos.map((photo, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img
              src={photo}
              alt={`Category ${category} ${index}`}
              className="w-full h-full object-cover rounded-lg"
              style={{ maxHeight: '150px' }}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default PhotoGrid;
