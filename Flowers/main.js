// Mengaktifkan animasi saat halaman dimuat (menghilangkan kelas 'not-loaded')
window.onload = () => {
    const timer = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(timer);
    }, 1000);
};

// Fungsi ketika logo/kotak gift diklik
function openGift() {
    window.location.href = "message.html";
}