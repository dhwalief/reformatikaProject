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
    { id: 1, name: "Nama 1", detail: "Selesai", date: "2023-01-01" },
    { id: 2, name: "Nama 2", detail: "Ditunda", date: "2023-02-15" },
    // ... data lainnya untuk tahun 2023
];

let data2024 = [
    { id: 1, name: "Nama 1", detail: "Selesai", date: "2024-01-01" },
    { id: 2, name: "Nama 2", detail: "Ditunda", date: "2024-02-15" },
    // ... data lainnya untuk tahun 2024
];

let data2025 = [
    { id: 1, name: "Nama 1", detail: "Selesai", date: "2025-01-01" },
    { id: 2, name: "Nama 2", detail: "Ditunda", date: "2025-02-15" },
    // ... data lainnya untuk tahun 2025
];

// ... tambahkan data untuk tahun lainnya jika diperlukan

let data = getDataByYear(selectedYear);

function getDataByYear(year) {
    switch(year) {
        case 2023:
            return data2023;
        case 2024:
            return data2024;
        case 2025:
            return data2025;
        // ... tambahkan case untuk tahun lainnya jika diperlukan
        default:
            return [];
    }
}

const rowsPerPage = 10;
let currentPage = 1;
let editRowId = null;

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

        const rowYear = new Date(row.date).getFullYear();
        const isCurrentYearOrFuture = rowYear >= currentYear;
        const editButton = isCurrentYearOrFuture 
            ? `<button onclick="editData(${row.id})">Edit</button>` 
            : `<button disabled>Edit</button>`;

        tr.innerHTML = `<td>${row.id}</td><td>${row.name}</td><td>${row.date}</td><td class="${statusClass}">${row.detail}</td>
                        <td>
                            <div class="dropdown">
                                <button class="dropbtn" onclick="toggleDropdown(${row.id})"><i class='bx bx-dots-vertical-rounded' ></i></button>
                                <div id="dropdown-${row.id}" class="dropdown-content">
                                    ${editButton}
                                    <button onclick="deleteData(${row.id})">Hapus Data</button>
                                </div>
                            </div>
                        </td>`;
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