const novels = [
    {
        title: "Fana-e-Hayat",
        author: "Alkash",
        instagram: "https://www.instagram.com/alkashdiaries/",
        genre: "Mystery · Romance",
        status: "Complete",
        description: "A world of secrets, revenge, and mysteries waiting to unfold.",
        cover: "Fana e hayat cover.jpg",
        pdf: "https://drive.google.com/file/d/1GMNFgj07nnj1pb6nzYP-OlnwbfBB-yMt/view?usp=drivesdk"
    },
    {
        title: "Na-gufta",
        author: "Aiman Khan",
        instagram: "https://www.instagram.com/aimankwrites/",
        genre: "Social & Psychological Fiction",
        status: "Complete",
        description: "She wanted to speak, but words had abandoned her. And by the time someone finally understood her silence, it was already too late.",
        cover: "IMG_20261016_184153_970.jpg",
        pdf: "https://drive.google.com/file/d/1iiXsesZa1pHnMnvCBJRLf7bzrOmq2CkO/view?usp=drivesdk"
    },
    {
        title: "Mazi, Haal Aur Mustaqbil",
        author: "Aiman Khan",
        instagram: "https://www.instagram.com/aimankwrites/",
        genre: "Article",
        status: "Complete",
        description: "Teen pahelo, ek zindagi",
        cover: "Mazi, haal aur mustqbil.jpg",
        pdf: "https://drive.google.com/file/d/1d4wIOUUqquHY98ehgJjqtIzHfogZphN7/view?usp=drivesdk"
    },
    {
        title: "Islaah",
        author: "Aiman Khan",
        instagram: "https://www.instagram.com/aimankwrites/",
        genre: "Article",
        status: "Complete",
        description: "Zindagi ka woh pehlu jo humein bachpan mein aage nahi badhne deta, baron ke saamne haq par bolna badtameezi nahi.",
        cover: "Islaah.jpg",
        pdf: "https://drive.google.com/file/d/1HtwdExZ5Ceyq9_fb7Vfk4o2ESCWon86m/view?usp=drivesdk"
    },
    {
        title: "Mehandi ka rang pheeka",
        author: "Abeera Kanwal",
        instagram: "https://www.instagram.com/abeera_abduljabbar",
        genre: "Soft Romance · After Marriage · Age Difference · Light Hearted",
        status: "Complete",
        description: "کوئی بھی چیز محبت کے رنگوں کو ماند نہیں کر سکتی کیونکہ محبت کے رنگ کائنات کے سب سے گہرے رنگ ہوتے ہیں جن میں اضافہ مان اور احترام سے ہوتا ہے۔",
        cover: "Mehandi ka rang pheeka.jpg",
        pdf: "https://drive.google.com/file/d/1FdMBYBz1me3S2BU7R54qwwcdC-BX8Tog/view?usp=drivesdk"
    },
    {
        title: "Lahuzda Yaadain",
        author: "Abeera Kanwal",
        genre: "Family Based · Azadi Special · Past & Present · Sacrifice",
        status: "Complete",
        description: "یہ افسانہ قیامِ پاکستان کے وقت ہجرت کرنے والی خاتون کی کہانی ہے۔ اس افسانے میں محبت اور قربانی کے رنگوں کو ماضی اور حال میں دکھایا گیا ہے۔",
        cover: "Lahuzda Yaadain.jpg",
        instagram: "https://www.instagram.com/abeera_abduljabbar/",
        pdf: "https://drive.google.com/file/d/1TTv63FZtIP0ITlbFRVZYaHPtDhtQgf2w/view?usp=drivesdk"
    },
    {
        title: "Sathi",
        author: "Abeera Kanwal",
        genre: "Family Based · Friendship · Loyalty",
        status: "Complete",
        description: "یہ کہانی ہے ساتھ نبھانے والوں کی۔ جنید انصاری اور اس کی مخلص ساتھی عفراء انصاری کی۔ ایک محبت بھرے خاندان میں چھپے حاسدین کی۔ والدین اور اولاد کے تعلق کی۔ کہانی ہے اللہ پر توکل کی اور گر کر دوبارہ اٹھنے کی۔ ایک دوسرے کا مان برقرار رکھنے کی۔",
        cover: "Sathi.jpg",
        instagram: "https://www.instagram.com/abeera_abduljabbar/",
        pdf: "https://drive.google.com/file/d/1JmFMKB4YZjaN0Bg50nE5ELV440RX7O64/view?usp=drivesdk"
    },
    {
        title: "Maqsad",
        author: "Fatima Asghar",
        genre: "Crime Thriller",
        status: "Ongoing",
        description: "مقصد اسلام آباد کے پس منظر میں لکھی گئی ایک کرائم تھرلر ہے، جہاں عزت دار چہرے اکثر نقاب ثابت ہوتے ہیں، اور سب سے قریبی لوگ بھی وہ نہیں ہوتے جو دکھائی دیتے ہیں۔ مقصد تحقیقات کے نیچے محبت، پچھتاوے، اور کھو دیے گئے لوگوں کے قرض کی ایک خاموش کہانی چلتی ہے۔",
        cover: "Maqsad.jpg",
        instagram: "https://www.instagram.com/fatima.asghar._/",
        pdf: "https://drive.google.com/file/d/1iEH963zBef69VoRAa1rgvLcaK74ETIXx/view?usp=drivesdk"
    },
    {
        title: "Tum Meri Panha Ho",
        author: "NOOR-E-MUQADAS",
        genre: "Mystery · Romance",
        status: "Complete",
        description: "کچھ راز ماضی کی ایسی زنجیریں ہوتے ہیں جو حال کو بھی قید کر لیتے ہیں، اور کچھ رشتے انہی رازوں کے سائے میں جنم لیتے ہیں۔ یہ کہانی ہے خوف، محبت، ٹوٹے ہوئے خوابوں اور اُن چھپے ہوئے رازوں کی، جو کئی زندگیوں کو ہمیشہ کے لیے بدل دینے کی طاقت رکھتے ہیں۔",
        cover: "Tum Meri Panha Ho.jpg",
        instagram: "https://www.instagram.com/qalamsekahanitak_/",
        pdf: "https://drive.google.com/file/d/1wwbZw8t5eMsRgsLwTSFCXQeQkY3T_ltJ/view?usp=drivesdk"
    },
    {
        title: "Ishq Ka Ulta Button",
        author: "Humaira Arshad",
        instagram: "https://www.instagram.com/humii._writes/",
        genre: "Friendship · University Life · Rom-Com · Light-hearted Satire",
        status: "Complete",
        description: "یہ ایک مزاحیہ اور رومانوی کہانی ہے جس میں محبت کے سیدھے راستے کو الٹے اور انوکھے طریقے سے دکھایا گیا ہے۔ اس میں روایتی سنجیدہ عشق کے بجائے کرداروں کی نادانیوں، نوک جھونک اور الٹی سیدھی تدبیروں سے بھرپور ایک دلچسپ اور ہلکا پھلکا ماحول پیش کیا گیا ہے۔",
        cover: "Ishq Ka Ulta Button.jpg",
        pdf: "https://drive.google.com/file/d/1sFGKpdACqTU-tHEzU4T-dAeLkkp9hejn/view?usp=drivesdk"
    },
    {
        title: "Uqdah (Episode 01)",
        author: "Aliza Saeed (علیزہ سعید)",
        instagram: "https://www.instagram.com/alizah.official_/",
        genre: "Psychological Crime Thriller",
        status: "Ongoing",
        description: "A forensic pathologist falls in love with a famous biker while handling a serial killer case. The truth is revealed at the end, with insane plot twists!",
        cover: "Uqdah.jpg",
        pdf: "https://drive.google.com/file/d/1oxU7O0aDdb3l_-L1hgsLTflNGu5xArb0/view?usp=drivesdk"
    },
    {
        title: "Phir Bahar Aie (پھر بہار آئی)",
        author: "Isha Zahra (اشا زہرہ)",
        instagram: "https://www.instagram.com/ishazahra.writes/",
        genre: "Love at First Sight · Social Issues · Light Romance · Emotional · Multiple Characters · Sacrifice · Regret · Forgiveness",
        status: "Complete",
        description: "A complete emotional story exploring love at first sight, social issues, sacrifice, regret, and forgiveness through the lives of multiple characters.",
        cover: "Phir Bahar Aie.jpg",
        pdf: "https://drive.google.com/file/d/1xBr41V5XraQEWwv8Fl9XS_BYEdHNC9Df/view?usp=drivesdk"
    },
    {
        title: "Ham Saath Hain",
        author: "Narmin",
        instagram: "https://www.instagram.com/narmin_novels/",
        genre: "Friendship · Broken Love · Mystery",
        status: "Episode 01",
        description: "A story of friendship, broken love, and mystery.",
        cover: "Ham Saath Hain.jpg",
        pdf: "https://drive.google.com/file/d/1pzHQ0attsoA4a99kYsvei2Y7NUA79spY/view?usp=drivesdk"
    },
    {
        title: "سرمائی",
        author: "Haleema Sadia",
        genre: "Revenge · Love",
        status: "Complete",
        description: "یہ کہانی ایسی ہے جس میں آپ کو ہر طرح کا احساس دیکھنے کو ملے گا۔ یہ کہانی ہے ایسے لوگوں کی جن کی زندگی میں بہت سی تکلیفیں آئیں، کچھ نے صبر کیا اور کچھ نے دوسروں کی زندگی برباد کی۔",
        cover: "سرمائی.jpg",
        pdf: "https://drive.google.com/file/d/1h9NOZOcRMBN4O_drD6mcIq9C-L5vpcCX/view?usp=drivesdk"
    },
];

