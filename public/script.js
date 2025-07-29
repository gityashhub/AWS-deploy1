function showStatus() {
  const statusBox = document.getElementById("statusBox");
  statusBox.classList.remove("hidden");
}
document.getElementById("year").textContent = new Date().getFullYear();