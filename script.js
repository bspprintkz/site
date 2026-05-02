const gallery = document.getElementById("gallery");

async function loadImages() {
  const res = await fetch("https://site-zeta-orpin.vercel.app/api/images");
  const data = await res.json();

  data.resources.forEach(item => {
    const img = document.createElement("img");

    img.src = item.secure_url;

    img.onclick = () => openLightbox(img.src);

    gallery.appendChild(img);
  });
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