const grid = document.getElementById("book-grid");
const search = document.getElementById("search");
const count = document.getElementById("book-count");

function renderNovels(query = "") {
    const filtered = novels.filter(book => {
        const text = `${book.title} ${book.author} ${book.genre} ${book.status}`.toLowerCase();
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

        const info = document.createElement("div");
        info.className = "book-info";

        const genre = document.createElement("p");
        genre.className = "genre";
        genre.textContent = book.genre;

        const status = document.createElement("span");
        status.className = `book-status ${book.status.toLowerCase()}`;
        status.textContent = book.status;

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.className = "author";
        author.textContent = `By ${book.author}`;

        const instagramLink = document.createElement("a");
        instagramLink.className = "instagram-link";
        instagramLink.href = book.instagram || "#";
        instagramLink.target = "_blank";
        instagramLink.rel = "noopener noreferrer";
        instagramLink.textContent = book.instagram
            ? "@" + book.instagram.split("/").filter(Boolean).pop().replace(/^@/, "")
            : "";

        if (!book.instagram) {
            instagramLink.hidden = true;
        }

        instagramLink.addEventListener("click", event => {
            event.stopPropagation();
        });

        const description = document.createElement("p");
        description.className = "description";
        description.textContent = book.description;

        info.append(genre, status, title, author, instagramLink, description);

        // Episodic novels: display a button for each PDF
        if (Array.isArray(book.pdfs) && book.pdfs.length > 0) {
            const episodeHeading = document.createElement("p");
           episodeHeading.className = "episode-heading";
            episodeHeading.textContent = "READ EPISODES";
            info.appendChild(episodeHeading);

            book.pdfs.forEach(pdf => {
                if (!pdf.link) return;

                const link = document.createElement("a");
                link.className = "download-btn";
                link.href = pdf.link;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.textContent = pdf.title || "READ PDF";

                link.addEventListener("click", event => {
                    event.stopPropagation();
                });

                info.appendChild(link);
            });
        } 
        // Regular novels: display one PDF button
        else if (book.pdf) {
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

        if (book.title === "Fana-e-Hayat") {
            card.style.cursor = "pointer";
            card.tabIndex = 0;
            card.setAttribute("role", "link");
            card.setAttribute("aria-label", "View Fana-e-Hayat novel details");

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

search.addEventListener("input", event => {
    renderNovels(event.target.value);
});

renderNovels();
