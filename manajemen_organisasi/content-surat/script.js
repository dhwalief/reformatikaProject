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
    { id: 1, name: "Undangan Rapat", detail: "Masuk", date: "2023-01-01" },
    { id: 2, name: "Undangan Acara", detail: "Keluar", date: "2023-02-15" },
    { id: 3, name: "Surat Pernyataan", detail: "Masuk", date: "2023-01-01" },
    { id: 4, name: "Surat Undangan", detail: "Keluar", date: "2023-02-15" },
    { id: 5, name: "Laporan Kegiatan", detail: "Masuk", date: "2023-01-01" },
    { id: 6, name: "Surat Undangan", detail: "Keluar", date: "2023-02-15" },
    { id: 7, name: "Laporan Acara", detail: "Masuk", date: "2023-01-01" },
    { id: 8, name: "Surat Undangan", detail: "Keluar", date: "2023-02-15" },
    { id: 9, name: "Undangan Musyawarah Besar", detail: "Masuk", date: "2023-01-01" },
    { id: 10, name: "Undangan", detail: "Keluar", date: "2023-02-15" },
    { id: 11, name: "Undangan", detail: "Masuk", date: "2023-01-01" },
    { id: 12, name: "Surat Undangan", detail: "Keluar", date: "2023-02-15" },
    { id: 13, name: "Surat Izin", detail: "Masuk", date: "2023-01-01" },
    { id: 14, name: "Surat Undangan", detail: "Keluar", date: "2023-02-15" },
    { id: 15, name: "Surat Izin", detail: "Masuk", date: "2023-01-01" },
    { id: 16, name: "Surat Undangan", detail: "Keluar", date: "2023-02-15" },
    // ... data lainnya untuk tahun 2023
];

let data2024 = [
    { id: 1, name: "Undangan", detail: "Masuk", date: "2024-01-01" },
    { id: 2, name: "Surat Undangan", detail: "Keluar", date: "2024-02-15" },
    { id: 3, name: "Surat Izin", detail: "Masuk", date: "2024-01-01" },
    { id: 4, name: "Surat Undangan", detail: "Keluar", date: "2024-02-15" },
    { id: 5, name: "Laporan Kegiatan", detail: "Masuk", date: "2024-01-01" },
    { id: 6, name: "Surat Undangan", detail: "Keluar", date: "2024-02-15" },
    { id: 7, name: "Laporan Acara", detail: "Masuk", date: "2024-01-01" },
    { id: 8, name: "Surat Undangan", detail: "Keluar", date: "2024-02-15" },
    { id: 9, name: "Undangan Musyawarah Besar", detail: "Masuk", date: "2024-01-01" },
    { id: 10, name: "Undangan", detail: "Keluar", date: "2024-02-15" },
    { id: 11, name: "Undangan", detail: "Masuk", date: "2024-01-01" },
    { id: 12, name: "Surat Undangan", detail: "Keluar", date: "2024-02-15" },
    { id: 13, name: "Surat Izin", detail: "Masuk", date: "2024-01-01" },
    { id: 14, name: "Surat Undangan", detail: "Keluar", date: "2024-02-15" },
    { id: 15, name: "Surat Izin", detail: "Masuk", date: "2024-01-01" },
    { id: 16, name: "Surat Undangan", detail: "Keluar", date: "2024-02-15" },
    // ... data lainnya untuk tahun 2024
];

let data2022 = [
    { id: 1, name: "Undangan", detail: "Masuk", date: "2022-01-01" },
    { id: 2, name: "Surat Undangan", detail: "Keluar", date: "2022-02-15" },
    { id: 3, name: "Surat Izin", detail: "Masuk", date: "2022-01-01" },
    { id: 4, name: "Surat Undangan", detail: "Keluar", date: "2022-02-15" },
    { id: 5, name: "Laporan Kegiatan", detail: "Masuk", date: "2022-01-01" },
    { id: 6, name: "Surat Undangan", detail: "Keluar", date: "2022-02-15" },
    { id: 7, name: "Laporan Acara", detail: "Masuk", date: "2022-01-01" },
    { id: 8, name: "Surat Undangan", detail: "Keluar", date: "2022-02-15" },
    { id: 9, name: "Undangan Musyawarah Besar", detail: "Masuk", date: "2022-01-01" },
    { id: 10, name: "Undangan", detail: "Keluar", date: "2022-02-15" },
    { id: 11, name: "Undangan", detail: "Masuk", date: "2022-01-01" },
    { id: 12, name: "Surat Undangan", detail: "Keluar", date: "2022-02-15" },
    { id: 13, name: "Surat Izin", detail: "Masuk", date: "2022-01-01" },
    { id: 14, name: "Surat Undangan", detail: "Keluar", date: "2022-02-15" },
    { id: 15, name: "Surat Izin", detail: "Masuk", date: "2022-01-01" },
    { id: 16, name: "Surat Undangan", detail: "Keluar", date: "2022-02-15" },
    // ... data lainnya untuk tahun 2022
];

