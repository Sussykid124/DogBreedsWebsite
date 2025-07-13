const breeds = [
    { name: "Golden Retriever", description: "Friendly and intelligent." },
    { name: "German Shepherd", description: "Loyal and courageous." },
    { name: "Bulldog", description: "Calm and courageous." },
    { name: "Beagle", description: "Curious and merry." },
    { name: "Poodle", description: "Smart and active." }
];

const breedsSection = document.getElementById('breeds');
const searchInput = document.getElementById('search');

function displayBreeds() {
    breedsSection.innerHTML = '';
    breeds.forEach(breed => {
        const breedCard = document.createElement('div');
        breedCard.className = 'breed-card';
        breedCard.innerHTML = `
            <h3>${breed.name}</h3>
            <p>${breed.description}</p>
        `;
        breedCard.addEventListener('click', () => {
            alert(`You clicked on ${breed.name}`);
        });
        breedsSection.appendChild(breedCard);
    });
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBreeds = breeds.filter(breed => breed.name.toLowerCase().includes(searchTerm));
    breedsSection.innerHTML = '';
    filteredBreeds.forEach(breed => {
        const breedCard = document.createElement('div');
        breedCard.className = 'breed-card';
        breedCard.innerHTML = `
            <h3>${breed.name}</h3>
            <p>${breed.description}</p>
        `;
        breedCard.addEventListener('click', () => {
            alert(`You clicked on ${breed.name}`);
        });
        breedsSection.appendChild(breedCard);
    });
});

displayBreeds();