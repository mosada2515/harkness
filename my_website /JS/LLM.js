//this is the javascript for the harvard.html page and no other file 
document.addEventListener('DOMContentLoaded', function() {
    const classDropdown = document.getElementById('classDropdown');
    const dropdownSection = document.querySelector('.class-dropdown-section');
    const dropdownContainer = document.querySelector('.class-dropdown-container');
    const classTitle = document.querySelector('.class-title');

    // Style the dropdown section
    dropdownSection.style.display = 'flex';
    dropdownSection.style.flexDirection = 'column';
    dropdownSection.style.alignItems = 'center';
    dropdownSection.style.justifyContent = 'center';
    dropdownSection.style.minHeight = '60vh';
    dropdownSection.style.padding = '40px 20px';

    // Style the class title
    classTitle.style.fontFamily = "'Merriweather', serif";
    classTitle.style.color = '#333';
    classTitle.style.fontSize = '2.2em';
    classTitle.style.marginBottom = '30px';
    classTitle.style.textAlign = 'center';
    classTitle.style.textShadow = '1px 1px 2px rgba(0,0,0,0.1)';

    // Style the dropdown container
    dropdownContainer.style.width = '100%';
    dropdownContainer.style.maxWidth = '400px';
    dropdownContainer.style.margin = '0 auto';
    dropdownContainer.style.position = 'relative';

    // Style the dropdown
    classDropdown.style.width = '100%';
    classDropdown.style.padding = '12px 20px';
    classDropdown.style.fontSize = '16px';
    classDropdown.style.fontFamily = "'Arial', sans-serif";
    classDropdown.style.border = '1px solid #ced4da';
    classDropdown.style.borderRadius = '8px';
    classDropdown.style.backgroundColor = 'white';
    classDropdown.style.cursor = 'pointer';
    classDropdown.style.transition = 'all 0.3s ease';
    classDropdown.style.appearance = 'none';
    classDropdown.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    classDropdown.style.backgroundImage = "url('data:image/svg+xml;utf8,<svg fill=\"%23495057\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')";
    classDropdown.style.backgroundRepeat = 'no-repeat';
    classDropdown.style.backgroundPosition = 'right 10px center';
    classDropdown.style.backgroundSize = '20px';

    // Add hover effect
    classDropdown.addEventListener('mouseover', function() {
        this.style.borderColor = '#6c757d';
        this.style.boxShadow = '0 2px 8px rgba(108, 117, 125, 0.2)';
    });

    classDropdown.addEventListener('mouseout', function() {
        if (this !== document.activeElement) {
            this.style.borderColor = '#ced4da';
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
    });

    // Add focus effect
    classDropdown.addEventListener('focus', function() {
        this.style.outline = 'none';
        this.style.borderColor = '#6c757d';
        this.style.boxShadow = '0 0 0 3px rgba(108, 117, 125, 0.3)';
    });

    classDropdown.addEventListener('blur', function() {
        this.style.borderColor = '#ced4da';
        this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    });

    // Style dropdown options
    const options = classDropdown.querySelectorAll('option');
    options.forEach(option => {
        option.style.padding = '10px';
        option.style.fontSize = '16px';
    });

    // Add custom styling for the dropdown arrow
    const arrow = document.createElement('div');
    arrow.style.position = 'absolute';
    arrow.style.top = '50%';
    arrow.style.right = '15px';
    arrow.style.transform = 'translateY(-50%)';
    arrow.style.width = '0';
    arrow.style.height = '0';
    arrow.style.borderLeft = '6px solid transparent';
    arrow.style.borderRight = '6px solid transparent';
    arrow.style.borderTop = '6px solid #495057';
    arrow.style.pointerEvents = 'none';
    dropdownContainer.appendChild(arrow);
});
// Add change event listener to class dropdown
document.getElementById('classDropdown').addEventListener('change', function() { 
    // Get the selected class name
    const selectedClass = this.options[this.selectedIndex].text;
    
    // Create a new element for the typing animation
    const typingElement = document.createElement('h2');
    typingElement.className = 'typing-animation';
    typingElement.style.position = 'absolute';
    typingElement.style.top = '40%';
    typingElement.style.left = '50%';
    typingElement.style.transform = 'translate(-50%, -50%)';
    typingElement.style.fontFamily = "'Merriweather', serif";
    typingElement.style.fontSize = '2em';
    typingElement.style.color = '#333';
    typingElement.style.textAlign = 'center';
    typingElement.style.width = '100%';
    typingElement.style.transition = 'top 0.5s ease-in-out';
    
    // Append the new element to the body
    document.body.appendChild(typingElement);
    
    // Hide the class dropdown section
    const classDropdownSection = document.querySelector('.class-dropdown-section');
    classDropdownSection.style.transition = 'opacity 0.3s ease';
    classDropdownSection.style.opacity = '0';
    setTimeout(() => {
        classDropdownSection.style.display = 'none';
    }, 300);
    
    // Typing animation function
    function typeText(text, index = 0) {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            setTimeout(() => typeText(text, index + 1), 50);
        } else {
            // After typing is complete, animate to the top
            setTimeout(() => {
                typingElement.style.top = '10%';
            }, 500);
            // Then show the search box
            setTimeout(showSearchBox, 1000);
        }
    }
    
    // Start the typing animation
    setTimeout(() => {
        typeText(`Your Harvard ${selectedClass}`);
    }, 500);

    // Function to show the search box
    function showSearchBox() {
        const searchBox = document.createElement('div');
        searchBox.className = 'search-box';
        searchBox.innerHTML = `
            <input type="text" id="searchInput" placeholder="Ask your virtual professor about ${selectedClass}">
            <button id="searchButton">Ask</button>
        `;
        searchBox.style.position = 'fixed';
        searchBox.style.bottom = '20px';
        searchBox.style.left = '50%';
        searchBox.style.transform = 'translateX(-50%)';
        searchBox.style.width = '90%';
        searchBox.style.maxWidth = '800px';
        searchBox.style.display = 'flex';
        searchBox.style.alignItems = 'center';
        searchBox.style.backgroundColor = 'white';
        searchBox.style.borderRadius = '24px';
        searchBox.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        searchBox.style.overflow = 'hidden';
        searchBox.style.transition = 'all 0.3s ease';

        document.body.appendChild(searchBox);

        const searchInput = searchBox.querySelector('#searchInput');
        searchInput.style.flex = '1';
        searchInput.style.border = 'none';
        searchInput.style.padding = '15px 20px';
        searchInput.style.fontSize = '16px';
        searchInput.style.outline = 'none';
        searchInput.style.backgroundColor = '#f5f5f5';
        searchInput.style.transition = 'background-color 0.3s ease';

        const searchButton = searchBox.querySelector('#searchButton');
        searchButton.style.border = 'none';
        searchButton.style.backgroundColor = '#4a90e2';
        searchButton.style.color = 'white';
        searchButton.style.padding = '15px 30px';
        searchButton.style.fontSize = '16px';
        searchButton.style.cursor = 'pointer';
        searchButton.style.transition = 'background-color 0.3s ease';
        searchButton.style.marginLeft = '10px';
        searchButton.style.borderRadius = '20px';

        searchButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#3a7bc8';
        });
        searchButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#4a90e2';
        });
        
        const outputBox = document.createElement('div');
        outputBox.className = 'output-box';
        outputBox.style.position = 'absolute';
        outputBox.style.top = '150px';
        outputBox.style.left = '50%';
        outputBox.style.transform = 'translateX(-50%)';
        outputBox.style.width = '80%';
        outputBox.style.maxWidth = '800px';
        outputBox.style.maxHeight = '60vh';
        outputBox.style.overflowY = 'auto';
        outputBox.style.backgroundColor = 'white';
        outputBox.style.borderRadius = '10px';
        outputBox.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        outputBox.style.padding = '20px';
        outputBox.style.display = 'none';
        outputBox.style.transition = 'all 0.3s ease';
        document.body.appendChild(outputBox);

        // Create loading animation
        const loadingAnimation = document.createElement('div');
        loadingAnimation.className = 'loading-animation';
        loadingAnimation.innerHTML = `
            <div class="loading-spinner"></div>
            <div class="loading-text">Loading...</div>
        `;
        loadingAnimation.style.display = 'none';
        outputBox.appendChild(loadingAnimation);

        function handleUserInput() {
            const userInput = searchInput.value;
            if (userInput.trim()) {
                outputBox.style.display = 'block';
                const userInputDisplay = document.createElement('div');
                userInputDisplay.textContent = `You: ${userInput}`;
                userInputDisplay.style.marginBottom = '15px';
                userInputDisplay.style.color = '#333';
                userInputDisplay.style.padding = '10px';
                userInputDisplay.style.backgroundColor = '#f0f0f0';
                userInputDisplay.style.borderRadius = '10px';
                outputBox.appendChild(userInputDisplay);
                
                searchInput.value = '';
                sendToBackend(userInput);
            }
        }

        searchButton.addEventListener('click', handleUserInput);

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleUserInput();
            }
        });

        async function sendToBackend(userInput) {
            try {
                // Show loading animation
                loadingAnimation.style.display = 'flex';
                
                const response = await fetch('http://localhost:3001/api/ask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        messages: [
                            { role: "user", content: userInput }
                        ]
                    })
                });

                // Hide loading animation
                loadingAnimation.style.display = 'none';

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                
                const responseElement = document.createElement('div');
                responseElement.textContent = `Assistant: ${data.content}`;
                responseElement.style.marginBottom = '15px';
                responseElement.style.color = '#4a90e2';
                responseElement.style.padding = '10px';
                responseElement.style.backgroundColor = '#e6f2ff';
                responseElement.style.borderRadius = '10px';
                outputBox.appendChild(responseElement);

                // Scroll to the bottom of the output box
                outputBox.scrollTop = outputBox.scrollHeight;

            } catch (error) {
                // Hide loading animation on error
                loadingAnimation.style.display = 'none';
                
                console.error('Error:', error);
                const errorElement = document.createElement('div');
                errorElement.textContent = `Error: ${error.message}`;
                errorElement.style.color = 'white';
                errorElement.style.backgroundColor = '#ff4d4d';
                errorElement.style.padding = '10px';
                errorElement.style.borderRadius = '10px';
                errorElement.style.marginBottom = '15px';
                outputBox.appendChild(errorElement);
                
                // Scroll to the bottom of the output box
                outputBox.scrollTop = outputBox.scrollHeight;
            }
        }
    }
});



