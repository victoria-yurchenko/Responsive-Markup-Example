// document.getElementById('mobile-sidebar-btn').addEventListener('click', function() {
//     const sidebar = document.querySelector('.sidebar');
//     const mainWindow = document.getElementById('main-window');
    
//     sidebar.classList.add('show');
//     mainWindow.style.display = 'none';
// });

// document.getElementById('close-settings-btn').addEventListener('click', function() {
//     const sidebar = document.querySelector('.sidebar');
//     const main = document.getElementById('main-window');
    
//     sidebar.style.display = 'none';
//     main.style.display = 'block';
// });

// window.addEventListener('resize', function() {
//     const sidebar = document.querySelector('.sidebar');
//     const main = document.getElementById('main-window');
    
//     if (window.innerWidth > 768) {
//         sidebar.style.display = 'flex';
//         main.style.display = 'block';
//     } else {
//         sidebar.style.display = 'none';
//         main.style.display = 'block';
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const mobileSidebarBtn = document.getElementById('mobile-sidebar-btn');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const mainWindow = document.getElementById('main-window');

    mobileSidebarBtn.addEventListener('click', function() {
        sidebar.classList.add('show');
        mainWindow.style.display = 'none';
    });

    closeSettingsBtn.addEventListener('click', function() {
        sidebar.classList.remove('show');
        mainWindow.style.display = 'block';
    });

    window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
            sidebar.style.display = 'flex';
            mainWindow.style.display = 'block';
        } else {
            sidebar.classList.remove('show');
            mainWindow.style.display = 'block';
        }
    });
});