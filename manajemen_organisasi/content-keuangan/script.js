// Initial data for different years
const data = {
    2024: [
        { id: 1, nama: 'Galdan', tanggal: '2024-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 2, nama: 'Modal galdan', tanggal: '2024-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 3, nama: 'Iuran', tanggal: '2024-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 4, nama: 'Modal galdan', tanggal: '2024-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 5, nama: 'Iuran', tanggal: '2024-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 6, nama: 'Operasional Sekret', tanggal: '2024-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 400.000 },
        { id: 7, nama: 'Galdan', tanggal: '2024-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 8, nama: 'Modal galdan', tanggal: '2024-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 9, nama: 'Galdan', tanggal: '2024-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 10, nama: 'Modal galdan', tanggal: '2024-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 11, nama: 'Iuran', tanggal: '2024-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 12, nama: 'Modal galdan', tanggal: '2024-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 13, nama: 'Iuran', tanggal: '2024-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 14, nama: 'Operasional Sekret', tanggal: '2024-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 400.000 },
        { id: 15, nama: 'Galdan', tanggal: '2024-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 16, nama: 'Modal galdan', tanggal: '2024-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        
        // More data
    ],
    2023: [
        { id: 1, nama: 'Galdan', tanggal: '2023-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 2, nama: 'Modal galdan', tanggal: '2023-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 3, nama: 'Iuran', tanggal: '2023-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 4, nama: 'Modal galdan', tanggal: '2023-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 5, nama: 'Iuran', tanggal: '2023-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 6, nama: 'Operasional Sekret', tanggal: '2023-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 400.000 },
        { id: 7, nama: 'Galdan', tanggal: '2023-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 8, nama: 'Modal galdan', tanggal: '2023-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 9, nama: 'Galdan', tanggal: '2023-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 10, nama: 'Modal galdan', tanggal: '2023-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 11, nama: 'Iuran', tanggal: '2023-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 12, nama: 'Modal galdan', tanggal: '2023-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 13, nama: 'Iuran', tanggal: '2023-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 14, nama: 'Operasional Sekret', tanggal: '2023-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 400.000 },
        { id: 15, nama: 'Galdan', tanggal: '2023-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 16, nama: 'Modal galdan', tanggal: '2023-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        // More data
    ],
    2022: [
        { id: 1, nama: 'Galdan', tanggal: '2022-03-01', status: 'Akan Datang', category: 'pengeluaran', amount: 200.000 },
        { id: 2, nama: 'Modal galdan', tanggal: '2022-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 3, nama: 'Iuran', tanggal: '2022-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 4, nama: 'Modal galdan', tanggal: '2022-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 5, nama: 'Iuran', tanggal: '2022-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 6, nama: 'Operasional Sekret', tanggal: '2022-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 400.000 },
        { id: 7, nama: 'Galdan', tanggal: '2022-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 8, nama: 'Modal galdan', tanggal: '2022-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 9, nama: 'Galdan', tanggal: '2022-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 10, nama: 'Modal galdan', tanggal: '2022-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 11, nama: 'Iuran', tanggal: '2022-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 12, nama: 'Modal galdan', tanggal: '2022-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 13, nama: 'Iuran', tanggal: '2022-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 14, nama: 'Operasional Sekret', tanggal: '2022-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 400.000 },
        { id: 15, nama: 'Galdan', tanggal: '2022-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 16, nama: 'Modal galdan', tanggal: '2022-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        // More data
    ],
    2021: [
        { id: 1, nama: 'Galdan', tanggal: '2021-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 2, nama: 'Modal galdan', tanggal: '2021-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 3, nama: 'Iuran', tanggal: '2021-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 4, nama: 'Modal galdan', tanggal: '2021-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 5, nama: 'Iuran', tanggal: '2021-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 6, nama: 'Operasional Sekret', tanggal: '2021-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 400.000 },
        { id: 7, nama: 'Galdan', tanggal: '2021-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 8, nama: 'Modal galdan', tanggal: '2021-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 9, nama: 'Galdan', tanggal: '2021-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 10, nama: 'Modal galdan', tanggal: '2021-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 11, nama: 'Iuran', tanggal: '2021-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 12, nama: 'Modal galdan', tanggal: '2021-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 13, nama: 'Iuran', tanggal: '2021-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 14, nama: 'Operasional Sekret', tanggal: '2021-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 400.000 },
        { id: 15, nama: 'Galdan', tanggal: '2021-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 16, nama: 'Modal galdan', tanggal: '2021-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        // More data
    ],
    2020: [
        { id: 1, nama: 'Galdan', tanggal: '2020-03-01', status: 'Akan Datang', category: 'pengeluaran', amount: 200.000 },
        { id: 2, nama: 'Modal galdan', tanggal: '2020-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 3, nama: 'Darurat', tanggal: '2020-03-01', status: 'Akan Datang', category: 'pengeluaran', amount: 200.000 },
        { id: 4, nama: 'Uang Makan', tanggal: '2020-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 5, nama: 'Iuran', tanggal: '2020-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 6, nama: 'Operasional Sekret', tanggal: '2020-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 400.000 },
        { id: 7, nama: 'Galdan', tanggal: '2020-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 8, nama: 'Modal galdan', tanggal: '2020-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 9, nama: 'Galdan', tanggal: '2020-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 10, nama: 'Modal galdan', tanggal: '2020-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 11, nama: 'Iuran', tanggal: '2020-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 12, nama: 'Modal galdan', tanggal: '2020-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        { id: 13, nama: 'Iuran', tanggal: '2020-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 14, nama: 'Operasional Sekret', tanggal: '2020-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 400.000 },
        { id: 15, nama: 'Galdan', tanggal: '2020-03-01', status: 'Selesai', category: 'pemasukan', amount: 200.000 },
        { id: 16, nama: 'Modal galdan', tanggal: '2020-05-11', status: 'Akan Datang', category: 'pengeluaran', amount: 150.000 },
        // More data
    ],
    // More years
};

let currentYear = 2024;
let currentPage = 1;
const rowsPerPage = 10;

document.addEventListener('DOMContentLoaded', function() {
    const yearDisplay = document.getElementById('year-display');
    yearDisplay.textContent = currentYear;

    const prevYearBtn = document.getElementById('prev-year-btn');
    const nextYearBtn = document.getElementById('next-year-btn');

    prevYearBtn.addEventListener('click', function() {
        if (data[currentYear - 1]) {
            currentYear -= 1;
            currentPage = 1;
            yearDisplay.textContent = currentYear;
            renderTable();
        }
    });

    nextYearBtn.addEventListener('click', function() {
        if (data[currentYear + 1]) {
            currentYear += 1;
            currentPage = 1;
            yearDisplay.textContent = currentYear;
            renderTable();
        }
    });

    document.querySelector('.add-btn').addEventListener('click', function() {
        showModal('add');
    });

    renderTable();
});

function renderTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    const yearData = data[currentYear];
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const pageData = yearData.slice(startIndex, endIndex);

    pageData.forEach((row, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${startIndex + index + 1}</td>
            <td><a href="indexRincian.html">${row.nama}</a></td>
            <td>${row.tanggal}</td>
            <td class="status-${row.category}">${row.category === 'pemasukan' ? '+' : '-'}Rp${row.amount}.000</td>
            <td>
                <div class="dropdown">
                    <button onclick="toggleDropdown(this)"><i class='bx bx-dots-vertical-rounded' ></i></button>
                    <div class="dropdown-content">
                        <button onclick="showModal('edit', ${row.id})">Edit</button>
                        <button onclick="deleteData(${row.id})">Delete</button>
                    </div>
                </div>
            </td>
        `;

        tableBody.appendChild(tr);
    });

    document.getElementById('pageNumber').textContent = currentPage;
}

function toggleDropdown(button) {
    const dropdownContent = button.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function showModal(action, id = null) {
    const modal = document.getElementById('myModal');
    const addContainer = document.getElementById('modal-content-add');
    const editContainer = document.getElementById('modal-content-edit');

    if (action === 'add') {
        addContainer.style.display = 'block';
        editContainer.style.display = 'none';
    } else if (action === 'edit') {
        addContainer.style.display = 'none';
        editContainer.style.display = 'block';

        const row = data[currentYear].find(item => item.id === id);
        document.getElementById('editNameInput').value = row.nama;
        document.getElementById('editDateInput').value = row.tanggal;
        document.getElementById('editCategoryInput').value = row.category;
        document.getElementById('editAmountInput').value = row.amount;
        document.getElementById('editDescriptionInput').value = row.description;
        document.getElementById('editFileInput').dataset.id = id;
    }

    modal.style.display = 'block';
}

function hideModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function addData() {
    const nameInput = document.getElementById('nameInput').value;
    const dateInput = document.getElementById('dateInput').value;
    const categoryInput = document.getElementById('categoryInput').value;
    const amountInput = parseFloat(document.getElementById('amountInput').value);
    const descriptionInput = document.getElementById('descriptionInput').value;
    const fileInput = document.getElementById('fileInput').value;

    const newData = {
        id: data[currentYear].length + 1,
        nama: nameInput,
        tanggal: dateInput,
        status: 'Akan Datang',
        category: categoryInput,
        amount: amountInput,
        description: descriptionInput,
        file: fileInput
    };

    data[currentYear].push(newData);
    hideModal();
    renderTable();
}

function updateData() {
    const id = parseInt(document.getElementById('editFileInput').dataset.id, 10);
    const nameInput = document.getElementById('editNameInput').value;
    const dateInput = document.getElementById('editDateInput').value;
    const categoryInput = document.getElementById('editCategoryInput').value;
    const amountInput = parseFloat(document.getElementById('editAmountInput').value);
    const descriptionInput = document.getElementById('editDescriptionInput').value;
    const fileInput = document.getElementById('editFileInput').value;

    const row = data[currentYear].find(item => item.id === id);
    row.nama = nameInput;
    row.tanggal = dateInput;
    row.category = categoryInput;
    row.amount = amountInput;
    row.description = descriptionInput;
    row.file = fileInput;

    hideModal();
    renderTable();
}

function deleteData(id) {
    data[currentYear] = data[currentYear].filter(item => item.id !== id);
    renderTable();
}

function searchTable() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    const yearData = data[currentYear];
    const filteredData = yearData.filter(row => row.nama.toLowerCase().includes(input));

    filteredData.forEach((row, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${row.nama}</td>
            <td>${row.tanggal}</td>
            <td class="status-${row.category}">${row.category === 'pemasukan' ? '+' : '-'}Rp${row.amount}</td>
            <td>
                <div class="dropdown">
                    <button onclick="toggleDropdown(this)"><i class='bx bx-dots-vertical-rounded' ></i></button>
                    <div class="dropdown-content">
                        <button onclick="showModal('edit', ${row.id})">Edit</button>
                        <button onclick="deleteData(${row.id})">Delete</button>
                    </div>
                </div>
            </td>
        `;

        tableBody.appendChild(tr);
    });
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchTable();
    }
}

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

