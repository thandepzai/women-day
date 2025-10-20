onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

function showPage() {
  const hash = window.location.hash.replace("#", ""); // bỏ #
  const img = document.querySelector("#anh-hien");
  const text = document.querySelector("#text");

  switch (hash) {
    case "vo-yeu":
      img.src = "./image/vo-yeu.jpeg";
      text.textContent = "𝓿𝓸̛̣ 𝔂𝓮̂𝓾";
      break;
    case "chi-dung":
      img.src = "./image/dung.jpg";
      text.textContent = "𝓒𝓱𝓲̣ 𝓓𝓾𝓷𝓰";
      break;
    case "ha-hit":
      img.src = "./image/ha.jpg";
      text.textContent = "𝓒𝓱𝓲̣ 𝓗𝓪̀";
      break;
    case "hai-anh":
      img.src = "./image/hai-anh.png";
      text.textContent = "𝓒𝓱𝓲̣ 𝓗𝓪̉𝓲 𝓐𝓷𝓱";
      break;
    case "mamy":
      img.src = "./image/mamy.jpeg";
      text.textContent = "mẹ 𝔂𝓮̂𝓾";
      break;
    default:
      text.textContent = "𝓿𝓸̛̣ 𝔂𝓮̂𝓾";
  }
}

window.addEventListener("hashchange", showPage);
window.addEventListener("load", showPage);
