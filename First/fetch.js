// Get DOM elements
const homeButton = document.getElementById('homeButton');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const filterButton = document.getElementById('filterButton');
const filterComponent = document.getElementById('filterComponent');
const locationSelect = document.getElementById('locationSelect');
const roleSelect = document.getElementById('roleSelect');
const submitButton = document.getElementById('submitButton');
const resultsDiv = document.getElementById('results');
const fetchedStudentsList = document.getElementById('fetchedStudentsList');
// Get DOM elements

// Event listener
filterButton.addEventListener('click', () => {
  if (filterComponent.style.display === 'none') {
    filterComponent.style.display = 'block';
  } else {
    filterComponent.style.display = 'none';
  }
});

// Event listeners
homeButton.addEventListener('click', () => {
  // Implement home button functionality
});
// Event listeners
searchButton.addEventListener('click', () => {
  const searchValue = searchInput.value;
  if (searchValue === '') {
    searchInput.classList.toggle('animate');
  } else {
    // Perform search and display results
  }
});

// Event listener
searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value;
    if (searchValue === '') {
      resultsDiv.innerHTML = `<img src="image.png" alt="Loading Image">`;
    } else {
      // Perform search and display results
      const searchResults = ['Click to add Result 1', 'Click to add Result 2', 'Click to add Result 3']; // Replace with actual search results
      displayResults(searchResults);
    }
  });

// Function to display search results
function displayResults(results) {
    let html = '';
    for (let i = 0; i < results.length; i++) {
      html += `<p class="resultItem" data-index="${i}">${results[i]}</p>`;
    }
    resultsDiv.innerHTML = html;
  
    const resultItems = document.getElementsByClassName('resultItem');
    for (let i = 0; i < resultItems.length; i++) {
      resultItems[i].addEventListener('click', (event) => {
        const selectedResult = event.target;
        const selectedIndex = selectedResult.getAttribute('data-index');
        // Perform selection logic with the selected result
        addToFetchedStudentsList(selectedResult.textContent, selectedIndex);
      });
    }
  }
  
  // Function to add selected result to the fetched students list
  function addToFetchedStudentsList(name, id) {
    const listItem = document.createElement('li');
    listItem.textContent = `${name} (ID: ${id})`;
    fetchedStudentsList.appendChild(listItem);
  }
  
filterButton.addEventListener('click', () => {
  filterComponent.classList.toggle('hidden');
});

submitButton.addEventListener('click', () => {
  filterComponent.classList.add('hidden');
});

resultsDiv.addEventListener('click', (event) => {
  const clickedElement = event.target;
  if (clickedElement.tagName === 'P') {
    const studentName = clickedElement.textContent;
    const studentId = clickedElement.getAttribute('data-id');
    const listItem = document.createElement('li');
    listItem.textContent = `${studentName} (ID: ${studentId})`;
    fetchedStudentsList.appendChild(listItem);
  }
});


