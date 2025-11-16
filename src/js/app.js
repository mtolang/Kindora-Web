// This file contains the JavaScript code for the web application.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Web application is loaded and ready.');

    // Example function to handle a button click
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }
});