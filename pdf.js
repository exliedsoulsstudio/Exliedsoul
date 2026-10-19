

const novels = [
    {
        title: "Fana-e-Hayat",
        author: "Alkash",
        instagram: "https://www.instagram.com/alkashdiaries/",
        genre: "Mystery · Romance",
        description:
            "A world of secrets, revenge, and mysteries waiting to unfold.",
        cover: "Fana e hayat cover.jpg",
        pdf: "https://novelstudiopk.com/2026/09/02/novels/fana-e-hayat-by-alkash-complete/"
    },
    {
        title: "Na-gufta",
        author: "Aiman Khan",
        instagram: "https://www.instagram.com/aimankwrites/",
        genre: "Social & Psychological Fiction",
        description:
            "She wanted to speak, but words had abandoned her. And by the time someone finally understood her silence, it was already too late.",
        cover: "IMG_20261016_184153_970.jpg",
        pdf: "https://drive.google.com/file/d/1iiXsesZa1pHnMnvCBJRLf7bzrOmq2CkO/view?usp=drivesdk"
    },
    {
        title: "Mazi, Haal Aur Mustaqbil",
        author: "Aiman Khan",
        instagram: "https://www.instagram.com/aimankwrites/",
        genre: "Article",
        description: "Teen pahelo, ek zindagi",
        cover: "Mazi, haal aur mustqbil.jpg",
        pdf: "https://drive.google.com/file/d/1d4wIOUUqquHY98ehgJjqtIzHfogZphN7/view?usp=drivesdk"
    },
    {
        title: "Islaah",
        author: "Aiman Khan",
        instagram: "https://www.instagram.com/aimankwrites/",
        genre: "Article",
        description:
            "Zindagi ka woh pehlu jo humein bachpan mein aage nahi badhne deta, baron ke saamne haq par bolna badtameezi nahi.",
        cover: "Islaah.jpg",
        pdf: "https://drive.google.com/file/d/1HtwdExZ5Ceyq9_fb7Vfk4o2ESCWon86m/view?usp=drivesdk"
    },
    {
    title: "Mehandi ka rang pheeka",
    author: "Abeera Kanwal",
    instagram: "https://www.instagram.com/abeera_abduljabbar",
    genre: "Soft Romance · After Marriage · Age Difference · Light Hearted",
    description: "کوئی بھی چیز محبت کے رنگوں کو ماند نہیں کر سکتی کیونکہ محبت کے رنگ کائنات کے سب سے گہرے رنگ ہوتے ہیں جن میں اضافہ مان اور احترام سے ہوتا ہے۔",
    cover: "Mehandi ka rang pheeka.jpg",
    pdf: "https://drive.google.com/file/d/1FdMBYBz1me3S2BU7R54qwwcdC-BX8Tog/view?usp=drivesdk"
},
    {
    title: "Lahuzda Yaadain",
    author: "Abeera Kanwal",
    genre: "Family Based · Azadi Special · Past & Present · Sacrifice",
    description: "یہ افسانہ قیامِ پاکستان کے وقت ہجرت کرنے والی خاتون کی کہانی ہے۔ اس افسانے میں محبت اور قربانی کے رنگوں کو ماضی اور حال میں دکھایا گیا ہے۔",
    cover: "Lahuzda Yaadain.jpg",
    instagram: "https://www.instagram.com/abeera_abduljabbar/",
    pdf: "https://drive.google.com/file/d/1TTv63FZtIP0ITlbFRVZYaHPtDhtQgf2w/view?usp=drivesdk"
},

{
    title: "Sathi",
    author: "Abeera Kanwal",
    genre: "Family Based · Friendship · Loyalty",
    description: "یہ کہانی ہے ساتھ نبھانے والوں کی۔ جنید انصاری اور اس کی مخلص ساتھی عفراء انصاری کی۔ ایک محبت بھرے خاندان میں چھپے حاسدین کی۔ والدین اور اولاد کے تعلق کی۔ کہانی ہے اللہ پر توکل کی اور گر کر دوبارہ اٹھنے کی۔ ایک دوسرے کا مان برقرار رکھنے کی۔",
    cover: "Sathi.jpg",
    instagram: "https://www.instagram.com/abeera_abduljabbar/",
    pdf: "https://drive.google.com/file/d/1JmFMKB4YZjaN0Bg50nE5ELV440RX7O64/view?usp=drivesdk"
},
];


const grid = document.getElementById("book-grid");
const search = document.getElementById("search");
const count = document.getElementById("book-count");

function renderNovels(query = "") {
    const filtered = novels.filter(book => {
        const text =
            `${book.title} ${book.author} ${book.genre}`.toLowerCase();

        return text.includes(query.toLowerCase());
    });

    count.textContent = `${filtered.length} BOOKS`;
    grid.innerHTML = "";

    if (filtered.length === 0) {
        const message = document.createElement("p");
        message.className = "empty-message";
        message.textContent = "No novels found.";
        grid.appendChild(message);
        return;
    }

    filtered.forEach(book => {
        const card = document.createElement("article");
        card.className = "book-card";

        // Cover image or placeholder
        let cover;

        if (book.cover) {
            cover = document.createElement("img");
            cover.className = "book-cover";
            cover.src = book.cover;
            cover.alt = `${book.title} book cover`;
        } else {
            cover = document.createElement("div");
            cover.className = "cover-placeholder";

            const coverTitle = document.createElement("div");
            coverTitle.className = "cover-title";
            coverTitle.textContent = book.title;

            const label = document.createElement("small");
            label.textContent = "EXILED SOULS";

            cover.append(coverTitle, label);
        }

        // Novel information
        const info = document.createElement("div");
        info.className = "book-info";

        const genre = document.createElement("p");
        genre.className = "genre";
        genre.textContent = book.genre;

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.className = "author";
        author.textContent = `By ${book.author}`;

        const description = document.createElement("p");
        description.className = "description";
        description.textContent = book.description;

        info.append(genre, title, author, description);
         const instagramLink = document.createElement("a");

instagramLink.className = "instagram-link";
instagramLink.href = book.instagram || "#";
instagramLink.target = "_blank";
instagramLink.rel = "noopener noreferrer";

instagramLink.textContent = book.instagram
    ? book.instagram.split("/").filter(Boolean).pop()
    : "";

if (!book.instagram) {
    instagramLink.hidden = true;
}

instagramLink.addEventListener("click", event => {
    event.stopPropagation();
});

info.append(genre, title, author, instagramLink, description);

        // PDF download button
        if (book.pdf) {
            const link = document.createElement("a");
            link.className = "download-btn";
            link.href = book.pdf;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "DOWNLOAD PDF";

            link.addEventListener("click", event => {
                event.stopPropagation();
            });

            info.appendChild(link);
        } else {
            const message = document.createElement("p");
            message.className = "description";
            message.textContent = "PDF coming soon.";
            info.appendChild(message);
        }

        card.append(cover, info);

        // Open Fana-e-Hayat details page on card click
        if (book.title === "Fana-e-Hayat") {
            card.style.cursor = "pointer";
            card.tabIndex = 0;
            card.setAttribute("role", "link");
            card.setAttribute(
                "aria-label",
                "View Fana-e-Hayat novel details"
            );

            card.addEventListener("click", () => {
                window.location.href = "novel.html";
            });

            card.addEventListener("keydown", event => {
                if (event.key === "Enter") {
                    window.location.href = "novel.html";
                }
            });
        }

        grid.appendChild(card);
    });
}

// Search novels
search.addEventListener("input", event => {
    renderNovels(event.target.value);
});

// Display novels
renderNovels();
