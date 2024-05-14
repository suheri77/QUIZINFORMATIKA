//Version 1//
const questions = [
    {
        question: "Perkembangan komputer pribadi seperti IBM PC pada tahun 1980-an memberikan akses kepada masyarakat untuk:", //1//
        answers: [
            { text: "Terhubung dengan antariksa", correct: false },
            { text: "Menjalankan bisnis besar", correct: false },
            { text: "Mengakses informasi dan komunikasi pribadi", correct: true },
            { text: "Menjadi lebih terisolasi secara sosial", correct: false },
            { text: "Mempertahankan gaya hidup tradisional", correct: false },
        ],
    },

    {
        question: "Peran internet dalam komunikasi sosial ditandai oleh:", //2//
        answers: [
            { text: " Munculnya surat kabar cetak", correct: false },
            { text: "Pertumbuhan media sosial dan jejaring online", correct: true },
            { text: "Penurunan minat dalam budaya populer", correct: false },
            { text: "Penurunan penggunaan perangkat lunak komputer", correct: false },
            { text: "Peningkatan dalam perdagangan luar negeri", correct: false },
        ],
    },
    {
        question: "Bagaimana perkembangan komputer telah mengubah cara pendidikan disampaikan dan diterima di masyarakat?", //3//
        answers: [
            { text: "Mendorong pembelajaran berbasis teknologi", correct: true },
            { text: "Mengurangi akses ke informasi", correct: false },
            { text: "Meningkatkan ketidaksetaraan pendidikan", correct: false },
            { text: "Menghambat kemampuan siswa untuk berkolaborasi", correct: false },
            { text: "Meningkatkan kecenderungan plagiarisme", correct: false },
        ],
    },

    {
        question: "Apa dampak positif dari peningkatan aksesibilitas internet di masyarakat?",  //4//
        answers: [
            { text: "Peningkatan kolaborasi global", correct: true },
            { text: "Peningkatan isolasi sosial", correct: false },
            { text: "Penurunan keterampilan teknologi", correct: false },
            { text: "Perubahan signifikan dalam kebiasaan makan", correct: false },
            { text: "Penurunan minat dalam berolahraga", correct: false },
        ],
    },

    {
        question: "Bagaimana komputer telah mempengaruhi industri hiburan dan budaya populer?", //5//
        answers: [
            { text: "Mengurangi variasi dalam bentuk hiburan", correct: false },
            { text: "Meningkatkan partisipasi dalam olahraga", correct: false },
            { text: "Memberdayakan seniman untuk bereksperimen", correct: true },
            { text: "Mempercepat hilangnya bahasa dan budaya lokal", correct: false },
            { text: "Meningkatkan minat dalam pertunjukan langsung", correct: false },
        ],
    },

    {

        question: "Siapakah ilmuwan yang dikenal karena perannya dalam memecahkan kode Enigma Jerman selama Perang Dunia II dan kontribusinya dalam pengembangan komputer modern yang digunakan banyak orang-orang saat ini?", //6//
        answers: [
            { text: "Charles Babbage", correct: false },
            { text: "John von Neumann", correct: false },
            { text: "Grace Hopper", correct: false },
            { text: " Joseph Oppenheimer", correct: false },
            { text: "Alan Turing", correct: true },
        ],
    },

    {

        question: "Manakah dari berikut ini yang bukan dampak positif perkembangan komputer terhadap kehidupan sosial?", //7//
        answers: [
            { text: "Meningkatkan akses informasi dan komunikasi", correct: false },
            { text: "Mempermudah transaksi keuangan dan perdagangan ", correct: false },
            { text: "Mempercepat proses belajar dan mengajar ", correct: false },
            { text: "Meningkatkan keterpencilan dan isolasi sosial ", correct: true },
            { text: "Membuka peluang kerja baru di bidang teknologi", correct: false },
        ],
    },

    {
        question: "Bagaimana perkembangan komputer memengaruhi cara kita berinteraksi satu sama lain?", //8//
        answers: [
            { text: "Mengurangi interaksi tatap muka dan meningkatkan interaksi online ", correct: false },
            { text: "Mempermudah komunikasi jarak jauh dan memperkuat hubungan antar individu ", correct: false },
            { text: "Memicu cyberbullying dan pelecehan online ", correct: false },
            { text: "Semua jawaban benar ", correct: false },
            { text: " Hanya jawaban A dan B yang benar", correct: true },
        ],
    },

   

    {
        question: " Bagaimana perkembangan komputer memengaruhi cara kita mengonsumsi informasi?", //9//
        answers: [
            { text: "Meningkatkan akses ke berbagai sumber informasi ", correct: false },
            { text: " Memudahkan verifikasi kebenaran informasi ", correct: false },
            { text: "Meningkatkan risiko penyebaran informasi palsu ", correct: false },
            { text: "Semua jawaban benar ", correct: true },
            { text: "Hanya jawaban A dan B yang benar", correct: false },
        ],
    },


    {
        question: "Bagaimana perkembangan komputer memengaruhi cara masyarakat berbelanja?", //10//
        answers: [
            { text: "Mempermudah perbandingan harga dan produk ", correct: false },
            { text: "Semua jawaban benar ", correct: true },
            { text: "Munculnya e-commerce dan platform belanja online ", correct: false },
            { text: " Meningkatkan risiko penipuan online ", correct: false },
            { text: "Hanya jawaban A dan B yang benar", correct: false },
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
    const delayTime = 3000; // Waktu penundaan dalam milidetik (di sini, 3000 milidetik = 3 detik)
    let firstPasswordEntered = false;
    let secondPasswordEntered = false;

    while (passwordAttempts > 0) { // Loop selama masih ada percobaan tersisa
        if (!firstPasswordEntered) {
            const firstPassword = prompt("Masukkan kata sandi pertama:");

            // Ganti 'password123' dengan kata sandi yang diinginkan
            if (firstPassword === "bernasX") {
                firstPasswordEntered = true;
                alert("Kata sandi pertama benar. Masukkan kata sandi kedua.");
            } else {
                passwordAttempts--;
                alert("Kata sandi pertama salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticate, delayTime); // Menunggu beberapa detik sebelum memanggil kembali fungsi authenticate()
                    return;
                }
            }
        } else if (!secondPasswordEntered) {
            const secondPassword = prompt("Masukkan kata sandi kedua:");

            // Ganti 'password123' dengan kata sandi yang diinginkan
            if (secondPassword === "bernasX.4") {
                // Jika kedua kata sandi benar, lanjutkan ke situs web
                secondPasswordEntered = true;
                unlockWebsite();
                return; // Keluar dari fungsi setelah kedua kata sandi benar
            } else {
                passwordAttempts--;
                alert("Kata sandi kedua salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticate, delayTime); // Menunggu beberapa detik sebelum memanggil kembali fungsi authenticate()
                    return;
                }
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

const nextBtn = document.querySelector('.next-btn');

    // Event listener for answer button clicks
    document.querySelector('.answers-container').addEventListener('click', (event) => {
      if (event.target.classList.contains('ans-btn')) {
        // Your validation logic here (check for at least one selected answer)
        if (/* validation passes */) {
          nextBtn.disabled = false; // Enable next button if validation passes
        }
      }
    });






