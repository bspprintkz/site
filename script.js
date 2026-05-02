const gallery = document.getElementById("gallery");

const test = [
  "https://res.cloudinary.com/demo/image/upload/sample.jpg"
];

test.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
});
