// script.js
document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.getElementById('editButton');
    const modal = document.getElementById('editModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const editForm = document.getElementById('editForm');
    const addOrganizationExperienceButton = document.getElementById('addOrganizationExperienceButton');

    editButton.onclick = function() {
        modal.style.display = 'block';
    }

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Open modal
    // btn.onclick = function() {
    //     modal.style.display = 'block';
    // }

    // Close modal
    // span.onclick = function() {
    //     modal.style.display = 'none';
    // }

    editForm.onsubmit = function(event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const nik = document.getElementById('nik').value;
        const nisn = document.getElementById('nisn').value;
        const gender = document.getElementById('gender').value;
        const birthPlace = document.getElementById('birthPlace').value;
        const birthDate = document.getElementById('birthDate').value;
        const bloodType = document.getElementById('bloodType').value;
        const height = document.getElementById('height').value;
        const weight = document.getElementById('weight').value;
        const colorBlind = document.getElementById('colorBlind').value;
        const glasses = document.getElementById('glasses').value;
        const teeth = document.getElementById('teeth').value;
        const religion = document.getElementById('religion').value;
        const maritalStatus = document.getElementById('maritalStatus').value;
        const citizenship = document.getElementById('citizenship').value;
        const houseStatus = document.getElementById('houseStatus').value;
        const province = document.getElementById('province').value;
        const city = document.getElementById('city').value;
        const address = document.getElementById('address').value;
        const subdistrict = document.getElementById('subdistrict').value;
        const district = document.getElementById('district').value;
        const postalCode = document.getElementById('postalCode').value;
        const country = document.getElementById('country').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const phoneOwnership = document.getElementById('phoneOwnership').value;
        const cardSupport = document.getElementById('cardSupport').value;
        const expenseRelationship = document.getElementById('expenseRelationship').value;
        const sourceOfFunds = document.getElementById('sourceOfFunds').value;
        const scholarshipSource = document.getElementById('scholarshipSource').value;
        const numberOfSiblings = document.getElementById('numberOfSiblings').value;
        const employmentStatus = document.getElementById('employmentStatus').value;
        const insuranceNumber = document.getElementById('insuranceNumber').value;
        const hobbies = document.getElementById('hobbies').value;
        const sourceOfKnowledge = document.getElementById('sourceOfKnowledge').value;
        const organizationPlace = document.getElementById('organizationPlace').value;
        const organizationExperience = document.getElementById('organizationExperience').value;


        // Update table
        document.getElementById('displayName').innerText = name;
        document.getElementById('displayNik').innerText = nik;
        document.getElementById('displayNisn').innerText = nisn;
        document.getElementById('displayGender').innerText = gender;
        document.getElementById('displayBirthPlace').innerText = birthPlace;
        document.getElementById('displayBirthDate').innerText = new Date(birthDate).toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        document.getElementById('displayBloodType').innerText = bloodType;
        document.getElementById('displayHeight').innerText = height + ' cm';
        document.getElementById('displayWeight').innerText = weight + ' kg';
        document.getElementById('displayColorBlind').innerText = colorBlind;
        document.getElementById('displayGlasses').innerText = glasses;
        document.getElementById('displayTeeth').innerText = teeth;
        document.getElementById('displayReligion').innerText = religion;
        document.getElementById('displayMaritalStatus').innerText = maritalStatus;
        document.getElementById('displayCitizenship').innerText = citizenship;
        document.getElementById('displayHouseStatus').innerText = houseStatus;
        document.getElementById('displayProvince').innerText = province;
        document.getElementById('displayCity').innerText = city;
        document.getElementById('displayAddress').innerText = address;
        document.getElementById('displaySubdistrict').innerText = subdistrict;
        document.getElementById('displayDistrict').innerText = district;
        document.getElementById('displayPostalCode').innerText = postalCode;
        document.getElementById('displayCountry').innerText = country;
        document.getElementById('displayEmail').innerText = email;
        document.getElementById('displayPhone').innerText = phone;
        document.getElementById('displayPhoneOwnership').innerText = phoneOwnership;
        document.getElementById('displayCardSupport').innerText = cardSupport;
        // Update displayed data
        document.getElementById('displayExpenseRelationship').innerText = expenseRelationship;
        document.getElementById('displaySourceOfFunds').innerText = sourceOfFunds;
        document.getElementById('displayScholarshipSource').innerText = scholarshipSource;
        document.getElementById('displayNumberOfSiblings').innerText = numberOfSiblings;
        document.getElementById('displayEmploymentStatus').innerText = employmentStatus;
        document.getElementById('displayInsuranceNumber').innerText = insuranceNumber;
        document.getElementById('displayHobbies').innerText = hobbies;
        document.getElementById('displaySourceOfKnowledge').innerText = sourceOfKnowledge;
        // Add new organization experience to the table
        const table = document.getElementById('organizationExperienceTable');
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.innerText = table.rows.length;
        cell2.innerText = organizationPlace;
        cell3.innerText = organizationExperience;

        // Close the modal after saving data
        modal.style.display = 'none';
    }
});

// Add new row to the organization experience table
addOrganizationExperienceButton.onclick = function() {
    const table = document.getElementById('organizationExperienceTable');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerText = table.rows.length;
    cell2.innerText = document.getElementById('organizationPlace').value;
    cell3.innerText = document.getElementById('organizationExperience').value;
}

let burger = document.querySelector('.burger');
		let close = document.querySelector('.close');
		let sidenav = document.querySelector('#sidenav');

		// Burger click function
		burger.addEventListener('click', function () {
			sidenav.classList.add('active');
		});
		// Close click function
		close.addEventListener('click', function () {
			sidenav.classList.remove('active');
		});
    
// navbar bar
document.addEventListener("DOMContentLoaded", (event) => {
	const profileLink = document.getElementById("profile-link");
	const jatuh = document.getElementById("jatuh");
  
	profileLink.addEventListener("click", (event) => {
	  event.preventDefault();
	  const isjatuhVisible = jatuh.style.display === "block";
	  jatuh.style.display = isjatuhVisible ? "none" : "block";
	});
  
	// Close the jatuh if user clicks outside of it
	document.addEventListener("click", (event) => {
	  if (
		!profileLink.contains(event.target) &&
		!jatuh.contains(event.target)
	  ) {
		jatuh.style.display = "none";
	  }
	});
  });
  
//   window.onclick = function(event) {
// 	if (event.target == sidenav) {
// 		sidenav.style.display = 'none';
// 	}
// }

// function openSidebar() {
//     document.getElementById("sidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }

// function closeSidebar() {
//     document.getElementById("sidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }




