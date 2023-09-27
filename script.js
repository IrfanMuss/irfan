// Fungsi untuk menambahkan produk ke keranjang belanja (implementasikan sesuai kebutuhan)
function tambahkanKeKeranjang(namaProduk, hargaProduk) {
    // Implementasikan logika penambahan ke keranjang belanja di sini
    alert(`Anda telah menambahkan ${namaProduk} ke keranjang belanja. Total harga: $${hargaProduk}`);
}

// Tambahkan event listener untuk tombol "Beli Sekarang" pada setiap produk
const beliSekarangButtons = document.querySelectorAll('.produk button');
beliSekarangButtons.forEach(button => {
    button.addEventListener('click', () => {
        const produk = button.parentElement;
        const namaProduk = produk.querySelector('h3').textContent;
        const hargaProduk = parseFloat(produk.querySelector('p:last-child').textContent.replace('Harga: $', ''));
        tambahkanKeKeranjang(namaProduk, hargaProduk);
    });
});
