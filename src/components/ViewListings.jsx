// src/componenets/ViewListings.js
import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebaseConfig';

const ViewListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // TODO: Fetch listings from Firestore
    const fetchListings = async () => {
      // Example data - Replace with Firestore query
      const sampleListings = [
        { id: 1, name: 'Bakery House 1', location: 'City A' },
        { id: 2, name: 'Bakery House 2', location: 'City B' },
      ];
      setListings(sampleListings);
    };

    fetchListings();
  }, []);

  return (
    <div className="container mx-auto h-screen p-4 text-gray-600 bg-white">
      <h2 className="text-2xl font-bold mb-4">Bakery Listings</h2>
      <ul className="space-y-4">
        {listings.map((listing) => (
          <li key={listing.id} className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">{listing.name}</h3>
            <p>Location: {listing.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewListings;
