// Section Heading Color Change by Javascript For of loop
const h2Elements = document.getElementsByTagName('h2');
for (const h2Element of h2Elements) {
    h2Element.style.color = '#FA804C';
}

// Product Title color change by class name with javascript
const h3Elements = document.getElementsByClassName('fw-bold');
for (const h3Element of h3Elements) {
    h3Element.style.color = '#FA804C';
}

// Remove Buy Now Button with click
document.getElementById('remove-buynow-btn').addEventListener('click', function(event){
    event.target.remove(event.target);
});