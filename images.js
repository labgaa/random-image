document.addEventListener("DOMContentLoaded", function () {
  const imageGrid = document.getElementById("image-grid");

  for (let i = 1; i <= 9; i++) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    const img = document.createElement("img");
    img.src = `./test-images/${i}.jpg`;
    img.alt = `Image ${i}`;

    imgContainer.appendChild(img);
    imageGrid.appendChild(imgContainer);
  }
});
