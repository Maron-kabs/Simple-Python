function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Smooth scroll to top
    document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
}