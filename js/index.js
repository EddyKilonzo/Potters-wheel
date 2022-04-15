const home = document.getElementById('home');
const projects =document.getElementById('projects');


function homePage() {
  projects.style.display= 'none';
  home.style.display = 'flex';
}
function projectsPage() {
  projects.style.display = 'block';
  home.style.display = 'none';
            
}