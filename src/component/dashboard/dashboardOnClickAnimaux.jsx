import React, { useEffect, useState } from 'react';

const DashboardOnClickAnimaux = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await fetch('/animals'); 
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAnimals(data);
    } catch (error) {
      console.error("There was an error fetching the animals from MongoDB!", error);
    }
  };

  return (
    <div>
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <div className='p-4'>
            <h1 className='text-3xl font-bold mb-4 text-center'>Statistiques animaux</h1>
              <div className='overflow-x-auto'>
                        <table className="bg-white border border-gray-300 shadow-md">
                            <thead className="bg-gray-200">
                                <tr >
                                    <th className="py-2 px-4 border-b">Id</th>
                                    <th className="py-2 px-4 border-b">Nom</th>
                                    <th className="py-2 px-4 border-b">Statistiques</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr key={animals._id} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b">{animals._id}</td>
                                        <td className="py-2 px-4 border-b">{animals.nom}</td>
                                        <td className="py-2 px-4 border-b">{animals.onClick}</td>
                                    </tr>
                            </tbody>
                        </table>
              </div>
          </div>
        </div>
      </div>
    </div>

  );

};

export default DashboardOnClickAnimaux;