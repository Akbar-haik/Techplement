document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to courses section
    document.querySelector(".btn-secondary").addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector("#courses").scrollIntoView({ behavior: "smooth" });
    });
  
    // Search and Filter Functionality
    const searchInput = document.getElementById('course-search');
    const categoryFilter = document.getElementById('category-filter');
    const courseItems = document.querySelectorAll('.course-item');
  
    searchInput.addEventListener('input', filterCourses);
    categoryFilter.addEventListener('change', filterCourses);
  
    function filterCourses() {
      const searchText = searchInput.value.toLowerCase();
      const selectedCategory = categoryFilter.value;
  
      courseItems.forEach(item => {
        const courseName = item.querySelector('h3').textContent.toLowerCase();
        const courseCategory = item.getAttribute('data-category');
  
        if (
          courseName.includes(searchText) &&
          (selectedCategory === 'all' || courseCategory === selectedCategory)
        ) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }
  });
  