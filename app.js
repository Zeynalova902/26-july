const magicBtn = document.getElementById("magicBtn");
const modeBtn = document.getElementById("modeBtn");
const colorBtn = document.getElementById("colorBtn");
let isDark = false;

// 1. Canlı ekran ölçüsünü göstər
function updateScreenSize() {
  const width = window.innerWidth;
  sizeInfo.textContent = `📏 Ekran ölçüsü: ${width}px`;
}
window.addEventListener("resize", updateScreenSize);
updateScreenSize(); // İlk açılışda göstər

// 2. Ekran ölçüsü dəyişdikdə mesaj göstər
window.addEventListener("resize", () => {
  console.log("🔄 Ekran ölçüsü dəyişdi!");
});

// 3. Dark/Light mode toggle
modeBtn.addEventListener("click", () => {
  document.body.style.transition = "0.5s";
  isDark = !isDark;

  if (isDark) {
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "white";
    modeBtn.textContent = "☀️ Light Mode";
  } else {
    document.body.style.backgroundColor = "#f0f0f0";
    document.body.style.color = "#111";
    modeBtn.textContent = "🌙 Dark Mode";
  }
});

// 4. Magic düyməsi: kliklə animasiyalı dəyişiklik
magicBtn.addEventListener("click", () => {
  magicBtn.textContent = "✨ Toxunduğun üçün sağ ol!";
  magicBtn.style.transform = "scale(1.2)";
  magicBtn.style.backgroundColor = "deeppink";

  setTimeout(() => {
    magicBtn.style.transform = "scale(1)";
    magicBtn.textContent = "Magic Button";
  }, 1000);
});

// 5. Random background color düyməsi
colorBtn.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
