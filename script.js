// Mendapatkan elemen input gambar
var imageInput = document.getElementById('imageInput');

// Mendapatkan elemen input color
var colorPicker = document.getElementById('colorPicker');

// Mendapatkan elemen untuk menampilkan nilai warna
var colorValue = document.getElementById('colorValue');

// Menambahkan event listener ketika gambar dipilih
imageInput.addEventListener('change', function() {
  // Memuat gambar yang dipilih
  var file = imageInput.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    var image = new Image();
    image.onload = function() {
      // Membuat elemen canvas untuk menggambar gambar
      var canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      var context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);

      // Mendapatkan posisi piksel yang diklik pada canvas
      canvas.addEventListener('click', function(event) {
        var x = event.offsetX;
        var y = event.offsetY;

        // Mendapatkan data piksel pada posisi yang diklik
        var imageData = context.getImageData(x, y, 1, 1);
        var pixelData = imageData.data;

        // Mengubah data piksel menjadi nilai hex color
        var hexColor = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);

        // Mengubah background dan teks sesuai nilai warna yang dipilih
        document.body.style.backgroundColor = hexColor;
        colorPicker.value = hexColor;
        colorValue.textContent = hexColor;
      });
    };
    image.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

// Fungsi untuk mengonversi nilai RGB menjadi hex color
function rgbToHex(red, green, blue) {
  var r = red.toString(16).padStart(2, '0');
  var g = green.toString(16).padStart(2, '0');
  var b = blue.toString(16).padStart(2, '0');
  return '#' + r + g + b;
}
