// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        localStorage.setItem('theme', 'theme-light');

        // set color scheme
        var pageColorScheme = document.getElementById("colorScheme");
        pageColorScheme.setAttribute('href', "/stylesheets/light.css");

        // set twitter theme
        var twitter = document.getElementById('twitter-timeline');
        if (twitter != null) {
            twitter.setAttribute('data-theme', "light");
        }

        var slider = document.getElementById('slider');
        if (slider) {
            slider.checked = false;
        }
    } else {
        setTheme('theme-dark');
        localStorage.setItem('theme', 'theme-dark');
        
        // set color scheme
        var pageColorScheme = document.getElementById("colorScheme");
        pageColorScheme.setAttribute('href', "/stylesheets/dark.css");

        // set twitter theme
        var twitter = document.getElementById('twitter-timeline');
        if (twitter != null) {
            twitter.setAttribute('data-theme', "dark");
        }

        var slider = document.getElementById('slider');
        if (slider) {
            slider.checked = true;
        }
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        localStorage.setItem('theme', 'theme-dark');
        
        // set color scheme
        var pageColorScheme = document.getElementById("colorScheme");
        pageColorScheme.setAttribute('href', "/stylesheets/dark.css");

        // set twitter theme 
        var twitter = document.getElementById('twitter-timeline');
        if (twitter != null) {
            twitter.setAttribute('data-theme', "dark");
        }
        
        var slider = document.getElementById('slider');
        if (slider) {
            slider.checked = true;
        }
    } else {
        setTheme('theme-light');
        localStorage.setItem('theme', 'theme-light');

        // set color scheme
        var pageColorScheme = document.getElementById("colorScheme");
        pageColorScheme.setAttribute('href', "/stylesheets/light.css");

        // set twitter theme
        var twitter = document.getElementById('twitter-timeline');
        if (twitter != null) {
            twitter.setAttribute('data-theme', "light");
        }
        
        var slider = document.getElementById('slider');
        if (slider) {
            slider.checked = false;
        }
    }
})();