document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const tambahBtn = document.getElementById('tambah');
    const cetakBtn = document.getElementById('cetak');
    const addCourseForm = document.getElementById('addCourseForm');
    const courseTableBody = document.getElementById('courseTableBody');
    const totalSKSContainer = document.getElementById('totalSKSContainer');
    const courseSelect = document.getElementById('courseSelect');
    const kodeSpan = document.getElementById('kode');
    const sksSpan = document.getElementById('sks');

    let totalSKS = 8;
    let totalCourses = 4;

    tambahBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        updateCourseInfo();
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    courseSelect.addEventListener('change', updateCourseInfo);

    function updateCourseInfo() {
        const selectedCourse = courseSelect.value.split(',');
        kodeSpan.textContent = selectedCourse[0];
        sksSpan.textContent = selectedCourse[2];
    }

    addCourseForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedCourse = courseSelect.value.split(',');
        const kode = selectedCourse[0];
        const mataKuliah = selectedCourse[1];
        const sks = parseInt(selectedCourse[2]);

        totalCourses += 1;
        totalSKS += sks;

        const newRow = `
            <tr>
                <td>${totalCourses}</td>
                <td>${kode}</td>
                <td>${mataKuliah}</td>
                <td>${sks}</td>
            </tr>
        `;
        courseTableBody.insertAdjacentHTML('beforeend', newRow);
        updateTotalSKS();
        addDeleteEventListeners();
        modal.style.display = 'none';
    });

    function updateTotalSKS() {
        totalSKSContainer.innerHTML = `
            <p>Total Matakuliah: ${totalCourses}</p>
            <p>Total SKS: ${totalSKS}</p>
        `;
    }

    function addDeleteEventListeners() {
        const hapusBtns = document.querySelectorAll('.hapusBtn');
        hapusBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const row = btn.closest('tr');
                const sks = parseInt(row.children[3].textContent);
                totalCourses -= 1;
                totalSKS -= sks;
                row.remove();
                updateTotalSKS();
                updateRowNumbers();
            });
        });
    }

    function updateRowNumbers() {
        const rows = courseTableBody.querySelectorAll('tr');
        rows.forEach((row, index) => {
            row.children[0].textContent = index + 1;
        });
    }

    addDeleteEventListeners();

    cetakBtn.addEventListener('click', () => {
        window.print();
    });
});

function closeModal() {
    const modal = document.getElementById('studyModal');
    modal.style.display = "none";
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