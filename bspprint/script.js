const cloudName = "YOUR_CLOUD_NAME"; // ← замени
const folder = "portfolio";

const gallery = document.getElementById("gallery");

async function loadImages() {
  const url = `https://res.cloudinary.com/${cloudName}/image/list/${folder}.json`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    data.resources.forEach(item => {
      const img = document.createElement("img");

      img.src = `https://res.cloudinary.com/${cloudName}/image/upload/w_600/${item.public_id}.jpg`;

      img.onclick = () => openLightbox(img.src);

      gallery.appendChild(img);
    });

  } catch (err) {
    console.error("Ошибка Cloudinary", err);
  }
}

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = src;
  lightbox.style.display = "flex";
}

document.getElementById("lightbox").onclick = () => {
  document.getElementById("lightbox").style.display = "none";
};

loadImages();