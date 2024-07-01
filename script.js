document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/places')
        .then(response => response.json())
        .then(data => {
            const placeList = document.getElementById('place-list');
            data.forEach(place => {
                const placeItem = document.createElement('div');
                placeItem.innerHTML = `<h3>${place.name}</h3><p>${place.address}</p><p>${place.contact}</p><p>${place.hours}</p>`;
                placeList.appendChild(placeItem);
            });
        });
});
