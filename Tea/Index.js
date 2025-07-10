var typed = new Typed(".multiple.text", {
  strings: ["Secangkir Teh Hangat"],
  typeSpeed: 120, // kecepatan mengetik
  backSpeed: 120, // kecepatan menghapus
  backDelay: 1000,
  loop: true,
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll('a[href="#TeaTypes"], a[href="#Contact"]')
    .forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href"); // Ambil nilai href
        const targetElement = document.querySelector(targetId); // Cari elemen tujuan

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
});

function openModal() {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("flex");
}
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("modal").classList.remove("flex");
}
