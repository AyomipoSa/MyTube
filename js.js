const videos = [
    {
        id: 9,
        title: "Introduction to JavaScript",
        channel: "Code Masters",
        views: "1.5M",
        date: "10 days ago",
        duration: "12:34",
        thumbnail: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=700"
    },
    {
        id: 8,
        title: "Introduction to Business Development",
        channel: "Code Masters",
        views: "1M",
        date: "30 days ago",
        duration: "03:34",
        thumbnail: "https://images.unsplash.com/vector-1762541489267-22f18c3c0ab0?w=700"
    },
    {
        id: 1,
        title: "Business Analysis Development",
        channel: "Code Masters",
        views: "1M",
        date: "15 days ago",
        duration: "12:34",
        thumbnail: "https://plus.unsplash.com/premium_vector-1682309270309-bc01eee5d33a?w=700"
    },
    {
        id: 2,
        title: "HTML and CSS",
        channel: "Code Masters",
        views: "5.4M",
        date: "22 days ago",
        duration: "02:34",
        thumbnail: "https://plus.unsplash.com/premium_vector-1734051504365-66343e2f29c3?w=700"
    },
    {
        id: 3,
        title: "PHP",
        channel: "Code Masters",
        views: "3M",
        date: "12 days ago",
        duration: "22:34",
        thumbnail: "https://plus.unsplash.com/premium_vector-1734528979745-eaa10d557eed?w=700"
    },
    {
        id: 4,
        title: "Get Ready with Me!!!",
        channel: "Code Masters",
        views: "200k",
        date: "30 days ago",
        duration: "02:34",
        thumbnail: "https://plus.unsplash.com/premium_photo-1704756437546-8d1176b93998?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3J3bXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 5,
        title: "CSS Basics",
        channel: "Code Masters",
        views: "1.8M",
        date: "46 days ago",
        duration: "22:34",
        thumbnail: "https://images.unsplash.com/photo-1582224369048-e4d2d7a6ba30?w=700"
    },
    {
        id: 6,
        title: "Computer Development",
        channel: "Code Masters",
        views: "100M",
        date: "45 days ago",
        duration: "12:34",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
    },
    {
        id: 7,
        title: "Importation Basics",
        channel: "Code Masters",
        views: "1M",
        date: "13 days ago",
        duration: "10:34",
        thumbnail: "https://images.unsplash.com/photo-1660817972601-fdf9f64b865a?w=700"
    }
];

function renderVideoGrid() {
    const grid = document.getElementById("videoGrid");
    if (!grid) return;

    grid.innerHTML = videos.map(video => `
        <div class="video-card">
            <img class="video-thumbnail" src="${video.thumbnail}" alt="${video.title}">
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.channel}</p>
                <p>${video.views} • ${video.date}</p>
            </div>
            <span class="video-duration">${video.duration}</span>
        </div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", renderVideoGrid);

function Darktheme() {
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "#f5f5f5";

    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    const footer = document.querySelector(".footer");
    if (header) header.style.backgroundColor = "#222";
    if (nav) nav.style.backgroundColor = "#333";
    if (footer) footer.style.backgroundColor = "#222";

    const cards = document.querySelectorAll(".video-card, .category-card");
    cards.forEach(card => {
        card.style.backgroundColor = "#222";
        card.style.color = "#f5f5f5";
    });
}

function Lighttheme() {
    document.body.style.backgroundColor = "#fafafa";
    document.body.style.color = "#222";

    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    const footer = document.querySelector(".footer");
    if (header) header.style.backgroundColor = "#ff4c4c";
    if (nav) nav.style.backgroundColor = "#ffe0e0";
    if (footer) footer.style.backgroundColor = "#ff4c4c";

    const cards = document.querySelectorAll(".video-card, .category-card");
    cards.forEach(card => {
        card.style.backgroundColor = "#ffffff";
        card.style.color = "#222";
    });
}
