// Toggle buat buka-tutup detail card API-nya
function toggleCard() {
    const card = document.getElementById('apiCard');
    card.classList.toggle('active');
}

// Fungsi simpel buat ngopi URL ke clipboard
function copyApiUrl() {
    const urlText = document.getElementById('urlContent').innerText; 
    const copyBtn = document.getElementById('copyBtn'); 

    // Pake API clipboard bawaan browser
    navigator.clipboard.writeText(urlText).then(() => {
        // Ganti teks & styling tombol biar user tau udah ke-copy
        copyBtn.innerText = "Copied!"; 
        copyBtn.classList.add("copied"); 

        // Balikin tombol ke kondisi semula abis 2 detik
        setTimeout(() => {
            copyBtn.innerText = "Copy";
            copyBtn.classList.remove("copied");
        }, 2000);
    }).catch(err => {
        console.error('Yah, gagal ngopi URL: ', err);
        alert("Gagal copy URL nih.");
    });
}
