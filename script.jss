// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize portfolio items
    initializePortfolio();
    
    // Initialize form handling
    initializeForm();
    
    // Initialize navigation and scroll effects
    initializeNavigation();
    
    // Initialize back to top button
    initializeBackToTop();
    
    // Initialize portfolio modal
    initializeModal();
});

// Portfolio Data
const portfolioItems = [
    {
        id: 1,
        title: "Taman Minimalis Modern",
        description: "Taman dengan konsep minimalis di rumah kontemporer, menggunakan tanaman bertekstur dan material alam.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
    },
    {
        id: 2,
        title: "Taman Tropis Eksotis",
        description: "Taman dengan nuansa tropis yang kaya akan warna dan tekstur, menciptakan suasana seperti di hutan alam.",
        image: "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 3,
        title: "Taman Vertikal Dinding Hijau",
        description: "Solusi hijau untuk ruang terbatas dengan sistem taman vertikal yang menyegarkan pandangan.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 4,
        title: "Taman Jepang Zen",
        description: "Taman dengan konsep Zen yang menenangkan, menggunakan batu, kerikil, dan tanaman yang dipangkas rapi.",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 5,
        title: "Taman Mediterania",
        description: "Taman dengan inspirasi Mediterania, menampilkan tanaman tahan kering dan warna-warna cerah.",
        image: "https://images.unsplash.com/photo-1578303501857-4c4c0040d3d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 6,
        title: "Taman Kolam Renang Alami",
        description: "Integrasi taman dengan kolam renang yang menciptakan oasis pribadi di rumah Anda.",
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx