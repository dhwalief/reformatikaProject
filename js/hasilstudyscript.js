// document.addEventListener("DOMContentLoaded", function() {
//     const semesterChartCtx = document.getElementById('semesterChart').getContext('2d');
//     const cumulativeChartCtx = document.getElementById('cumulativeChart').getContext('2d');

//     const dataSemester = {
//         labels: ['Gasal 2023/2024', 'Genap 2023/2024'],
//         datasets: [{
//             label: 'IP Semester',
//             data: [3.95, 3.5],
//             backgroundColor: ['#4CAF50', '#4CAF50'],
//             borderColor: '#0056b3',
//             borderWidth: 1
//         }]
//     };

//     const dataCumulative = {
//         labels: ['Gasal 2023/2024', 'Genap 2023/2024'],
//         datasets: [{
//             label: 'IP Komulatif',
//             data: [3.95, 3.95],
//             backgroundColor: ['#4CAF50', '#4CAF50'],
//             borderColor: '#0056b3',
//             borderWidth: 1
//         }]
//     };

//     const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 max: 4
//             }
//         },
//         plugins: {
//             tooltip: {
//                 enabled: true
//             }
//         }
//     };

//     const semesterChart = new Chart(semesterChartCtx, {
//         type: 'bar',
//         data: dataSemester,
//         options: options
//     });

//     const cumulativeChart = new Chart(cumulativeChartCtx, {
//         type: 'bar',
//         data: dataCumulative,
//         options: options
//     });

//     document.getElementById('lihat').addEventListener('click', function() {
//         // This is where you can add functionality to update the charts based on the selected semester
//         alert('Fitur belum tersedia.');
//     });
// });
// Setup Chart.js
// Setup Chart.js
// Setup Chart.js
// Setup Chart.js
// Setup Chart.js
const ipSemesterCtx = document.getElementById('ipSemesterChart').getContext('2d');
const ipKumulatifCtx = document.getElementById('ipKumulatifChart').getContext('2d');

const ipSemesterChart = new Chart(ipSemesterCtx, {
    type: 'bar',
    data: {
        labels: ['Gasal 2023/2024', 'Genap 2023/2024', 'Gasal 2024/2025'],
        datasets: [{
            label: 'IP Semester',
            data: [3.95, 3.52, 0.00],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 4,
                ticks: {
                    stepSize: 0.5,
                    callback: function(value) {
                        return value.toFixed(1); // Ensure one decimal point
                    }
                }
            }
        }
    }
});

const ipKumulatifChart = new Chart(ipKumulatifCtx, {
    type: 'line',
    data: {
        labels: ['Gasal 2023/2024', 'Genap 2023/2024', 'Gasal 2024/2025'],
        datasets: [{
            label: 'IP Komulatif',
            data: [3.95, 3.76, 3.76],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 4,
                ticks: {
                    stepSize: 0.5,
                    callback: function(value) {
                        return value.toFixed(1); // Ensure one decimal point
                    }
                }
            }
        }
    }
});

function showResults() {
    const selectedSemester = document.getElementById('semester').value;
    const studyResultsDiv = document.getElementById('studyResults');
    const modal = document.getElementById('studyModal');
    
    if (selectedSemester === 'genap-2023-2024') {
        studyResultsDiv.innerHTML = `
            <table>
                <tr>
                    <th>Nama</th>
                    <td>GIFARI RAHMAN</td>
                </tr>
                <tr>
                    <th>NIM</th>
                    <td>60200123016</td>
                </tr>
                <tr>
                    <th>Program Studi</th>
                    <td>TEKNIK INFORMATIKA</td>
                </tr>
                <tr>
                    <th>Semester</th>
                    <td>Genap 2023/2024</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>NO</th>
                    <th>KODE</th>
                    <th>MATA KULIAH</th>
                    <th>KELAS</th>
                    <th>W/P</th>
                    <th>SKS</th>
                    <th>NILAI</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>TIN130006</td>
                    <td>Elektronika Digital*</td>
                    <td>B</td>
                    <td>W</td>
                    <td>3</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>TIN130005</td>
                    <td>Fisika Terapan*</td>
                    <td>B</td>
                    <td>W</td>
                    <td>3</td>
                    <td>B+</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>UIN020003</td>
                    <td>Ilmu Fikih</td>
                    <td>B</td>
                    <td>W</td>
                    <td>2</td>
                    <td>B+</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>UIN020002</td>
                    <td>Ilmu Hadis</td>
                    <td>B</td>
                    <td>W</td>
                    <td>2</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>TIN130007</td>
                    <td>Matematika Diskrit</td>
                    <td>B</td>
                    <td>W</td>
                    <td>3</td>
                    <td>B+</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>TIN130009</td>
                    <td>Pemrograman Terstruktur*</td>
                    <td>B</td>
                    <td>W</td>
                    <td>3</td>
                    <td>B-</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>UIN020009</td>
                    <td>Sejarah Peradaban Islam</td>
                    <td>B</td>
                    <td>W</td>
                    <td>2</td>
                    <td>B+</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>TIN130008</td>
                    <td>Sistem Operasi Komputer*</td>
                    <td>B</td>
                    <td>W</td>
                    <td>3</td>
                    <td>B</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>Jumlah SKS diambil</th>
                    <td>21</td>
                </tr>
                <tr>
                    <th>Jumlah mata kuliah diambil</th>
                    <td>8</td>
                </tr>
                <tr>
                    <th>IP Semester</th>
                    <td>3.52</td>
                </tr>
                <tr>
                    <th>Catatan KRS</th>
                    <td></td>
                </tr>
            </table>
            <button onclick="printPage()">Cetak</button>
        `;
    } else {
        studyResultsDiv.innerHTML = `<p>Data untuk semester tersebut belum tersedia.</p>`;
    }

    // Tampilkan modal
    modal.style.display = "block";
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

function closeModal() {
    const modal = document.getElementById('studyModal');
    modal.style.display = "none";
}

function printPage() {
    window.print();
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('studyModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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