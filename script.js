// Mendapatkan elemen input color
let cekWarna = document.getElementById('colorPicker');

// Mendapatkan elemen untuk menampilkan nilai warna
let isiWarna = document.getElementById('colorValue');

// Menambahkan event listener ketika nilai warna berubah
cekWarna.addEventListener('input', function() {
  // Mendapatkan nilai warna yang dipilih
  let warna = cekWarna.value;

  // Mengubah background dan teks sesuai nilai warna yang dipilih
  document.body.style.backgroundColor = warna;
  colorValue.textContent = warna;
});
