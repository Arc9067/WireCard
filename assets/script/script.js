function copyToClipboard(html) {
  const element = document.createElement("textarea");
  element.innerHTML = html;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}

let copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", function (e) {
  const html = "0x13def34a6d3b3da4daf19dfb1c8ca58ab55d3391";
  copyToClipboard(html);
  copyButton.innerHTML = `Contract Copied <i class="bi bi-bar-chart-fill"></i>`;
  setTimeout(() => {
    copyButton.innerHTML = `copy contract <i class="bi bi-bar-chart-fill"></i>`;
  }, 2000);
});
