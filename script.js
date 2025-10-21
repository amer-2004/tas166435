
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#contact a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      console.log("Clicked contact link:", link.href);
    });
  });
});
