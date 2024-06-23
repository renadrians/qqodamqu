const form = document.getElementById('khodamForm');
const nameInput = document.getElementById('nameInput');
const resultContainer = document.getElementById('resultContainer');
const viewCountElement = document.getElementById('viewCount');
let viewCount = localStorage.getItem('viewCount') || 0;
updateViewCount();

// Menaikkan jumlah view setiap kali halaman dimuat
viewCount++;
localStorage.setItem('viewCount', viewCount);

const khodams = [
    { name: "ADI KNALPOT", image: "./assets/adi knalpot.jpg" },
    { name: "AGUNG MI GORENG", image: "./assets/agung mie goreng.jpg" },
    { name: "AGUNG MINECRAFT", image: "./assets/agung minecraft.jpg" },
    { name: "AMIN GUNUNG KIDUL", image: "./assets/amin gunung kidul.jpg" },
    { name: "BAGAS BATERPLAI", image: "./assets/bagas baterplai.jpg" },
    { name: "BASUKI BELIMBING", image: "./assets/Basuki belimbing.jpg" },
    { name: "EDO DONAT", image: "./assets/edo donat.jpg" },
    { name: "FACHRI CEKER", image: "./assets/fachri ceker.jpg" },
    { name: "FAHRI CILOK", image: "./assets/fahri cilok.jpg" },
    { name: "ILHAM CIKEN", image: "./assets/ilham ciken.jpg" },
    { name: "KAPAL KARAM", image: "./assets/kapal karam.jpg" },
    { name: "KELINCI BANYUWANGI", image: "./assets/kelinci banyuwangi.jpg" },
    { name: "KELVIN LONTONG", image: "./assets/Kelvin lontong.jpg" },
    { name: "RENO PARKIRAN", image: "./assets/reno parkiran.jpg" },
    { name: "RIAN BATAGOR", image: "./assets/rian batagor.jpg" },
    { name: "RIZAL EKONOMI", image: "./assets/rizal ekonomi.jpg" },
    { name: "SATRIA GERGAJI", image: "./assets/satria gergaji.jpg" },
    { name: "SIGIT RENDANG", image: "./assets/Sigit rendang.jpg" },
    { name: "YUSRIL KECAP", image: "./assets/yusril kecap.jpg" },
    { name: "ZAKI INDOMIE", image: "./assets/zaki indomie.jpg" }
];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    if (name === '') {
        alert('Silakan masukkan nama Anda terlebih dahulu!');
        return;
    }
    const khodam = getRandomKhodam();
    clearResults();
    addResultToContainer(name, khodam);
});

function getRandomKhodam() {
    const randomIndex = Math.floor(Math.random() * khodams.length);
    return khodams[randomIndex];
}

function clearResults() {
    resultContainer.innerHTML = '';
}

function addResultToContainer(name, khodam) {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';

    const nameParagraph = document.createElement('p');
    nameParagraph.className = 'name';
    nameParagraph.textContent = name;
    resultDiv.appendChild(nameParagraph);

    const khodamParagraph = document.createElement('p');
    khodamParagraph.textContent = 'Selamat! Khodam kamu adalah ';

    const highlightedName = document.createElement('span');
    highlightedName.style.color = '#007bff'; // Blue color
    highlightedName.style.fontWeight = 'bold'; // Bold text
    highlightedName.textContent = khodam.name;

    khodamParagraph.appendChild(highlightedName);
    resultDiv.appendChild(khodamParagraph);

    const img = document.createElement('img');
    img.src = khodam.image;
    img.alt = khodam.name;
    resultDiv.appendChild(img);

    resultContainer.appendChild(resultDiv);

    // Update jumlah view setelah menambahkan hasil baru
    viewCount++;
    localStorage.setItem('viewCount', viewCount);
    updateViewCount();
}

function updateViewCount() {
    viewCountElement.textContent = `Views: ${viewCount}`;
}
