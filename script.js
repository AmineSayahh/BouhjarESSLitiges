// Define variables to hold the donation count and total amount
let donationCount = 0; // Example initial count
let totalAmount = 0; // Example initial total amount

// Function to update the donation count and total amount
function updateDonationStats() {
    document.getElementById('donor-count').textContent = donationCount;
    document.getElementById('total-amount').textContent = totalAmount;

}


// Fonction pour démarrer la lecture de la chanson
function playBackgroundMusic() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play(); // Lancement de la lecture
}


// Function to add a new donation
function addDonation(name, amount) {
    // Increment donation count
    donationCount++;
    // Add amount to total
    totalAmount += amount;
    // Update UI
    updateDonationStats();
    // Add new donor to the list
    const donorList = document.getElementById('donor-list');
    const newDonation = document.createElement('li');
    newDonation.textContent = ` ${name} - ${amount} دينار`;
    donorList.appendChild(newDonation);
}

// Update the UI with initial values
updateDonationStats();

// Example usage:
// Add a new donation
addDonation('نضال العاشق', 200);
addDonation('عبد الله الصياح', 130);
addDonation('رائد الديماسي', 100); // Example donation
addDonation('علي الديماسي', 100);
addDonation('إلياس بن يوسف', 100);
addDonation('نبيل منصور', 100);
addDonation('يسري بوكذابة', 100);
addDonation('فارس الصياح', 100);
addDonation('شادي إسماعيل الحجري', 100);
addDonation('سامي بن عمر', 100);
addDonation('حمزة بوزيد', 100);
addDonation('محمد طاهر العاشق', 100);
addDonation('صلاح شطير', 100);
addDonation('ياسر بوصاع', 100);
addDonation('محمد أمين الصياح', 50);
addDonation(' بوكذابة عمر ', 50);
addDonation('محمد يزيد الديماسي', 50);
addDonation('محمد أمين الفقيه', 50);