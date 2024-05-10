const questions = [
    {
        question: "Apa dampak sosial utama dari penemuan komputer pada abad ke-20?",
        answers: [
            { text: "Perubahan pola ekonomi", correct: false },
            { text: "Perkembangan industri otomotif", correct: false },
            { text: "Transformasi dalam pendidikan dan pekerjaan", correct: true },
            { text: "Penurunan minat dalam seni dan budaya", correct: false },
            { text: "Peningkatan penggunaan obat-obatan terlarang", correct: false },
        ],
    },

    {
        question: "Peristiwa apa yang menandai awal era komputer pribadi dan dampaknya terhadap masyarakat?",
        answers: [
            { text: "Penemuan transistor", correct: false },
            { text: "Peluncuran komputer Apple II", correct: true },
            { text: "Pembuatan Internet", correct: false },
            { text: "Terbitnya buku War Games", correct: false },
            { text: "Pembentukan Perserikatan Bangsa-Bangsa", correct: false },
        ],
    },
    {
        question: "Bagaimana peran komputer dalam Revolusi Industri 4.0 mempengaruhi lapangan pekerjaan dan sosial?",
        answers: [
            { text: "Peningkatan ketergantungan pada teknologi", correct: true },
            { text: "Peningkatan permintaan pekerja manual", correct: false },
            { text: "Penurunan angka pengangguran", correct: false },
            { text: "Kehilangan minat dalam pendidikan tinggi", correct: false },
            { text: "Meningkatnya pertumbuhan populasi dunia", correct: false },
        ],
    },

    {
        question: "Komputer ENIAC, yang dibangun pada tahun 1940-an, memiliki dampak sosial besar karena:",
        answers: [
            { text: "Memperluas kesenjangan gender di bidang teknologi", correct: true },
            { text: "Mempercepat pertumbuhan ekonomi global", correct: false },
            { text: "Mendorong penemuan roket antariksa", correct: false },
            { text: "Membantu dalam perawatan kesehatan masyarakat", correct: false },
            { text: "Menyebabkan kemunduran dalam perkembangan transportasi", correct: false },
        ],
    },

    {
        question: "Perkembangan komputer pribadi seperti IBM PC pada tahun 1980-an memberikan akses kepada masyarakat untuk:",
        answers: [
            { text: "Terhubung dengan antariksa", correct: false },
            { text: "Mengakses informasi dan komunikasi pribadi", correct: true },
            { text: "Menjalankan bisnis besar", correct: false },
            { text: "Menjadi lebih terisolasi secara sosial", correct: false },
            { text: "Mempertahankan gaya hidup tradisional", correct: false },
        ],
    },

    {

        question: "Apa yang dimaksud dengan hak kekayaan intelektual (HKI) dalam konteks produk informatika?",
        answers: [
            { text: "Hak untuk mengakses internet gratis", correct: false },
            { text: "Hak untuk mengklaim kepemilikan atas karya kreatif", correct: true },
            { text: "Hak untuk mengekspor perangkat lunak", correct: false },
            { text: "Hak untuk menghapus data pribadi dari internet", correct: false },
            { text: "Hak untuk menyalin dan mendistribusikan konten tanpa izin", correct: false },
        ],
    },

    {

        question: "Bagaimana produk informatika berkontribusi terhadap pertumbuhan ekonomi?",
        answers: [
            { text: "Dengan membatasi akses informasi", correct: false },
            { text: "Dengan menciptakan lapangan kerja baru", correct: true },
            { text: "Dengan meningkatkan biaya produksi", correct: false },
            { text: "Dengan mengurangi investasi dalam teknologi", correct: false },
            { text: "Dengan meningkatkan kebutuhan akan bahan bakar fosil", correct: false },
        ],
    },

    {
        question: " Manakah dari pernyataan berikut yang benar tentang variabel dalam pemrograman prosedural?",
        answers: [
            { text: "Variabel hanya dapat diinisialisasi sekali", correct: false },
            { text: " Variabel adalah simbol yang digunakan untuk menyimpan dan memanipulasi data", correct: true },
            { text: "Variabel harus selalu dideklarasikan sebelum digunakan", correct: false },
            { text: "Variabel hanya dapat menyimpan satu nilai pada satu waktu", correct: false },
            { text: "Variabel harus selalu dideklarasikan dengan tipe data yang sama", correct: false },
        ],
    },

    

    {
        question: " Apa yang dimaksud dengan prosedur dalam pemrograman prosedural?",
        answers: [
            { text: "Sebuah blok kode yang menjalankan operasi aritmatika", correct: false },
            { text: " ebuah blok kode yang menjalankan serangkaian instruksi secara berurutan", correct: true },
            { text: "Sebuah blok kode yang menghasilkan nilai balik", correct: false },
            { text: "Sebuah blok kode yang memungkinkan untuk melakukan percabangan", correct: false },
            { text: "Sebuah metode untuk membagi program menjadi modul terpisah", correct: false },
        ],
    },


    {
        question: "Manakah dari struktur pengendalian berikut yang digunakan untuk melakukan iterasi dalam pemrograman prosedural?",
        answers: [
            { text: "If-else", correct: false },
            { text: " For", correct: true },
            { text: "Switch", correct: false },
            { text: "Try-catch", correct: false },
            { text: "While", correct: false },
        ],
    },
];

