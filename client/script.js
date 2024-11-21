async function loadPharmacies() {
    const response = await fetch('/api/pharmacies');
    const pharmacies = await response.json();
    const container = document.getElementById('pharmacies');
    pharmacies.forEach((pharmacy) => {
        const div = document.createElement('div');
        div.textContent = `${pharmacy.name} - ${pharmacy.street}`;
        container.appendChild(div);
    });
}

loadPharmacies();
