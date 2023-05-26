
  document.addEventListener('DOMContentLoaded', function() {
    const projectElements = document.querySelectorAll('.project');
  
    projectElements.forEach(function(project) {
      const link = project.dataset.link;
      const projectText = project.querySelector('.project-text');
  
      projectText.addEventListener('click', function(e) {
        e.stopPropagation();
        if (link) {
            window.open(link, '_blank');
        }
      });
    });
  });