// Get the elements
const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
const closeButton = document.getElementById("close-button");
const body = document.body; // To apply the sidebar-open class to the body
const sidebarLinks = document.querySelectorAll('.sidebar a'); // All links inside the sidebar

// Open sidebar on menu button click (mobile)
menuButton.addEventListener("click", () => {
  sidebar.classList.remove("hidden");  // Remove the 'hidden' class
  sidebar.style.transform = "translateX(0)";  // Slide in from the right
  body.classList.add("sidebar-open");  // Add the class to push the content
});

// Close sidebar on close button click
closeButton.addEventListener("click", () => {
  sidebar.style.transform = "translateX(100%)";  // Slide out to the right
  setTimeout(() => {
    sidebar.classList.add("hidden");  // Add the 'hidden' class after the transition
    body.classList.remove("sidebar-open");  // Remove the class to restore content position
  }, 300);  // 300ms delay for transition
});

// Close sidebar when a link inside the sidebar is clicked
sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.style.transform = "translateX(100%)";  // Slide out to the right
    setTimeout(() => {
      sidebar.classList.add("hidden");  // Add the 'hidden' class after the transition
      body.classList.remove("sidebar-open");  // Remove the class to restore content position
    }, 300);  // 300ms delay for transition
  });
});
