// // 1. DATA BASE LOKAL (ARRAY OF OBJECT)
// let tasks=[
//     {id:1, judul:"Mengerjakan PR Bahasa Jawa", Status:"TODO"},
//     {id:2, judul:"Mengerjakan PR Bahasa Inggris", Status:"DONE"},
//     {id:3, judul:"Mengerjakan PR Bahasa Japan", Status:"DONE"},
// ];

// // 2. MENANGKAP ELEMEN HTML (DOM SELECTION)
// //Kita hubungkan elemen html di layar kedalam variabel JS
// const inputTask = document.querySelector("#inputTask");
// const btnTambah = document.querySelector("#btnTambah");
// const colToDo = document.querySelector("#colToDo");
// const colDone = document.querySelector("#colDone");

// // ----------------------------------------------------------------
// //SECTION 2: RENDER TAMPILAN KE LAYAR
// function renderTasks(){
//     // Langkah A. Bersihkan dulu isi kolom di layar hingga tidak menumpuk
//     colToDo.innerHTML = "";
//     colDone.innerHTML = "";

//     // Langkah B. Saring data tugas menggunakan data filter () by status
//     const listToDo = tasks.filter((t) => t.status === "TODO");
//     const listDone = tasks.filter((t) => t.status === "DONE");

//     // Langkah C : Gambar kartu tugas ke kolom "belum berhasil"
//     listToDo.forEach((item) =>{
//         const{id, jusul} = item;
//     })

//     const card = document.createElement("div");
//     card.innerHTML=`
//         <span>${judul}<span/>
//         <button class="btn-done" onclick="pindahStatus(${id})">Selesai<button>`;

//         colToDo.appendChild(card);
// };

//     // Langkah D : Gambar kartu tugas ke kolom "berhasil"
//     listDone.forEach((item) =>{
//         const {judul} = item;
//         const card = document.createElement("div");
//         card.className = "card";
//         card.innerHTML = `<span>${judul}</span>`
//         colDone.appendChild(card);
//     });

