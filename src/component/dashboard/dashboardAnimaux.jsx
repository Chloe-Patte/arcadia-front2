import React, { useState, useEffect } from 'react';

const DashboardAnimaux = (props) => {
    
    const [animal, setAnimal] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newAnimal, setNewAnimal] = useState({ nom: '', alimentation: '', sante: '' });

    useEffect(() => {
        fetch('https://arcadia-back2.onrender.com/animal/')
            .then(response => response.json())
            .then(data => setAnimal(data));
    }, []);

    const openModal = (animalId) => {
        const animalData = animal.find(animal => animal.id === animalId);
        setSelectedAnimal(animalData);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedAnimal(null);
    };

    const openUpdateModal = (animalId) => {
      const animalData = animal.find(animal => animal.id === animalId);
      setSelectedAnimal(animalData);
      setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
      setIsUpdateModalOpen(false);
      setSelectedAnimal(null);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch(`https://arcadia-back2.onrender.com/animal/${selectedAnimal.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedAnimal),
    })
        .then(response => response.json())
        .then(data => {
            const updatedAnimals = animal.map(item => item.id === data.id ? data : item);
            setAnimal(updatedAnimals);
            closeUpdateModal();
        })
        .catch(error => {
            console.error('Error updating animal:', error);
        });
};

  const openDeleteModal = (animalId) => {
    const animalData = animal.find(animal => animal.id === animalId);
    setSelectedAnimal(animalData);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedAnimal(null);
  };

  const handleDeleteSubmit = () => {
    fetch(`https://arcadia-back2.onrender.com/animal/${selectedAnimal.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                setAnimal(animal.filter(item => item.id !== selectedAnimal.id));
                closeDeleteModal();
            } else {
                console.error('Error deleting animal:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error deleting animal:', error);
        });
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setNewAnimal({ nom: '', alimentation: '', sante: '' });
  };

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const response = await fetch('http://localhost:8080/animal/upload', {
            method: 'POST',
            body: formData,
        });
        console.log(response)

        fetch('https://arcadia-back2.onrender.com/animal/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAnimal),
        })
        .then(response => response.json())
        .then(data => {
                setAnimal([...animal, data]);
                closeAddModal();
            })
        .catch(error => {
                console.error('Error adding animal:', error);
            });
    };

    return (
        <div className='flex flex-wrap'>
            <div className='w-full'>
                <div className='p-4'>
                    <h1 className='text-3xl font-bold mb-4 text-center'>Liste des Animaux du Zoo</h1>
                    <button onClick={() => setIsAddModalOpen(true)} className="bg-green-500 text-white px-4 py-2 rounded">Add Animal</button>
                    <div className='overflow-x-auto'>
                        <table className="bg-white border border-gray-300 shadow-md">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-2 px-4 border-b">Id</th>
                                    <th className="py-2 px-4 border-b">Nom</th>
                                    <th className="py-2 px-4 border-b">Alimentation</th>
                                    <th className="py-2 px-4 border-b">Santé</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {animal.map((line) => (
                                    <tr key={line.id} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b">{line.id}</td>
                                        <td className="py-2 px-4 border-b">{line.nom}</td>
                                        <td className="py-2 px-4 border-b">{line.alimentation}</td>
                                        <td className="py-2 px-4 border-b">{line.sante}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button 
                                                className="bg-jauneor text-white px-4 py-2 rounded"
                                                onClick={() => openModal(line.id)}>CONSULT</button>
                                            <button onClick={() => openUpdateModal(line.id)} className="bg-yellow-500 text-white px-4 py-2 rounded ml-2">UPDATE</button>
                                            <button onClick={() => openDeleteModal(line.id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">DELETE</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {isModalOpen && selectedAnimal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-2xl mb-4">{selectedAnimal.nom}</h2>
                        <p><strong>Naissance:</strong> {selectedAnimal.naissance}</p>
                        <p><strong>Alimentation:</strong> {selectedAnimal.alimentation}</p>
                        <p><strong>Santé:</strong> {selectedAnimal.sante}</p>
                        <p><strong>Nom Scientifique:</strong> {selectedAnimal.nomScientifique}</p>
                        <p><strong>Description Scientifique:</strong> {selectedAnimal.descriptionScientifique}</p>
                        <p><strong>Date de Vérification:</strong> {selectedAnimal.dateVerif}</p>
                        <img src={selectedAnimal.image} alt={selectedAnimal.nom} className="w-24 h-auto mt-4" />
                        <button 
                            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

          {isUpdateModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">Update Animal</h2>
                        <form onSubmit={handleUpdateSubmit}>
                            <div className="mb-1">
                                <label className="block text-gray-700">Nom</label>
                                <input
                                    type="text"
                                    value={selectedAnimal.nom}
                                    onChange={(e) => setSelectedAnimal({ ...selectedAnimal, nom: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Alimentation</label>
                                <input
                                    type="text"
                                    value={selectedAnimal.alimentation}
                                    onChange={(e) => setSelectedAnimal({ ...selectedAnimal, alimentation: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Santé</label>
                                <input
                                    type="text"
                                    value={selectedAnimal.sante}
                                    onChange={(e) => setSelectedAnimal({ ...selectedAnimal, sante: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={closeUpdateModal} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">Delete Animal</h2>
                        <p>Are you sure you want to delete {selectedAnimal.nom}?</p>
                        <div className="flex justify-end">
                            <button type="button" onClick={closeDeleteModal} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
                            <button type="button" onClick={handleDeleteSubmit} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                        </div>
                    </div>
                </div>
            )}
            {isAddModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">Add Animal</h2>
                        <form onSubmit={handleAddSubmit} enctype='multipart/form-data'>
                            <div className="mb-1">
                                <label className="block text-gray-700">Nom</label>
                                <input
                                    type="text"
                                    value={newAnimal.nom}
                                    onChange={(e) => setNewAnimal({ ...newAnimal, nom: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Naissance</label>
                                <input
                                    type="text"
                                    value={newAnimal.naissance}
                                    onChange={(e) => setNewAnimal({ ...newAnimal, naissance: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Alimentation</label>
                                <input
                                    type="text"
                                    value={newAnimal.alimentation}
                                    onChange={(e) => setNewAnimal({ ...newAnimal, alimentation: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Habitat</label>
                                <input
                                    type="text"
                                    value={newAnimal.habitat}
                                    onChange={(e) => setNewAnimal({ ...newAnimal, habitat: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Santé</label>
                                <input
                                    type="text"
                                    value={newAnimal.sante}
                                    onChange={(e) => setNewAnimal({ ...newAnimal, sante: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Nom scientifique</label>
                                <input
                                    type="text"
                                    value={newAnimal.nomScientifique}
                                    onChange={(e) => setNewAnimal({ ...newAnimal, nomScientifique: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Description scientifique</label>
                                <input
                                    type="text"
                                    value={newAnimal.descriptionScientifique}
                                    onChange={(e) => setNewAnimal({ ...newAnimal, descriptionScientifique: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Le saviez vous</label>
                                <input
                                    type="text"
                                    value={newAnimal.leSaviezVous}
                                    onChange={(e) => setNewAnimal({ ...newAnimal, leSaviezVous: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Image</label>
                                <input
                                    type="file"
                                    name='image'
                                    value={newAnimal.image}
                                    onChange={(e) => setNewAnimal({ ...newAnimal, image: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Date verif</label>
                                <input
                                    type="text"
                                    value={newAnimal.dateVerif}
                                    onChange={(e) => setNewAnimal({ ...newAnimal, dateVerif: e.target.value })}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={closeAddModal} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
                                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardAnimaux;
