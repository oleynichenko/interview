(function() {
  const firstBlock = document.querySelector(".first");
  const secondBlock = document.querySelector(".second");

  if (firstBlock.children.length > 0) {
    secondBlock.style.display = "none";
    firstBlock.style.display = "block";
  } else {
    secondBlock.style.display = "block";
    firstBlock.style.display = "none";
  }
})();