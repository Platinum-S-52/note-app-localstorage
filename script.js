function inputdata(event) {
  //utk tdk rld
  event.preventDefault();
  let data1 = document.getElementById("note").value;
  let data2 = document.getElementById("label").value;
  // data dlm objek
  let siswa = JSON.parse(localStorage.getItem("siswa")) || [];
  siswa.push({ note: data1, label: data2 });
  // Input data
  localStorage.setItem("siswa", JSON.stringify(siswa));
  // Show data
  console.log(JSON.parse(localStorage.getItem("siswa")));

  tampilkan();
}
//tampil data localstorage
function tampil() {
  let data = JSON.parse(localStorage.getItem("siswa"));
  let = data = JSON.parse(localStorage.getItem(siswa));
  const ul = document.getElementById("data-tampil");
  ul.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.note} - ${item.label}`;
    ul.appendChild(li);
  });
}
//
function deletedata() {
  localStorage.clear("siswa");
  tampilkan();
}
// P function
inputdata();
