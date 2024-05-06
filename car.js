



function showPopup(type) {
    const cashPopup = document.getElementById('cashPopup');
    const buyPopup = document.getElementById('buyPopup');

    if (type === 'cash') {
        cashPopup.style.display = 'block';
        buyPopup.style.display = 'none';
    } else if (type === 'buy') {
        buyPopup.style.display = 'block';
        cashPopup.style.display = 'none';
    }
}


window.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}



function showSection(sectionId) {
    const allSections = document.querySelectorAll('.gallery-section');
    allSections.forEach(section => {
        section.style.display = 'none'; 
        section.classList.remove('visible'); 
    });

    const section = document.getElementById(sectionId);
    section.style.display = 'block';
    section.classList.add('visible'); 
    currentPhotos = sectionId === 'interior' ? interiorPhotos : exteriorPhotos; 
    currentPhotoIndex = 0; 
    showGalleryPhotos();
} 
