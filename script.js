// Define variables to hold the donation count and total amount
let donationCount = 0; // Example initial count
let totalAmount = 0; // Example initial total amount

// Function to update the donation count and total amount
function updateDonationStats() {
  document.getElementById("donor-count").textContent = donationCount;
  document.getElementById("total-amount").textContent = totalAmount;
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
  const donorList = document.getElementById("donor-list");
  const newDonation = document.createElement("li");
  newDonation.textContent = ` ${name} - ${amount} دينار`;
  donorList.appendChild(newDonation);
}

// Update the UI with initial values
updateDonationStats();

// Example usage:
// Add a new donation

addDonation("ضياء المحمدي", 461);
addDonation("ياسين العاشق", 250);
addDonation("نضال العاشق", 200);
addDonation("وجدي بوراوي", 160);
addDonation("عمر رجب", 150);
addDonation("عبد الله الصياح", 130);
addDonation("مروان شمام", 130);
addDonation("رائد الديماسي", 100); // Example donation
addDonation("علي الديماسي", 100);
addDonation("إلياس بن يوسف", 100);
addDonation("نبيل منصور", 100);
addDonation("يسري بوكذابة", 100);
addDonation("فارس الصياح", 100);
addDonation("شادي إسماعيل الحجري", 100);
addDonation("سامي بن عمر", 100);
addDonation("حمزة بوزيد", 100);
addDonation("محمد طاهر العاشق", 100);
addDonation("صلاح شطير", 100);
addDonation("ياسر بوصاع", 100);
addDonation("أيمن الصياح", 100);
addDonation("فرج العبيدي", 100);
addDonation("نوري الصالحي", 80);
addDonation("ياسين السويبقي ", 80);
addDonation("محمد عزيز السويبقي", 60);
addDonation("محمد أمين الصياح", 50);
addDonation(" بوكذابة عمر ", 50);
addDonation("محمد يزيد الديماسي", 50);
addDonation("محمد أمين الفقيه", 50);
addDonation("كريم بوزيد", 50);
addDonation("نعيم بوزيد", 50);
addDonation("بوزيد نور الدين ", 50);
addDonation("محمد عزيز الزغيدي", 50);
addDonation("محمد بن الناصر بوزيد ", 50);
addDonation("ميرنا وميار شطير ", 50);
addDonation("عمر شطير", 50);
addDonation("زبير بوزيد", 50);
addDonation("خليفة قريديح ", 50);
addDonation("وجيه معاوي", 50);
addDonation("نوفل بن خليفة", 40);
addDonation("مروان الصالحي", 30);
addDonation("حلمي عياد", 30);
addDonation("حافظ قريديح", 20);
addDonation("شادي بوزيد", 20);
addDonation("محمد ياسين بن يوسف", 20);
addDonation("ياسر بوزيد", 20);
addDonation("محمود بن فرج بوزيد", 20);
addDonation("المنصف شواري ", 10);

