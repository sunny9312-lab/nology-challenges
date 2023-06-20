// Function to open an app modal
function openApp(appName) {
    const modal = document.getElementById('app-modal');
    const appContent = document.getElementById('app-content');
  
    // Clear previous content
    appContent.innerHTML = '';
  
    // Add content based on the selected app
    switch (appName) {
      case 'app1':
        appContent.innerHTML = '<h2>App 1 Content</h2>';
        break;
      case 'app2':
        appContent.innerHTML = '<h2>App 2 Content</h2>';
        break;
    }
      // Display the modal
      modal.style.display = 'block';
    }

    // Function to close the app modal
    function closeApp() {
      const modal = document.getElementById('app-modal');
      modal.style.display = 'none';
    }

    // Function to show the list when menu item is selected
    function showList() {
    //another part
        const listContainer = document.getElementById('list-container');
        
        // Clear previous list items
        listContainer.innerHTML = '';
      
        // Create an array of text and icons
        const items = [
          { text: 'Item 1', icon: '⚙️' },
          { text: 'Item 2', icon: '📁' },
          { text: 'Item 3', icon: '🔒' },
        ];
      
        // Generate list items
        items.forEach(function(item) {
          const listItem = document.createElement('div');
          listItem.className = 'list-item';
          listItem.innerHTML = `<span class="list-icon">${item.icon}</span>${item.text}`;
          listContainer.appendChild(listItem);
        });
      
        // Show the list container
        listContainer.style.display = 'block';
      }
      
