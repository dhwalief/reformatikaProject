document.addEventListener('DOMContentLoaded', () => {
    const table_headings = document.querySelectorAll('table th'),
          table_rows = document.querySelectorAll('table tbody tr');

    table_headings.forEach((head, i) => {
        let sort_asc = true;
        head.onclick = () => {
            table_headings.forEach(head => head.classList.remove('active'));
            head.classList.add('active');

            document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
            table_rows.forEach(row => {
                row.querySelectorAll('td')[i].classList.add('active');
            });

            sortTable(i);  // Gunakan i sebagai columnIndex untuk sortTable
        };
    });

    function sortTable(columnIndex) {
        const table = document.getElementById('dataTable');
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.rows);
        const isAscending = tbody.getAttribute('data-sort-order') === 'asc';
        
        rows.sort((a, b) => {
            const cellA = a.cells[columnIndex].textContent.trim();
            const cellB = b.cells[columnIndex].textContent.trim();
            
            if (!isNaN(cellA) && !isNaN(cellB)) {
                return isAscending ? cellA - cellB : cellB - cellA;
            }
            
            return isAscending 
                ? cellA.localeCompare(cellB) 
                : cellB.localeCompare(cellA);
        });
        
        tbody.setAttribute('data-sort-order', isAscending ? 'desc' : 'asc');
        
        rows.forEach(row => tbody.appendChild(row));
    }

    function searchTable() {
        const input = document.getElementById('searchInput');
        const filter = input.value.toLowerCase();
        const table = document.getElementById('dataTable');
        const tbody = table.querySelector('tbody');
        const rows = tbody.getElementsByTagName('tr');
        
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            let match = false;
            for (let j = 0; j < cells.length; j++) {
                if (cells[j]) {
                    if (cells[j].textContent.toLowerCase().indexOf(filter) > -1) {
                        match = true;
                        break;
                    }
                }
            }
            rows[i].style.display = match ? '' : 'none';
        }
    }

    window.searchTable = searchTable; // Menambahkan searchTable ke window agar bisa diakses di onkeyup
});



const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let selectedYear = currentYear;

function displayYear() {
    const yearDisplay = document.getElementById('year-display');
    yearDisplay.textContent = selectedYear;
}

