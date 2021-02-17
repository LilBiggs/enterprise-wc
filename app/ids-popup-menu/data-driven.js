import IdsPopupMenu from '../../src/ids-popup-menu/ids-popup-menu';

// Example for populating the Popup Menu
const popupmenuEl = document.querySelector('#popupmenu');

// Create an ajax request
const xmlhttp = new XMLHttpRequest();
const url = '/api/menu-contents';
xmlhttp.onreadystatechange = function onreadystatechange() {
  if (this.readyState === 4 && this.status === 200) {
    popupmenuEl.data = JSON.parse(this.responseText);
  }
};

// Execute the request
xmlhttp.open('GET', url, true);
xmlhttp.send();
