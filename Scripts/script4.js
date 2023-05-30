document.addEventListener('DOMContentLoaded', function() {
    const projectElements = document.querySelectorAll('.project');
    let currentProjectIndex = 0;
    const projectInterval = 5000; // Time in milliseconds between each project change
  
    function showProject(index) {
      projectElements.forEach(function(project, i) {
        if (i === index) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    }
  
    function rotateProjects() {
      currentProjectIndex++;
      if (currentProjectIndex >= projectElements.length) {
        currentProjectIndex = 0;
      }
      showProject(currentProjectIndex);
    }
  
    // Initial setup
    showProject(currentProjectIndex);
    const projectTimer = setInterval(rotateProjects, projectInterval);
  
    // Hover handling
    projectElements.forEach(function(project) {
 
      project.addEventListener('mouseleave', function() {
        projectTimer = setInterval(rotateProjects, projectInterval);
      });
    });
  });
  
