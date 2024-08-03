//? Tabel
const table_headings = document.querySelectorAll('table th'),
        table_rows = document.querySelectorAll('table tr');

table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        sortTable(i, sort_asc);
    }
})




//? Tanggal
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let selectedYear = currentYear;

function displayYear() {
    const yearDisplay = document.getElementById('year-display');
    yearDisplay.textContent = selectedYear;
}

function updateButtons() {
    const nextBtn = document.getElementById('next-btn');
    if (selectedYear >= currentYear) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

document.getElementById('prev-btn').addEventListener('click', () => {
    selectedYear--;
    displayYear();
    updateButtons();
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (selectedYear < currentYear) {
        selectedYear++;
        displayYear();
        updateButtons();
    }
});

// Initialize display
displayYear();
updateButtons();