let data2021 = [
    { id: 1, name: "Undangan", detail: "Masuk", date: "2021-01-01" },
    { id: 2, name: "Surat Undangan", detail: "Keluar", date: "2021-02-15" },
    { id: 3, name: "Surat Izin", detail: "Masuk", date: "2021-01-01" },
    { id: 4, name: "Surat Undangan", detail: "Keluar", date: "2021-02-15" },
    { id: 5, name: "Laporan Kegiatan", detail: "Masuk", date: "2021-01-01" },
    { id: 6, name: "Surat Undangan", detail: "Keluar", date: "2021-02-15" },
    { id: 7, name: "Laporan Acara", detail: "Masuk", date: "2021-01-01" },
    { id: 8, name: "Surat Undangan", detail: "Keluar", date: "2021-02-15" },
    { id: 9, name: "Undangan Musyawarah Besar", detail: "Masuk", date: "2021-01-01" },
    { id: 10, name: "Undangan", detail: "Keluar", date: "2021-02-15" },
    { id: 11, name: "Undangan", detail: "Masuk", date: "2021-01-01" },
    { id: 12, name: "Surat Undangan", detail: "Keluar", date: "2021-02-15" },
    { id: 13, name: "Surat Izin", detail: "Masuk", date: "2021-01-01" },
    { id: 14, name: "Surat Undangan", detail: "Keluar", date: "2021-02-15" },
    { id: 15, name: "Surat Izin", detail: "Masuk", date: "2021-01-01" },
    { id: 16, name: "Surat Undangan", detail: "Keluar", date: "2021-02-15" },
    // ... data lainnya untuk tahun 2022
];

let data2020 = [
    { id: 1, name: "Undangan", detail: "Masuk", date: "2020-01-01" },
    { id: 2, name: "Surat Undangan", detail: "Keluar", date: "2020-02-15" },
    { id: 3, name: "Surat Izin", detail: "Masuk", date: "2020-01-01" },
    { id: 4, name: "Surat Undangan", detail: "Keluar", date: "2020-02-15" },
    { id: 5, name: "Laporan Kegiatan", detail: "Masuk", date: "2020-01-01" },
    { id: 6, name: "Surat Undangan", detail: "Keluar", date: "2020-02-15" },
    { id: 7, name: "Laporan Acara", detail: "Masuk", date: "2020-01-01" },
    { id: 8, name: "Surat Undangan", detail: "Keluar", date: "2020-02-15" },
    { id: 9, name: "Undangan Musyawarah Besar", detail: "Masuk", date: "2020-01-01" },
    { id: 10, name: "Undangan", detail: "Keluar", date: "2020-02-15" },
    { id: 11, name: "Undangan", detail: "Masuk", date: "2020-01-01" },
    { id: 12, name: "Surat Undangan", detail: "Keluar", date: "2020-02-15" },
    { id: 13, name: "Surat Izin", detail: "Masuk", date: "2020-01-01" },
    { id: 14, name: "Surat Undangan", detail: "Keluar", date: "2020-02-15" },
    { id: 15, name: "Surat Izin", detail: "Masuk", date: "2020-01-01" },
    { id: 16, name: "Surat Undangan", detail: "Keluar", date: "2020-02-15" },
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
            case "Masuk":
                statusClass = "status-selesai";
                break;
            case "Keluar":
                statusClass = "status-ditunda";
                break;
            case "Arsip":
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
                    <button onclick="editData(${row.id})">Edit</button>
                    <button onclick="deleteData(${row.id})">Hapus Data</button>
                </div>
            </div>
        ` : '';

        tr.innerHTML = `<td>${row.id}</td><td><a href="indexRincian.html">${row.name}</a></td><td>${row.date}</td><td class="${statusClass}">${row.detail}</td>
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

function showModal(type) {
    const modal = document.getElementById("myModal");
    const addContent = document.getElementById("modal-content-add");
    const editContent = document.getElementById("modal-content-edit");

    if (type === 'add') {
        addContent.style.display = 'block';
        editContent.style.display = 'none';
    } else if (type === 'edit') {
        addContent.style.display = 'none';
        editContent.style.display = 'block';
    }

    modal.style.display = "block";
}

function hideModal() {
    document.getElementById("myModal").style.display = "none";
}

function addData() {
    const name = document.getElementById('nameInput').value;
    const date = document.getElementById('dateInput').value;
    const detail = document.getElementById('detailInput').value;
    const description = document.getElementById('descriptionInput').value; // Keterangan
    const file = document.getElementById('fileInput').files[0]; // File

    if (name && date && detail) {
        const newId = data.length ? data[data.length - 1].id + 1 : 1;
        data.push({ id: newId, name, date, detail });
        displayTable(data, currentPage);
        hideModal();
    }
}

function editData(id) {
    const row = data.find(item => item.id === id);
    if (row) {
        editRowId = id;
        document.getElementById('editNameInput').value = row.name;
        document.getElementById('editDateInput').value = row.date;
        document.getElementById('editDetailInput').value = row.detail;
        document.getElementById('editDescriptionInput').value = ""; // Reset keterangan
        document.getElementById('editFileInput').value = ""; // Reset file
        showModal('edit');
    }
}


function saveEditData() {
    const name = document.getElementById('editNameInput').value;
    const date = document.getElementById('editDateInput').value;
    const detail = document.getElementById('editDetailInput').value;

    if (editRowId !== null) {
        const row = data.find(item => item.id === editRowId);
        if (row) {
            row.name = name;
            row.date = date;
            row.detail = detail;
            displayTable(data, currentPage);
            hideModal();
        }
    }
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