let currentQuestionIndex = 0;
let userScore = 0;

const startButtonEl = document.querySelector(".start-btn");
const welcomeScreenEl = document.querySelector(".welcome-screen");
const quizScreenEl = document.querySelector(".quiz-screen");
const questionEl = document.querySelector(".question");
const answersButtons = document.querySelector(".answers-container");
const nextButtonEl = document.querySelector(".next-btn");

startButtonEl.addEventListener("click", startQuiz);

function startQuiz() {
    welcomeScreenEl.style.display = "none";
    // quizScreenEl.style.display = "block";
    quizScreenEl.style.display = "flex";
    currentQuestionIndex = 0;
    userScore = 0;
    nextButtonEl.innerHTML = "Next";
    nextButtonEl.style.display = "none";
    displayQuestion();
}

function displayQuestion() {
    resetContainer();
    questionEl.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach((answer) => {
        const buttonEl = document.createElement("button");
        buttonEl.innerHTML = answer.text;
        buttonEl.classList.add("ans-btn");
        answersButtons.appendChild(buttonEl);

        if (answer.correct) {
            buttonEl.dataset.correctAns = answer.correct;
        }

        // console.log(buttonEl);

        buttonEl.addEventListener("click", checkAnswer);
    });
}

function checkAnswer(e) {
    const selectedButton = e.target;
    if (selectedButton.dataset.correctAns) {
        userScore++;
        console.log(userScore);
        selectedButton.classList.add("correct-ans");
    } else {
        selectedButton.classList.add("wrong-ans");
    }

    Array.from(answersButtons.children).forEach((button) => {
        if (button.dataset.correctAns === "true") {
            button.classList.add("correct-ans");
        }
        button.disabled = "true";
    });

    nextButtonEl.style.display = "block";
}

function displayResult() {
    resetContainer();
    questionEl.innerHTML = `Quiz is Completed! <br> Your Score: <span class="score">${userScore}/${questions.length}</span>`;

    nextButtonEl.innerHTML = "Restart Quiz";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        nextButtonEl.style.display = "none";
    } else {
        displayResult();
    }
}

nextButtonEl.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        startQuiz();
    }
});

function resetContainer() {
    questionEl.textContent = "";
    answersButtons.innerHTML = "";
}

function authenticate() {
    let passwordAttempts = 3; // Menetapkan jumlah percobaan maksimum
    const delayTime = 3000; // Waktu penundaan dalam milidetik (di sini, 5000 milidetik = 5 detik)

    while (passwordAttempts > 0) { // Loop selama masih ada percobaan tersisa
        const password = prompt("Masukkan kata sandi:");

        // Ganti 'password123' dengan kata sandi yang diinginkan
        if (password === "bernasX.5") {
            // Jika kata sandi benar, lanjutkan ke situs web
            unlockWebsite();
            return; // Keluar dari fungsi setelah kata sandi benar
        } else {
            // Jika kata sandi salah, kurangi jumlah percobaan
            passwordAttempts--;

            // Tampilkan pesan kesalahan
            alert("Kata sandi salah. Sisa percobaan: " + passwordAttempts);

            // Jika tidak ada percobaan tersisa, beri waktu penundaan sebelum mencoba lagi
            if (passwordAttempts === 0) {
                alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                setTimeout(authenticate, delayTime); // Menunggu beberapa detik sebelum memanggil kembali fungsi authenticate()
                return;
            }
        }
    }
}

function unlockWebsite() {
    // Tambahkan kode untuk menghilangkan penguncian situs web
    // Contoh:
    document.body.classList.remove("locked");
}

// Panggil fungsi autentikasi saat dokumen dimuat
document.addEventListener("DOMContentLoaded", function() {
    authenticate();
});