function updateButtons() {
    const nextBtn = document.getElementById('next-year-btn');
    if (selectedYear >= currentYear) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

document.getElementById('prev-year-btn').addEventListener('click', () => {
    selectedYear--;
    data = getDataByYear(selectedYear);
    displayYear();
    displayTable(data, currentPage);
    updateButtons();
});

document.getElementById('next-year-btn').addEventListener('click', () => {
    if (selectedYear < currentYear) {
        selectedYear++;
        data = getDataByYear(selectedYear);
        displayYear();
        displayTable(data, currentPage);
        updateButtons();
    }
});

// Data untuk beberapa tahun
let data2023 = [
    { id: 1, name: "Rapat Kerja 1", detail: "Selesai", date: "2023-01-01" },
    { id: 2, name: "Rapat Kerja 2", detail: "Ditunda", date: "2023-02-15" },
    { id: 3, name: "Rapat Kerja 3", detail: "Selesai", date: "2023-01-01" },
    { id: 4, name: "Rapat", detail: "Ditunda", date: "2023-02-15" },
    { id: 5, name: "Orientasi", detail: "Selesai", date: "2023-01-01" },
    { id: 6, name: "Rapat", detail: "Ditunda", date: "2023-02-15" },
    { id: 7, name: "Futsal", detail: "Selesai", date: "2023-01-01" },
    { id: 8, name: "Rapat", detail: "Ditunda", date: "2023-02-15" },
    { id: 9, name: "Galdan", detail: "Selesai", date: "2023-01-01" },
    { id: 10, name: "Nobar", detail: "Ditunda", date: "2023-02-15" },
    { id: 11, name: "Musyawarah", detail: "Selesai", date: "2023-01-01" },
    { id: 12, name: "Rapat", detail: "Ditunda", date: "2023-02-15" },
    { id: 13, name: "Gotong royong", detail: "Selesai", date: "2023-01-01" },
    { id: 14, name: "Rapat", detail: "Ditunda", date: "2023-02-15" },
    { id: 15, name: "Seminar", detail: "Selesai", date: "2023-01-01" },
    { id: 16, name: "Rapat", detail: "Ditunda", date: "2023-02-15" },
    // ... data lainnya untuk tahun 2023
];

let data2024 = [
    { id: 1, name: "Musyawarah", detail: "Selesai", date: "2024-01-01" },
    { id: 2, name: "Rapat", detail: "Ditunda", date: "2024-02-15" },
    { id: 3, name: "Seminar", detail: "Selesai", date: "2024-01-01" },
    { id: 4, name: "Rapat", detail: "Ditunda", date: "2024-02-15" },
    { id: 5, name: "Orientasi", detail: "Selesai", date: "2024-01-01" },
    { id: 6, name: "Rapat", detail: "Ditunda", date: "2024-02-15" },
    { id: 7, name: "Futsal", detail: "Selesai", date: "2024-01-01" },
    { id: 8, name: "Rapat", detail: "Ditunda", date: "2024-02-15" },
    { id: 9, name: "Galdan", detail: "Selesai", date: "2024-01-01" },
    { id: 10, name: "Nobar", detail: "Ditunda", date: "2024-02-15" },
    { id: 11, name: "Musyawarah", detail: "Selesai", date: "2024-01-01" },
    { id: 12, name: "Rapat", detail: "Ditunda", date: "2024-02-15" },
    { id: 13, name: "Gotong royong", detail: "Selesai", date: "2024-01-01" },
    { id: 14, name: "Rapat", detail: "Ditunda", date: "2024-02-15" },
    { id: 15, name: "Seminar", detail: "Selesai", date: "2024-01-01" },
    { id: 16, name: "Rapat", detail: "Ditunda", date: "2024-02-15" },
    // ... data lainnya untuk tahun 2024
];

let data2022 = [
    { id: 1, name: "Musyawarah", detail: "Selesai", date: "2022-01-01" },
    { id: 2, name: "Rapat", detail: "Ditunda", date: "2022-02-15" },
    { id: 3, name: "Seminar", detail: "Selesai", date: "2022-01-01" },
    { id: 4, name: "Rapat", detail: "Ditunda", date: "2022-02-15" },
    { id: 5, name: "Orientasi", detail: "Selesai", date: "2022-01-01" },
    { id: 6, name: "Rapat", detail: "Ditunda", date: "2022-02-15" },
    { id: 7, name: "Futsal", detail: "Selesai", date: "2022-01-01" },
    { id: 8, name: "Rapat", detail: "Ditunda", date: "2022-02-15" },
    { id: 9, name: "Galdan", detail: "Selesai", date: "2022-01-01" },
    { id: 10, name: "Nobar", detail: "Ditunda", date: "2022-02-15" },
    { id: 11, name: "Musyawarah", detail: "Selesai", date: "2022-01-01" },
    { id: 12, name: "Rapat", detail: "Ditunda", date: "2022-02-15" },
    { id: 13, name: "Gotong royong", detail: "Selesai", date: "2022-01-01" },
    { id: 14, name: "Rapat", detail: "Ditunda", date: "2022-02-15" },
    { id: 15, name: "Seminar", detail: "Selesai", date: "2022-01-01" },
    { id: 16, name: "Rapat", detail: "Ditunda", date: "2022-02-15" },
    // ... data lainnya untuk tahun 2022
];

let data2021 = [
    { id: 1, name: "Musyawarah", detail: "Selesai", date: "2021-01-01" },
    { id: 2, name: "Rapat", detail: "Ditunda", date: "2021-02-15" },
    { id: 3, name: "Seminar", detail: "Selesai", date: "2021-01-01" },
    { id: 4, name: "Rapat", detail: "Ditunda", date: "2021-02-15" },
    { id: 5, name: "Orientasi", detail: "Selesai", date: "2021-01-01" },
    { id: 6, name: "Rapat", detail: "Ditunda", date: "2021-02-15" },
    { id: 7, name: "Futsal", detail: "Selesai", date: "2021-01-01" },
    { id: 8, name: "Rapat", detail: "Ditunda", date: "2021-02-15" },
    { id: 9, name: "Galdan", detail: "Selesai", date: "2021-01-01" },
    { id: 10, name: "Nobar", detail: "Ditunda", date: "2021-02-15" },
    { id: 11, name: "Musyawarah", detail: "Selesai", date: "2021-01-01" },
    { id: 12, name: "Rapat", detail: "Ditunda", date: "2021-02-15" },
    { id: 13, name: "Gotong royong", detail: "Selesai", date: "2021-01-01" },
    { id: 14, name: "Rapat", detail: "Ditunda", date: "2021-02-15" },
    { id: 15, name: "Seminar", detail: "Selesai", date: "2021-01-01" },
    { id: 16, name: "Rapat", detail: "Ditunda", date: "2021-02-15" },
    // ... data lainnya untuk tahun 2022
];

let data2020 = [
    { id: 1, name: "Musyawarah", detail: "Selesai", date: "2020-01-01" },
    { id: 2, name: "Rapat", detail: "Ditunda", date: "2020-02-15" },
    { id: 3, name: "Seminar", detail: "Selesai", date: "2020-01-01" },
    { id: 4, name: "Rapat", detail: "Ditunda", date: "2020-02-15" },
    { id: 5, name: "Orientasi", detail: "Selesai", date: "2020-01-01" },
    { id: 6, name: "Rapat", detail: "Ditunda", date: "2020-02-15" },
    { id: 7, name: "Futsal", detail: "Selesai", date: "2020-01-01" },
    { id: 8, name: "Rapat", detail: "Ditunda", date: "2020-02-15" },
    { id: 9, name: "Galdan", detail: "Selesai", date: "2020-01-01" },
    { id: 10, name: "Nobar", detail: "Ditunda", date: "2020-02-15" },
    { id: 11, name: "Musyawarah", detail: "Selesai", date: "2020-01-01" },
    { id: 12, name: "Rapat", detail: "Ditunda", date: "2020-02-15" },
    { id: 13, name: "Gotong royong", detail: "Selesai", date: "2020-01-01" },
    { id: 14, name: "Rapat", detail: "Ditunda", date: "2020-02-15" },
    { id: 15, name: "Seminar", detail: "Selesai", date: "2020-01-01" },
    { id: 16, name: "Rapat", detail: "Ditunda", date: "2020-02-15" },
    // ... data lainnya untuk tahun 2022
];

// ... tambahkan data untuk tahun lainnya jika diperlukan

let data = getDataByYear(selectedYear);

function getDataByYear(year) {
    switch(year) {
        case 2020:
            return data2020;
        case 2021:
            return data2021;
        case 2022:
            return data2022;
        case 2023:
            return data2023;
        case 2024:
            return data2024;
        case 2025:
            return data2025;
        // tambahkan kasus untuk tahun lainnya jika diperlukan
        default:
            return [];
    }
}

let currentPage = 1;
const rowsPerPage = 5;

function displayTable(data, page) {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = page * rowsPerPage;
    const displayData = data.slice(startIndex, endIndex);

    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    displayData.forEach(row => {
        const tr = document.createElement('tr');
        let statusClass = "";
        switch(row.detail) {
            case "Selesai":
                statusClass = "status-selesai";
                break;
            case "Ditunda":
                statusClass = "status-ditunda";
                break;
            case "Dibatalkan":
                statusClass = "status-dibatalkan";
                break;
            case "Akan Berlangsung":
                statusClass = "status-akan-berlangsung";
                break;
        }

        // Tambahkan logika untuk memeriksa tahun dan menghilangkan tombol aksi
        const rowYear = new Date(row.date).getFullYear();
        const showActionButtons = rowYear >= currentYear;
        const actionButtons = showActionButtons ? `
            <div class="dropdown">
                <button class="dropbtn" onclick="toggleDropdown(${row.id})"><i class='bx bx-dots-vertical-rounded' ></i></button>
                <div id="dropdown-${row.id}" class="dropdown-content">
                    <button onclick="editData(${row.id})"><a href="/manajemen_organisasi/content-kegiatan/smo-event-edit-index.html">Edit</a></button>
                    <button onclick="deleteData(${row.id})">Hapus Data</button>
                </div>
            </div>
        ` : '';

        tr.innerHTML = `<td>${row.id}</td><td><a href="/manajemen_organisasi/content-kegiatan/smo-event-detail-index.html">${row.name}</a></td><td>${row.date}</td><td class="${statusClass}">${row.detail}</td>
                        <td>${actionButtons}</td>`;
        tableBody.appendChild(tr);
    });

    document.getElementById('pageNumber').innerText = currentPage;
}



function toggleDropdown(id) {
    const dropdownContent = document.getElementById('dropdown-' + id);
    const isVisible = dropdownContent.style.display === 'block';
    document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.display = 'none';
    });
    dropdownContent.style.display = isVisible ? 'none' : 'block';
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchTable();
    }
}

