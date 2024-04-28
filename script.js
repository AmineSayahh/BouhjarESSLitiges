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
addDonation("مقهى الزيتونة", 240);
addDonation("نضال العاشق", 200);
addDonation("قصي عياد", 200);
addDonation("فهد العبيدي", 200);
addDonation("وجدي بوراوي", 160);
addDonation("عمر رجب", 150);
addDonation("عبد الله الصياح", 130);
addDonation("مروان شمام", 130);
addDonation("شادي إسماعيل الحجري", 120);
addDonation("محمد أمين عبد الرحمان", 110);
addDonation("رائد الديماسي", 100); // Example donation
addDonation("علي الديماسي", 100);
addDonation("إلياس بن يوسف", 100);
addDonation("نبيل منصور", 100);
addDonation("يسري بوكذابة", 100);
addDonation("فارس الصياح", 100);
addDonation("سامي بن عمر", 100);
addDonation("حمزة بوزيد", 100);
addDonation("محمد طاهر العاشق", 100);
addDonation("صلاح شطير", 100);
addDonation("ياسر بوصاع", 100);
addDonation("أيمن الصياح", 100);
addDonation("فرج العبيدي", 100);
addDonation("رائف بوزيد", 100);
addDonation("محمد أيمن بن يوسف", 100);
addDonation("جهاد بن حسن", 100);
addDonation("حيدر العاشق", 100);
addDonation("عمار شطير", 100);
addDonation("أسامة بن عائشة", 100);
addDonation("الصحبي شواري", 90);
addDonation("نوري الصالحي", 80);
addDonation("ياسين السويبقي ", 80);
addDonation("محمد عزيز السويبقي", 60);
addDonation("أسامة الصياح", 60);
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
addDonation("نبيل الصياح", 50);
addDonation("توفيق العاشق", 50);
addDonation("يوسف الديماسي", 50);
addDonation("أنيس بن عمر", 50);
addDonation("الطاهر الجلولي ( العراقي )", 50);
addDonation("كريم بن يوسف", 50);
addDonation("ايتواليست", 50);
addDonation("إيناس بن يوسف", 50);
addDonation("وليد و عائشة العبيدي", 50);
addDonation("زهير كريم", 50);
addDonation("زياد هنية", 50);
addDonation("نوفل بن خليفة", 40);
addDonation("عبد الحميد العاشق", 40);
addDonation("مروان الصالحي", 30);
addDonation("حلمي عياد", 30);
addDonation("صالح الصياح", 30);
addDonation("غيث بوكذابة", 30);
addDonation("صديق الفقيه", 30);
addDonation("نور الهدى بن خليفة", 30);
addDonation("حافظ قريديح", 20);
addDonation("شادي بوزيد", 20);
addDonation("محمد ياسين بن يوسف", 20);
addDonation("ياسر بوزيد", 20);
addDonation("محمود بن فرج بوزيد", 20);
addDonation("محمد الحبيب بوزيد", 20);
addDonation("حيان العاشق", 20);
addDonation("وجدي شواري", 20);
addDonation("المنصف شواري ", 10);
addDonation("يزيد بن يوسف", 10);



