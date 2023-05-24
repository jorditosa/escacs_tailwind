/**
 * Import dependencies from node_modules
 * see commented examples below
 */

/**
 * Write any other JavaScript below
 */

  // Obtener la URL actual
  const currentURL = window.location.href;
  let lastPart = currentURL.substring(currentURL.lastIndexOf("/") + 1);

  // Obtener el elemento <nav> por su ID
  let header = document.getElementById("header");

  // Comprobar si la URL contiene "about.html"
  if (lastPart.includes("about.html")) {
    // Si la URL contiene "about.html", establecer el fondo blanco
    header.style.backgroundColor = "#ffffff";
  } else {
    // Si la URL no contiene "about.html", establecer el fondo gris
    header.style.backgroundColor = "#dee2e6";
  }