function searchTable() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(input) || 
        item.detail.toLowerCase().includes(input)
    );
    displayTable(filteredData, 1);
}


function deleteData(id) {
    data = data.filter(item => item.id !== id);
    displayTable(data, currentPage);
}

// Initialize display
displayYear();
updateButtons();
displayTable(data, currentPage);

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayTable(data, currentPage);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < Math.ceil(data.length / rowsPerPage)) {
        currentPage++;
        displayTable(data, currentPage);
    }
});


// Tabel ke file tertentu
document.getElementById('export-pdf-btn').addEventListener('click', () => {
    exportToPDF(selectedYear, data);
});

document.getElementById('export-excel-btn').addEventListener('click', () => {
    exportToExcel(selectedYear, data, 'xlsx');
});

document.getElementById('export-csv-btn').addEventListener('click', () => {
    exportToExcel(selectedYear, data, 'csv');
});

function exportToPDF(year, data) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const title = `Tabel kegiatan tahun ${year}`;
    doc.text(title, 10, 10);

    const tableColumn = ["ID", "Name", "Date", "Detail"];
    const tableRows = [];

    data.forEach(row => {
        const rowData = [
            row.id,
            row.name,
            row.date,
            row.detail,
        ];
        tableRows.push(rowData);
    });

    // Menambahkan tabel ke dokumen PDF
    doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 20,
    });

    doc.save(`${title}.pdf`);
}

function exportToExcel(year, data, fileType) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `Tabel kegiatan ${year}`);

    const fileName = `Tabel kegiatan tahun ${year}.${fileType}`;
    XLSX.writeFile(workbook, fileName);
}

displayYear();
displayTable(data, currentPage);
updateButtons();