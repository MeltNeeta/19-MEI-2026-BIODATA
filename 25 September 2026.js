// 1. Data Base Lokal (ARRAY OF OBJECT)
let tasks = [
    {id: 1, judul: "Mengerjakan PR Bahasa Indo", Status: "DONE"},
    {id: 2, judul: "Mengerjakan PR Bahasa Inggris", Status: "DONE"},
    {id: 3, judul: "Mengerjakan PR Matematika", Status: "TODO"},
];

// Menangkap Elemen HTML (DOM SELECTION)
const inputTask = document.querySelector("#inputText");
const btnTambah = document.querySelector("#btn-tambah");
const colToDo = document.querySelector("#colToDo");
const colDone = document.querySelector("#colDone");

// Section 2 : Render Tampilan Ke Layar
function renderTasks() {
    // Langkah a : Bresihkan isi kolom di layar
    colToDo.innerHTML = "";
    colDone.innerHTML = "";

    // Langkah b : Saring Data Tugas Menggunakan Filter
    const listToDo = tasks.filter((t) => t.Status === "TODO");
    const listDone = tasks.filter((t) => t.Status === "DONE");

    // langkah c : Gambar Kartu Tugas ke dalam Kolom Belum Selesai
    listToDo.forEach((item) => {
        const {id, judul} = item;

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <span>${judul}</span>
        <button class="btnDone" onclick="pindahStatus(${id}">▢</button>
        `;

        colToDo.appendChild(card);
    });

    // Langkah d : Gambar Kartu Tugas ke kolom "Selesai"
    listDone.forEach((item) => {
        const {judul} = item;
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<span>${judul}</span>`;
        colDone.appendChild(card);
    });
}

// 3. Fitur Tambah Tugas Baru
btnTambah.addEventListener("click", () => {
    const teksBaru = inputTask.value.trim();

    if (teksBaru === "") {
        alert("Tolong Tulis Tugasnya Terlebih Dahulu!");
        return;
    }

    // Buat Objek Tugas Baru
    const tugasBaru = {
        id: Date.now(),
        judul: teksBaru,
        Status: "TODO"
    };

    // Masukkan ke Array Tasks
    tasks.push(tugasBaru);

    // Render Ulang Tampilan dan Bersihkan Input
    renderTasks();
    inputTask.value = "";
});

// 4. FITUR PINDAH STATUS (TODO => DONE)
function pindahStatus(id) {
    // Cari data berdasarkan ID lalu ubah statusnya jadi DONE
    tasks = tasks.map((task) => {
        if (task.id === id) {
            return {...task, Status: "DONE"};
        };
        return task;
    });

    // Render Ulang Tampilan Layar
    renderTasks();
}

renderTasks();