
document.addEventListener("DOMContentLoaded", function () {
  function setPageTitle(title) {
    document.title = `45i - ${title}`;
    // Set the 'og:title' meta tag as well
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.content = `45i - ${title}`;
    }
  }

  // Extract the title from the page content or set a default title
  const pageTitle = document.querySelector('title') ? document.querySelector('title').textContent : 'Default Title';

  // Set the page title dynamically
  setPageTitle(pageTitle);
  // Create and append the 'theme-color' meta tag
  const themeColorMeta = document.createElement('meta');
  themeColorMeta.name = 'theme-color';
  themeColorMeta.content = '#262624';
  document.head.appendChild(themeColorMeta);

  // Create and append the 'twitter:image:alt' meta tag
  const twitterImageAltMeta = document.createElement('meta');
  twitterImageAltMeta.name = 'twitter:image:alt';
  twitterImageAltMeta.content = '45i';
  document.head.appendChild(twitterImageAltMeta);

  // Create and append the 'twitter:image' meta tag
  const twitterImageMeta = document.createElement('meta');
  twitterImageMeta.name = 'twitter:image';
  twitterImageMeta.content = '404 img\\to show\\guy_think.webp';
  document.head.appendChild(twitterImageMeta);

  // Create and append the 'twitter:description' meta tag
  const twitterDescriptionMeta = document.createElement('meta');
  twitterDescriptionMeta.name = 'twitter:description';
  twitterDescriptionMeta.content = "Hey! I'm 45i, a 15-year-old programmer and music lover. I love solving problems, especially the ones I create 😅. I try to make people's lives easier, one spaghetti code at a time!";
  document.head.appendChild(twitterDescriptionMeta);

  // Create and append the 'twitter:title' meta tag
  const twitterTitleMeta = document.createElement('meta');
  twitterTitleMeta.name = 'twitter:title';
  twitterTitleMeta.content = '45i - Programmer and Music Lover';
  document.head.appendChild(twitterTitleMeta);

  // Create and append the 'twitter:card' meta tag
  const twitterCardMeta = document.createElement('meta');
  twitterCardMeta.name = 'twitter:card';
  twitterCardMeta.content = 'summary';
  document.head.appendChild(twitterCardMeta);

  // Create and append the 'og:image' meta tag
  const ogImageMeta = document.createElement('meta');
  ogImageMeta.property = 'og:image';
  ogImageMeta.content = '404 img\\to show\\guy_think.webp';
  document.head.appendChild(ogImageMeta);

  // Create and append the 'og:description' meta tag
  const ogDescriptionMeta = document.createElement('meta');
  ogDescriptionMeta.property = 'og:description';
  ogDescriptionMeta.content = "Hey! I'm 45i, a 15-year-old programmer and music lover. I love solving problems, especially the ones I create 😅. I try to make people's lives easier, one spaghetti code at a time!";
  document.head.appendChild(ogDescriptionMeta);

  // Create and append the 'og:title' meta tag
  const ogTitleMeta = document.createElement('meta');
  ogTitleMeta.property = 'og:title';
  ogTitleMeta.content = '45i - Programmer and Music Lover';
  document.head.appendChild(ogTitleMeta);

  // Create and append the 'og:url' meta tag
  const ogUrlMeta = document.createElement('meta');
  ogUrlMeta.property = 'og:url';
  // Add your URL here
  document.head.appendChild(ogUrlMeta);

  // Create and append the 'og:site_name' meta tag
  const ogSiteNameMeta = document.createElement('meta');
  ogSiteNameMeta.property = 'og:site_name';
  ogSiteNameMeta.content = '45i';
  document.head.appendChild(ogSiteNameMeta);

  // Create and append the 'og:type' meta tag
  const ogTypeMeta = document.createElement('meta');
  ogTypeMeta.property = 'og:type';
  ogTypeMeta.content = 'website';
  document.head.appendChild(ogTypeMeta);

  // Create and append the 'author' meta tag
  const authorMeta = document.createElement('meta');
  authorMeta.name = 'author';
  authorMeta.content = '45i';
  document.head.appendChild(authorMeta);

  // Create and append the 'robots' meta tag
  const robotsMeta = document.createElement('meta');
  robotsMeta.name = 'robots';
  robotsMeta.content = 'follow, index';
  document.head.appendChild(robotsMeta);

  // Create and append the 'description' meta tag
  const descriptionMeta = document.createElement('meta');
  descriptionMeta.name = 'description';
  descriptionMeta.content = "Hey! I'm 45i, a 15-year-old programmer and music lover. I love solving problems, especially the ones I create 😅. I try to make people's lives easier, one spaghetti code at a time!";
  document.head.appendChild(descriptionMeta);

  // Rest of your existing code...
  // Rest of your existing code...

  // Create and append the Font Awesome CSS link
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
  fontAwesomeLink.rel = 'stylesheet';
  document.head.appendChild(fontAwesomeLink);

  // Create and append the SweetAlert2 CSS link
  const sweetAlert2CssLink = document.createElement('link');
  sweetAlert2CssLink.href = 'https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css';
  sweetAlert2CssLink.id = 'theme-styles';
  sweetAlert2CssLink.rel = 'stylesheet';
  document.head.appendChild(sweetAlert2CssLink);

  // Create and append the SweetAlert2 JavaScript script
  const sweetAlert2Script = document.createElement('script');
  sweetAlert2Script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js';
  document.head.appendChild(sweetAlert2Script);

  const typedScript = document.createElement('script');
  typedScript.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
  document.head.appendChild(typedScript);

  // Create and append the Favicon link
  const epicFaviconLink = document.createElement('link');
  epicFaviconLink.href = '404 img\\to show\\guy_think.webp';
  epicFaviconLink.rel = 'icon';
  epicFaviconLink.type = 'image/x-icon';
  document.head.appendChild(epicFaviconLink);
  const highlightCssLink = document.createElement('link');
  highlightCssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.css';
  highlightCssLink.rel = 'stylesheet';
  document.head.appendChild(highlightCssLink);

  // Create and append the Highlight.js JavaScript script
  const highlightScript = document.createElement('script');
  highlightScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
  document.head.appendChild(highlightScript);

  // Create and append the Highlight.js Go language JavaScript script
  const highlightGoScript = document.createElement('script');
  highlightGoScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js';
  document.head.appendChild(highlightGoScript);

  // Create and append the script to initialize Highlight.js
  hljs.highlightAll();
  // Rest of your existing code...
});



// const body = document.body;

// let sx = 0, // For scroll positions
//   sy = 0;
// let dx = sx, // For container positions
//   dy = sy;

// // Bind a scroll function
// window.addEventListener('scroll', easeScroll);

// function easeScroll() {
//   sx = window.pageXOffset;
//   sy = window.pageYOffset;
// }

// window.requestAnimationFrame(render);

// function render() {
//   // We calculate our container position by linear interpolation method
//   dx = li(dx, sx, 0.2);
//   dy = li(dy, sy, 0.2);

//   dx = Math.floor(dx * 100) / 100;
//   dy = Math.floor(dy * 100) / 100;

//   body.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;

//   window.requestAnimationFrame(render);
// }

// function li(a, b, n) {
//   return (1 - n) * a + n * b;
// }


function supportsBackdropFilter() {
  const testElement = document.createElement('div');
  testElement.style.backdropFilter = 'blur(10px)';
  return testElement.style.backdropFilter !== undefined;
}

// Apply backdrop filter or sepia based on support
function applyFilter() {
  if (!supportsBackdropFilter()) {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      element.style.filter = 'sepia(100%)';
    });
  }
}

// Call the function to apply the filter
applyFilter();




document.addEventListener("DOMContentLoaded", function () {
  // Fetch the contents of the navbar HTML file
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      // Insert the navbar HTML into the navbar-container element
      const navbarContainer = document.querySelector('.navbar-container');
      navbarContainer.innerHTML = data;
      var logoText = navbarContainer.querySelector(".logo-text");
      var documentTitle = document.title;
      document.body.classList.add('dark-mode');

      // Remove the prefix "45i - " from the document title
      var cleanedTitle = documentTitle.replace("45i - ", "");

      // Create a new span element
      var addedSpan = document.createElement("span");

      // Set the innerHTML of the new span to the cleaned document title
      addedSpan.innerHTML = "/" + cleanedTitle;

      // Add classes "sub" and "wider-text" to the new span
      addedSpan.classList.add("sub", "wider-text");

      // Append the new span to the logoText element
      logoText.appendChild(addedSpan);


      // Access the menuIcon element and add a click event listener
      var icon = document.querySelector('.main');
      var menuIcon = document.querySelector('.icdown');
      var navbar = document.querySelector('.navbar');
      var navig = document.querySelector('.navig');
      const height = window.getComputedStyle(navig).height;

      // Add this line
      menuIcon.addEventListener('click', function () {
        //console.log(computedHeight);
        icon.classList.toggle('open');
        //console.log(height);
          const scrollLabel = document.querySelector('.scroll-label-main');
        if (icon.classList.contains('open')) {
          console.log(navbar.scrollWidth);
          console.log(navbar.clientWidth);
          if (navbar.scrollWidth > navbar.clientWidth) {
            // navbar.classList.add('overflowed');
            scrollLabel.style.opacity = `1`;
          } else {
            // navbar.classList.remove('overflowed');
            scrollLabel.style.opacity = `0`;
          }
          var computedHeight = window.getComputedStyle(navbar).height;
          var computedWidth = window.getComputedStyle(navbar).width;
          const newHeight = `${parseInt(computedHeight)}px`;
          const newWidth = `${parseInt(window.getComputedStyle(menuIcon).width)}px`;
          navig.style.height = newHeight;
          navig.style.width = `calc(90vw - 52px + 2.5%)`;
          navig.style.transform = `translateX(5%) translateY(10px)`;
          menuIcon.style.height= newHeight;
          // menuIcon.style.width = `52px`;
          //console.log(newHeight);
          // // menuIcon.style.transform="";
          // navig.style.border = `1px 1px 0px 1px solid lightslategray`
          // menuIcon.style.border = `0px 1px 1px 1px solid lightslategray`
          menuIcon.innerHTML = '<i class="fas fa-caret-up"></i>';
          menuIcon.style.transform = `translateY(0px) translateX(calc( 52px + 50%))`;
          navig.style.transition = 'height 0.5s ease-in-out,width 0.5s ease-in-out, left 0.5s ease-in-out, transform 0.5s ease-in-out, border-radius 0.9s ease-in-out';
          menuIcon.style.transition = 'padding 0.5s ease-in-out,height 0.3s ease-in-out,border 0.5s ease-in-out,transform 0.5s ease-in-out, border-radius 0.9s ease-in-out';
          // menuIcon.style.backdropFilter='blur(10px)';
          // menuIcon.style.backgroundColor = 'black';
          if (navig.classList.contains('collapse')) {
            navig.classList.toggle('collapse');
          }
          // Get the computed height of .navig
          navbar.style.transform = `translateY(-${parseInt(computedHeight)}px)`;
          // navig.style.transition = 'height 0.3s ease';
          navbar.style.left = '1vw';
          navbar.style.width = `calc(90vw - 52px + 5% - 3.5vw)`;
          // const navbar = document.getElementById('navbar');


          


          // Initial check
          // checkOverflow();

          // Re-check on window resize
          // window.addEventListener('resize', checkOverflow);


        } else {
          menuIcon.innerHTML = '<i class="fas fa-caret-down"></i>';
          navig.style.height = `max-content`; // Revert to the original height
          navig.style.width = `90vw`;
          menuIcon.style.height=`52px`;
          // menuIcon.style.width=`52px`;
          navig.style.transform = `translateX(5%) translateY(10px)`;
          if (navig.classList.contains('collapse')) {
          navig.style.transform=`translateX(-85%)translateY(12%)`;
          }
          if (navig.classList.contains('collapse')) {
            navig.classList.toggle('collapse');
          }

          navbar.style.transform = `none`;
          menuIcon.style.transform = `none`;
          // menuIcon.style.backgroundColor='transparent';
          navig.style.transition = 'height 0.5s ease-in-out,width 0.5s ease-in-out, left 0.5s ease-in-out, transform 0.5s ease-in-out, border-radius 0.9s ease-in-out';
          menuIcon.style.transition = 'padding 0.5s ease-in-out,height 0.3s ease-in-out,border 0.5s ease-in-out,transform 0.5s ease-in-out, border-radius 0.9s ease-in-out';
          // damn();
        }
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('open');
        navig.classList.toggle('open');
        // setTimeout(function () {
        //   navig.classList.toggle('open');
        // }, 200); // 300 milliseconds delay (0.3 seconds)
      });


      // Select all dropdown menus with the class "committee-menu"
      // Select all elements with class "committee"
      var committees = document.querySelectorAll(".committee");
      var closeButton = document.querySelector(".close-btn");

      // Define the function to toggle the chevron icon and menu
      function toggleChevronIcon(event) {
        var committee = event.currentTarget;
        var committeeIcon = committee.querySelector(".ico");
        var dropdownMenu = committee.nextElementSibling; // Assumes the menu is right after the .committee element

        // Toggle the display of the dropdown menu
        dropdownMenu.style.display = (dropdownMenu.style.display === "none" || !dropdownMenu.style.display) ? "block" : "none";

        // Rotate the chevron icon based on the display state
        if (dropdownMenu.style.display === "block") {
          committeeIcon.style.transform = "rotate(120deg)";
          // committeeIcon
        } else {
          committeeIcon.style.transform = "rotate(0deg)";
        }

      }
      closeButton.addEventListener('click', function damn() {
        if (!navbar.classList.contains('open')) {
          navig.classList.toggle('collapse');

        }
        if (navig.classList.contains('collapse')) {

          navig.style.width = `fit-content`;
          navig.style.transition=`all 0.5s ease-in-out`;
          closeButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
          closeButton.style.transform = "rotateZ(0deg)";
          // closeButton.style.transition="transform 0.5s ease-in-out"
        }
        else {
          navig.style.width = `90vw`;

          closeButton.innerHTML = '<i class="fas fa-eye"></i>';
          navig.style.transition = 'transform 0s ease-in-out';
          closeButton.style.transform = "rotateZ(0deg)";
          // closeButton.style.transition="transform 0.5s ease-in-out"
        }
      });
      const modeButton = document.querySelector(".colormode");

      modeButton.addEventListener('click', function () {
        //  document.body.classList.add('dark-mode');
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        const buttonBg = '';
        if (!isDarkMode) {
          modeButton.innerHTML = '<i class="fas fa-sun"></i>';
          document.documentElement.style.setProperty('--button-bg', 'url(lightmode.png)');
          modeButton.style.transition = 'all 0.5s ease-in-out';
          document.documentElement.style.setProperty('--modebuttoncol', 'lemonchiffon');
          document.documentElement.style.setProperty('--transitioncol', 'rgba(0, 157, 255, 1)');
          // modeButton.style.color='yellow';
        } else {
          modeButton.innerHTML = '<i class="fas fa-moon"></i>';
          document.documentElement.style.setProperty('--button-bg', 'url(darkmode.png)');
          modeButton.style.transition = 'all 0.5s ease-in-out';
          document.documentElement.style.setProperty('--modebuttoncol', 'wheat');
          document.documentElement.style.setProperty('--transitioncol', 'rgba(0, 46, 101, 1)');
          // modeButton.style.color='wheat';
        }
        const bgCol = isDarkMode ? 'var(--bg-col-dark)' : 'var(--bg-col-light)';
        const txtcol = isDarkMode ? 'var(--txtcol-dark)' : 'var(--txtcol-light)';
        const txtcolinv = isDarkMode ? 'var(--txtcol-light)' : 'var(--txtcol-dark)';
        const uicol = isDarkMode ? 'var(--uielem-col-dark)' : 'var(--uielem-col-light)';
        const alphacol = isDarkMode ? 'var(--alphacol-dark)' : 'var(--alphacol-light)';


        document.documentElement.style.setProperty('--txtcol', txtcol);
        document.documentElement.style.setProperty('--txtcolinv', txtcolinv);
        document.documentElement.style.setProperty('--bg-col', bgCol);
        document.documentElement.style.setProperty('--uielem-col', uicol);
        document.documentElement.style.setProperty('--alphacol', alphacol);
        document.documentElement.style.setProperty('--accent-col', isDarkMode ? 'var(--accent-col-dark)' : 'var(--accent-col-light)');

        // Update the button icon (you can keep your existing code)
      });

      element.addEventListener('mouseleave', () => {
        element.style.backgroundImage = buttonBg; // Reset background image
      });

      // Attach the click event listener to each .committee element
      committees.forEach(function (committee) {
        committee.addEventListener("click", toggleChevronIcon);
      });
      document.addEventListener("click", function (event) {
        var dropdownMenus = document.querySelectorAll(".committee-menu");
        dropdownMenus.forEach(function (menu) {
          if (menu.style.display === "block") {
            // Check if the click occurred outside of the menu and the committee
            if (!menu.contains(event.target)) {
              toggleChevronIcon();
            }
          }
        });
      });
      try {
      }
      catch {

      }

    });
  // var navbar = document.querySelector(".navbar");


});
// footer.js

document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      const footerContainer = document.querySelector('.footer-container');
      footerContainer.innerHTML = data;
      const footer = document.querySelector(".footer-container");

      var translate = document.querySelector(".translate-button");
      translate.addEventListener('click', function () {
        googleTranslateElementInit();
        toggleTranslateElement();
      }); function googleTranslateElementInit() {
        // Your code for initializing the Google Translate element goes here
        new google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      }
      var script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(script);
      var translateElementVisible = false;

      // Function to toggle the Google Translate element and button icon
      function toggleTranslateElement() {
        var translateElement = document.getElementById('google_translate_element');
        var translateButton = document.querySelector('.translate-button');
        var icon = translateButton.querySelector('i');

        if (translateElementVisible) {
          translateElement.style.display = 'none';
          icon.className = 'fas fa-language';
        } else {
          translateElement.style.display = 'block';
          icon.className = 'fas fa-times';
        }

        translateElementVisible = !translateElementVisible;
      }
      let selectedText; // Variable to store the selected text

      document.addEventListener('scroll', function () {
        document.querySelectorAll('a, button, input[type="button"], input[type="submit"], .clickable').forEach(element => {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          const viewportHeight = window.innerHeight;

          // Check if the element is partially visible in the viewport
          if (elementTop < viewportHeight && elementBottom > 0) {
            // Check if the element is too close to the bottom of the viewport
            if (elementBottom > viewportHeight - 50) {
              window.scrollBy({
                top: elementBottom - viewportHeight + 50,
                behavior: 'smooth'
              });
            }
            // Check if the element is too close to the top of the viewport
            else if (elementTop < 50) {
              window.scrollBy({
                top: elementTop - 50,
                behavior: 'smooth'
              });
            }
          }
        });
      });


      document.body.addEventListener('scroll', function () {
        const contextMenu = document.getElementById('contextMenu');
        if (contextMenu.style.display === 'block') {
          // Calculate the new position to keep the context menu with the selected text
          const contextMenuWidth = contextMenu.offsetWidth;
          const contextMenuHeight = contextMenu.offsetHeight;
          const maxX = window.innerWidth - contextMenuWidth;
          const maxY = window.innerHeight - contextMenuHeight;

          const x = Math.min(e.clientX, maxX);
          const y = Math.min(e.clientY, maxY);

          contextMenu.style.top = y + 'px';
          contextMenu.style.left = x + 'px';
        }
      });


      document.getElementById('searchGoogleLink').addEventListener('click', function (e) {
        if (selectedText) {
          const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
          window.open(searchUrl, '_blank');
        }
        e.preventDefault();
      });

      document.getElementById('copyTextButton').addEventListener('click', function () {
        if (selectedText) {
          const textArea = document.createElement('textarea');
          textArea.value = selectedText;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          contextMenu.style.display = 'none';

          // alert('Text copied to clipboard: ' + selectedText);
          Swal.fire(
            'Success!',
            'Text copied to clipboard: ' + selectedText,
            'success'
          )
        } else {
          alert('No text selected to copy.');
        }
      });

    });

});
// Function to check and update scroll behavior
function checkModalScroll() {
  var modal = document.getElementById("myModal");

  if (modal.style.display === "flex") {
    document.body.style.overflow = "hidden"; // Disable scrolling
  } else {
    document.body.style.overflow = ""; // Enable scrolling
  }
}

// Check every 100 milliseconds (adjust the interval as needed)

document.addEventListener("DOMContentLoaded", function () {

});
document.addEventListener("DOMContentLoaded", function () {
  hljs.highlightAll();
  addEventListener('load', function () {
    var blocks = document.querySelectorAll('pre code.hljs');
    var i = 0;
    Array.prototype.forEach.call(blocks, function (block) {
      var language = block.result.language;

      document.querySelectorAll('.yellow-bar')[i].innerHTML = language;
      i++;
    });
  })
});

document.addEventListener("DOMContentLoaded", function () {
  var readMoreElements = document.querySelectorAll('.readmoretext');
  readMoreElements.forEach(function (element) {
    var content = element.innerHTML;
    var limit = 100; // Set the character limit
    if (content.length > limit) {
      var visibleText = content.substring(0, limit);
      var hiddenText = content.substring(limit);
      //console.log("Read More");

      element.innerHTML = visibleText +
        '<span class="more-dots">...</span>' +
        '<span class="hidden-text">' + hiddenText + '</span>' +
        '<span class="read-more-button"> Read more</span>';

      var readMoreButton = element.querySelector('.read-more-button');
      var moreDots = element.querySelector('.more-dots');
      var hiddenTextSpan = element.querySelector('.hidden-text');

      readMoreButton.addEventListener('click', function () {
        hiddenTextSpan.style.display = 'inline';
        //console.log("Read More");
        moreDots.style.display = 'none';
        readMoreButton.style.display = 'none';
      });
    }
  });
});
// let prevScrollpos = window.scrollY;
// window.onscroll = function () {
//   let currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("nav").classList.remove("hidden");

//   } else {
//     document.querySelector("nav").classList.add("hidden");

//   }
//   prevScrollpos = currentScrollPos;
// }
// const days = document.querySelector('.days');
// const text = 'days ';
// let index = 0;
// let isDeleting = false;

// function type() {
//   const currentText = days.textContent;

//   if (!isDeleting) {
//     days.textContent = text.slice(0, index);
//     index++;
//   } else {
//     days.textContent = text.slice(0, index);
//     index--;
//   }

//   if (index > text.length) {
//     isDeleting = true;
//   }

//   if (index === 0) {
//     isDeleting = false;
//   }

//   const delay = isDeleting ? 100 : 200;

//   setTimeout(type, delay);
// }

// days.addEventListener('mouseover', () => {
//   type();
// });
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

document.querySelectorAll("[data-value]").forEach(element => {
  element.addEventListener('mouseenter', event => {
    let iterations = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * (26 + 10))];
        })
        .join("");

      if (iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iterations += 1 / 2;
    }, 100);
  });

  element.addEventListener('mouseleave', event => {
    event.target.innerText = event.target.dataset.value;
  });
});
// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('#image-carousel', {
//     heightRatio: 0.5,
//   }).mount();
// });
const back = document.querySelector('.header');

// window.addEventListener('scroll', () => {
//   const scrollPos = window.scrollY;
//   const angle = scrollPos / 1;
//   back.style.background = `linear-gradient(${angle*100}deg, #08001f, #210c5e, #30197d)`;
// });
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
const scrollDown = document.querySelector('.scroll-down');
const targetElement = document.querySelector('#target-element');

scrollDown.addEventListener('click', () => {
  targetElement.scrollIntoView({
    behavior: 'smooth'
  });
});
let launchDate = new Date("October 11, 2023 8:00:00").getTime();

// let timer = setInterval(tick, 1000);

function tick() {
  let now = new Date().getTime();
  let t = launchDate - now;

  if (t <= 0) {
    document.querySelector('.countdown').innerHTML = "The Gavel Drops!";
    document.querySelector('.inf').innerHTML = "MEGAMUN23 Commences ";
    clearInterval(timer); // Stop the timer when the event begins
  } else if (now > new Date("October 13, 2023 14:00:00").getTime()) { // Replace someOtherDate with your desired end date
    document.querySelector('.countdown').innerHTML = "And That's A Wrap!";
    clearInterval(timer); // Stop the timer when the event ends
  } else {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10) {
      days = "0" + days;
    }
    let hours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = Math.floor(t % (1000 * 60 * 60) / (1000 * 60));
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds = Math.floor(t % (1000 * 60) / 1000);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    let time = `<p><h1><b>STARTS</b><span> IN</span> </h1></p><br><span class="days">${days}</span> : <span class="hours">${hours}</span> : <span class="minutes">${minutes}</span> : <span class="seconds">${seconds}</span>`;

    document.querySelector('.countdown').innerHTML = time;
  }
}

const tds = document.querySelectorAll('td');

tds.forEach(td => {
  td.addEventListener('click', function () {
    const text = this.innerText;
    const tempInput = document.createElement('input');
    tempInput.setAttribute('value', text);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    //console.log('Copied to clipboard:', text);
  });
});
const abbrElements = document.querySelectorAll('abbr');

// Loop through each abbr element and remove the title attribute
abbrElements.forEach(abbr => {
  abbr.addEventListener('mouseenter', function () {
    this.removeAttribute('title');
  });
});
const imgBoxes = document.querySelectorAll('.img-box');

imgBoxes.forEach(imgBox => {
  imgBox.addEventListener('mousemove', e => {
    const x = e.clientX - imgBox.offsetLeft;
    const y = e.clientY - imgBox.offsetTop;
    const centerX = imgBox.clientWidth / 2;
    const centerY = imgBox.clientHeight / 2;
    const deltaX = (centerX - x) / centerX;
    const deltaY = (centerY - y) / centerY;
    imgBox.querySelector('IMG').style.transform = `perspective(1000px) rotateY(${deltaX * 5.1}deg) rotateX(${deltaY * 5.1}deg) scale(1.1)`;
  });

  imgBox.addEventListener('mouseleave', () => {
    imgBox.querySelector('IMG').style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.1)';
  });



});

function splitWords() {
  let quote = document.querySelector("blockquote q");
  quote.innerText.replace(/(<([^>]+)>)/ig, "");
  quotewords = quote.innerText.split(" "),
    wordCount = quotewords.length;
  quote.innerHTML = "";
  for (let i = 0; i < wordCount; i++) {
    quote.innerHTML += "<span>" + quotewords[i] + "</span>";
    if (i < quotewords.length - 1) {
      quote.innerHTML += " ";
    }
  }
  quotewords = document.querySelectorAll("blockquote q span");
  fadeWords(quotewords);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function fadeWords(quotewords) {
  Array.prototype.forEach.call(quotewords, function (word) {
  })
}


// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}



// Get all blockquote elements on the page
var blockquotes = document.querySelectorAll('blockquote');

// Function to handle scroll events
function handleScroll() {
  blockquotes.forEach(function (blockquote) {
    if (isElementInViewport(blockquote)) {
      // Call the splitWords() function when a blockquote is in view
      splitWords();

      // Remove the event listener to stop further calls
      window.removeEventListener('scroll', handleScroll);
    }
  });
}

// Add the initial scroll event listener
window.addEventListener('scroll', handleScroll);

// main.js
// document.addEventListener("DOMContentLoaded", function () {
//   var externalLinks = document.querySelectorAll('a[href^="http"]');
//   for (var i = externalLinks.length - 1; i >= 0; i--) {
//     externalLinks[i].addEventListener("click", function (event) {
//       event.preventDefault(); // Prevent the default link behavior

//       Swal.fire({
//         title: 'Leaving So Soon?',
//         text: "You're about to visit an external website. Are you sure?",
//         icon: 'question',
//         showCancelButton: true,
//         confirmButtonColor: '#4CAF50', // Green color for confirm
//         cancelButtonColor: '#F44336',  // Red color for cancel
//         confirmButtonText: 'Yes, Take Me There!',
//         cancelButtonText: 'No, I\'ll Stay Here'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           // If confirmed, proceed to the external link

//           // Assuming you have a string like this:
//           var linkString = event.target.getAttribute('href'); // Get the href attribute and store it as a string


//           window.location = linkString;

//         }
//       });
//     });
//   }
// });
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
function addWatermarkToImage(imgElement) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapped');

  const watermark = document.createElement('div');
  watermark.classList.add('wrapped');

  const watermarkStyle = `
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        content: "";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        display: block;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        width: 100%;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        height: 100%;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        position: absolute;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        top: 0;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        left: 0;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        background-image: url('http://placehold.it/100x100/09f/fff.png');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        background-size: 100px 100px;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        background-position: 30px 30px;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        background-repeat: no-repeat;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        opacity: 0.7;
                     `;

  watermark.style = watermarkStyle;

  wrapper.appendChild(imgElement.cloneNode(true));
  wrapper.appendChild(watermark);

  imgElement.parentNode.replaceChild(wrapper, imgElement);
}

// Wrap each image with the watermark
document.addEventListener("DOMContentLoaded", function () {
  const a = document.querySelectorAll('IMG');
  a.forEach((al) => {
    al.classList.add('tooltip');

  });


  const links = document.querySelectorAll('img.tooltip');

  // Attach event listeners to each <a> tag
  links.forEach((link) => {
    link.addEventListener('mouseover', showTooltip);
    link.addEventListener('mouseout', hideTooltip);
  });

  // Show tooltip
  function showTooltip(event) {
    const link = event.target;
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip-text';
    tooltip.textContent = "Click to go to " + link;
    link.appendChild(tooltip);
  }

  // Hide tooltip
  function hideTooltip(event) {
    const link = event.target;
    const tooltip = link.querySelector('.tooltip-text');
    if (tooltip) {
      link.removeChild(tooltip);
    }
  }
  const lazyLoadImages = document.querySelectorAll('.lazy-load-img');

  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');

          img.src = src;
          img.classList.add('loaded');
          observer.disconnect();
        }
      });
    });

    io.observe(target);
  };


  lazyLoadImages.forEach(lazyLoad);
});
// Function to add the modal to the body
function addModalToBody() {
  // Create the modal HTML structure
  var modalHTML = `
 <div id="myModal" class="modal">
 <div class="">
   <center><img class="modal-content" style="max-width:90vh" id="img01"></center>
   <span class="close"><i class="fas fa-magnifying-glass-minus">&times;</i></span>
   <div class="magnifyingGlass" style="z-index: 999999999999"></div>
   <div id="caption"></div>
 </div>
 </div>
 `;

  // Create a new div element
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  var images = document.querySelectorAll("img");

  // Loop through each image and attach the modal functionality
  images.forEach(function (img) {
    img.onclick = function () {
      var modal = document.getElementById("myModal");
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");

      // Set the modal content based on the clicked image and its alt text
      modal.style.display = "flex";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      captionText.innerHTML = this.alt;
    };
  });


  // Get the <span> element that closes the modal
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");

    // Add a class to trigger the fade-out animation
    modal.classList.add("fadeOutAnimation");

    // Set a timeout to hide the modal after the animation is complete
    setTimeout(function () {
      modal.style.display = "none";
      img.src = "";

      // Remove the fade-out class for future use
      modal.classList.remove("fadeOutAnimation");
    }, 500); // Adjust the timeout value based on the duration of your animation (in milliseconds)
  }
  var glass = document.querySelector(".magnifyingGlass");
  var img = document.getElementById("img01");

  img.addEventListener("mousemove", function (e) {
    showMagnifiedImage(e);
  });

  img.addEventListener("mouseout", function () {
    glass.style.display = "none";
  });

  function showMagnifiedImage(e) {
    var posX = e.offsetX;
    var posY = e.offsetY;

    // Increase the zoom level by multiplying posX and posY by a higher factor (e.g., 4)
    var zoomFactor = 4;
    var bgPosX = -posX * zoomFactor + "px";
    var bgPosY = -posY * zoomFactor + "px";

    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundSize = img.width * zoomFactor + "px " + img.height * zoomFactor + "px";
    glass.style.backgroundPosition = bgPosX + " " + bgPosY;
    glass.style.display = "block";
    glass.style.position = "absolute";

    // Set the shape of the magnifying glass to circular
    glass.style.borderRadius = "50%";

    var rect = glass.getBoundingClientRect();
    var glassHalfWidth = rect.width / 2;
    var glassHalfHeight = rect.height / 2;
    glass.style.left = e.pageX - glassHalfWidth + "px";
    glass.style.top = e.pageY - glassHalfHeight + "px";
  }

  setInterval(checkModalScroll, 100);

}

// Call the function to add the modal to the body
addModalToBody();
const words = document.querySelectorAll('.word');
const delay = 999999999; // Increase the delay for less sensitivity
let currentIndex = 0;

function showNextWord() {
  // Show the current word
  words[currentIndex].style.opacity = 1;


  // Wait for a delay (e.g., 2000 milliseconds) before hiding the current word
  setTimeout(() => {
    words[currentIndex].style.opacity = 0;

    // Move to the next word
    currentIndex = (currentIndex + 1) % words.length;

    // Show the next word immediately
    words[currentIndex].style.opacity = 1;

    // Center the word horizontally

  }, delay);
}
function hideWord() {
  // Show the current word
  words[currentIndex].style.opacity = 0;
  setTimeout(() => {
    words[currentIndex].style.opacity = 0;

    // Move to the next word
    currentIndex = (currentIndex + 1) % words.length;

    // Show the next word immediately
    words[currentIndex].style.opacity = 0;

    // Center the word horizontally

  }, delay);

  // Wait for a delay (e.g., 2000 milliseconds) before hiding the current word

}
function showWord() {
  // Show the current word
  words[currentIndex].style.opacity = 1;
  setTimeout(() => {
    words[currentIndex].style.opacity = 1;

    // Move to the next word
    currentIndex = (currentIndex + 1) % words.length;

    // Show the next word immediately
    words[currentIndex].style.opacity = 0;

    // Center the word horizontally

  }, delay);

  // Wait for a delay (e.g., 2000 milliseconds) before hiding the current word

}

// Add a scroll event listener
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Calculate the desired letter spacing (adjust the formula as needed)
  const baseSpacing = 1; // Initial letter spacing
  const scrollFactor = 0.02; // Adjust this value to control the effect
  const letterSpacing = baseSpacing + scrollPosition * scrollFactor;

  // Select all .expand elements (adjust the selector as needed)
  const expandElements = document.querySelectorAll('.expand');

  // Apply the calculated letter spacing only when opacity is 1
  expandElements.forEach((element) => {
    if (window.getComputedStyle(element).opacity === '1') {
      element.style.letterSpacing = `${letterSpacing}px`;
    }
  });
});


// Start the animation when the page loads

// Detect scroll direction and update word visibility
window.addEventListener('scroll', () => {

  const viewportCenter = window.innerHeight / 2;
  const wordCenters = Array.from(words).map((word) => {
    const rect = word.getBoundingClientRect();
    return rect.top + rect.height / 2;
  });

  const closestWordIndex = wordCenters.reduce((acc, center, index) => {
    const distance = Math.abs(center - viewportCenter);
    if (distance <= Math.abs(wordCenters[acc] - viewportCenter)) {
      return index;
    }
    return acc;
  }, 0);

  words.forEach((word, index) => {
    word.style.opacity = index === closestWordIndex ? 1 : 0;
    if (index === closestWordIndex) {
      word.classList.add('sticky');
      word.classList.add('shown');
      showWord();
    } else {
      word.classList.remove('sticky');
      if (word.classList.contains('perma') && word.classList.contains('shown')) {
        //console.log(word.innerHTML + word.classList.contains('perma'));
        showWord();
        word.style.opacity = 1;

      }
    }
  });
});
const stickyElements = document.querySelectorAll('.sticky-text');
let currentStickyIndex = -1;

function updateStickyElement() {
  const viewportHeight = window.innerHeight;

  // Find the centered element
  for (let i = 0; i < stickyElements.length; i++) {
    const element = stickyElements[i];
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;

    if (elementCenter >= 0 && elementCenter <= viewportHeight) {
      currentStickyIndex = i;
      break;
    }
  }

  // Apply sticky class to the centered element
  stickyElements.forEach((element, index) => {
    if (index === currentStickyIndex) {
      element.classList.add('fixed');
    } else {
      element.classList.remove('fixed');
    }
  });
}

// Listen for scroll events



const tooltipContainerB = document.querySelectorAll('img.tooltip');

tooltipContainerB.forEach((tooltipContainer) => {

  tooltipContainer.addEventListener('mouseover', (e) => {
    const hoveredElement = e.target;

    if (hoveredElement.tagName === 'A') {
      // Get the URL from the href attribute
      const url = hoveredElement.getAttribute('href');
      tooltipText.textContent = `Click to visit ${url}`;
    } else if (hoveredElement.tagName === 'IMG') {
      tooltipText.textContent = 'Click to magnify';
    }
  });
  tooltipContainer.addEventListener('mousemove', (e) => {
    const offsetX = 0; // Adjust the horizontal offset
    const offsetY = 1; // Adjust the vertical offset

    const tooltipText = tooltipContainer.querySelector('.tooltip-text');
    tooltipText.style.left = (e.pageX / 1.04) + offsetX + 'px';
    tooltipText.style.top = (e.pageY / 1.299) + offsetY + 'px';
  });
})





var docTitle = "";
document.addEventListener("DOMContentLoaded", function () {
  docTitle = document.title;
  const imgElements = document.querySelectorAll('img');

  imgElements.forEach((img) => {
    img.setAttribute('data-src', img.src);
    const wrapper = document.createElement('div');
    wrapper.className = 'image-wrapper';
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
  });
});


const showerThoughts = [
  "If you clean a vacuum cleaner, are you a vacuum cleaner?",
  "Why do we call it a building if it’s already built?",
  "If you try to fail and succeed, which have you done?",
  "Do fish in water have a thirst for air?",
  "If a tomato is a fruit, is ketchup a smoothie?",
  "If you’re waiting for the waiter, aren’t you the waiter?",
  "Why is it called a 'drive-through' if you have to stop?",
  "If you punch yourself and it hurts, are you strong or weak?",
  "If money doesn’t grow on trees, why do banks have branches?",
  "If you drop soap on the floor, is the floor clean or is the soap dirty?",
  "Why is the word 'abbreviation' so long?",
  "If you describe something as indescribable, haven’t you already described it?",
  "Why do we say 'slept like a baby' when babies wake up every two hours?",
  "If you’re invisible and you close your eyes, can you see through your eyelids?",
  "Why do we press harder on a remote control when we know the batteries are dead?",
  "If you steal a pen from a bank, is it considered a hold-up?",
  "Why do we call it 'after dark' when it’s really 'after light'?",
  "If you throw a cat out of a moving car, is it considered kitty litter?",
  "Why do we call them 'apartments' when they’re all stuck together?",
  "If you’re in a competition by yourself, do you come in first or last?",
  "If you get out of the shower clean, how does your towel get dirty?",
  "Why do we call it a 'hot water heater' when it’s already hot?",
  "If you’re born at exactly midnight, which day do you celebrate your birthday?",
  "If you dig a hole through the Earth and jump in, do you stay in the middle because of gravity?",
  "Why do we say 'heads up' when we actually duck?",
  "If you’re on a boat and it sinks, do you become a part of the sea?",
  "Why do we call it 'taking a dump' when we’re actually leaving it?",
  "If you eat yourself, do you become twice as big or disappear completely?",
  "Why do we call it 'rush hour' when nothing moves?",
  "If you’re in a spaceship traveling at the speed of light and you turn on the headlights, what happens?"
];

window.addEventListener("blur", () => {
  const randomThought = showerThoughts[Math.floor(Math.random() * showerThoughts.length)];
  document.title = randomThought;
});


window.addEventListener("focus", () => {
  document.title = docTitle;

})

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-107957156-1', { 'anonymize_ip': true });

// Attach a scroll event listener to the window
window.addEventListener('scroll', function () {
  // Iterate through all <img> elements
  document.querySelectorAll('img').forEach(function (img) {
    if (img.getAttribute('data-src') && img.getBoundingClientRect().top < (window.scrollY + window.innerHeight + 100)) {
      // Replace the placeholder with the actual image source
      img.src = img.getAttribute('data-src');
      //console.log("replaced")
      img.removeAttribute('data-src');
    }
  });
});
// Set the scroll speed factor (adjust as needed)
window.addEventListener('scroll', () => {
  const extend = document.querySelector('.extend');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const scaleFactor = Math.min(1, scrollPosition / windowHeight); // Scale factor between 0 and 1

  extend.style.opacity = scaleFactor;
  extend.style.transform = `scale(${0.5 + scaleFactor * 0.5})`; // Scale from 0.5 to 1
});
// script.js or within a <script> tag in your HTML

document.addEventListener("DOMContentLoaded", function () {
  // Create the new div element
  const newDiv = document.createElement('div');

  // Set the innerHTML of the new div with the provided HTML code
  newDiv.innerHTML = `
   <center>
     <div class="many-items">
        <a href="#"><button class="shape-shift" hover-text="Scroll Up" tooltip="Scroll Up" ><i class="fas fa-angle-up"></i></button></a>
             
        <button class="shape-shift share" hover-text="Scroll Up" tooltip="Scroll Up" ><i class="fas fa-share"></i></button>
     </div>
   </center>
   <br>
   <br>
  `;
  const footerContainer = document.querySelector('.footer-container');

  // Insert the new div before the footer container
  footerContainer.parentNode.insertBefore(newDiv, footerContainer);


  const manyItems = document.querySelectorAll('.many-items');

  manyItems.forEach(item => {
    const height = item.style.height;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const intersectionRatio = entry.intersectionRatio;
        const targetWidth = `${65 * intersectionRatio}vw`;
        const targetBackgroundColor = `rgba(${Math.floor(17 * intersectionRatio)}, ${Math.floor(17 * intersectionRatio)}, ${Math.floor(17 * intersectionRatio)}, ${265 * intersectionRatio})`;
        const targetOpacity = Math.max(0, intersectionRatio, 1);
        const size = `${item.style.size * intersectionRatio}px`;
        const offsetvertical = `${35 * intersectionRatio}px`;

        item.style.transition = 'width 0.5s ease-in-out, backdrop-filter 0.2s ease-in-out, background-color 0.4s ease-in-out, transform 0.5s ease-in-out';
        item.style.width = targetWidth;
        item.style.height = Math.max(0, Math.min(targetWidth, height));
        // item.style.backdropFilter = targetBlur;
        // item.style.backgroundColor = targetBackgroundColor;
        item.style.size = size;
        item.style.transform = `translateY(${offsetvertical})`;
      });
    }, { threshold: [0, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1] });

    observer.observe(item);
  });

  const showMoreButton = document.querySelector('.share');

  // Get the div element to be shown

  // Function to handle the button click event
  function showLinks() {
    // Get the parent element of the button
    const parentElement = showMoreButton.parentNode;

    // Check if the links div is already shown
    const shareData = {
      title: docTitle,
      text: "",
      url: window.location.href
    };

    navigator.share(shareData)
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.error('Error sharing:', error));

  }

  // Attach the click event listener to the button
  showMoreButton.addEventListener('click', showLinks);
});
// Get the button element




// Wait for the page to load

document.addEventListener('DOMContentLoaded', function () {
  // Create a new div element
  const newDiv = document.createElement('div');
  // Set the class attribute
  newDiv.id = 'circularcursor';
  newDiv.classList.add('circular-cursor'); // Add a class = 'wider-text';
  newDiv.classList.add('wider-text'); // Add a class = 'wider-text';

  const newerDiv = document.createElement('div');
  // newerDiv.innerHTML="."
  // newerDiv.id = 'cursordot';
  newerDiv.classList.add('cursor-dot'); // Add a class = 'wider-text';
  newDiv.appendChild(newerDiv)
  // Set the innerHTML of the new div with the provided HTML code
  // Append the new div to the body
  // document.body.appendChild(newDiv);
});

document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.getElementById('circularcursor');
  let lastMouseX = 0, lastMouseY = 0;
  let lastMoveTime = Date.now();
  let lastAngle = 0;
  let tilt = 0;
  let isMoving = false;
  let stopTimer;

  document.addEventListener('mousemove', function (e) {
    clearTimeout(stopTimer);

    const now = Date.now();
    const timeDiff = now - lastMoveTime;
    lastMoveTime = now;

    const dx = e.pageX - lastMouseX;
    const dy = e.pageY - lastMouseY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const speed = distance / timeDiff; // Speed in pixels per millisecond

    const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Direction in degrees
    tilt = Math.min(speed * 100, 75); // Scale speed to tilt, max 75 degrees

    lastMouseX = e.pageX;
    lastMouseY = e.pageY;
    lastAngle = angle;

    isMoving = true;
    cursor.style.transition = 'transform 0.1s ease-in-out, border 0.5s ease-in-out, border-radius 0.5s ease-in-out, width 0.5s ease-in-out, box-shadow 0.3s ease-in-out';
    cursor.style.transform = `translate(-50%, -50%)  scale(1)`;

    stopTimer = setTimeout(() => {
      isMoving = false;
      // swingCursorToStop();
    }, 0.1);
  });

  document.addEventListener('scroll', function () {
    const mouseX = window.lastMouseX || 0;
    const mouseY = window.lastMouseY || 0;
    updateCursorPosition(mouseX, mouseY, 2);
  });

  function updateCursorPosition(pageX, clientY, type) {
    cursor.style.left = pageX + 'px';
    cursor.style.top = clientY + window.scrollY + 'px';

    if (type == 2) {
      cursor.style.transition = 'transform 0.3s ease-in-out, border 0.5s ease-in-out, border-radius 0.5s ease-in-out, width 0.5s ease-in-out, top 0.1s linear, left 0.1s linear, box-shadow 0.3s ease-in-out';
    } else if (type == 1) {
      cursor.style.transition = 'transform 0.1s ease-in-out, border 0.5s ease-in-out, border-radius 0.5s ease-in-out, width 0.5s ease-in-out, box-shadow 0.3s ease-in-out';
    }
    const clickableElements = document.querySelectorAll('a, button, input[type="button"], input[type="submit"], .clickable');
    clickableElements.forEach(element => {
      element.addEventListener('mouseover', growCursor);
      element.addEventListener('mouseout', shrinkCursor);
    });

    const clickIMG = document.querySelectorAll('img');
    clickIMG.forEach(element => {
      element.addEventListener('mouseover', growCursorIMG);
      element.addEventListener('mouseout', shrinkCursor);
    });
  }

  function growCursor() {
    cursor.style.transform = 'translate(-50%, -50%)';
    // cursor.style.width = '60px';
    // cursor.style.transition = 'all 0.5s ease-in-out';
    cursor.style.borderRadius = '20%';
    // cursor.style.boxShadow = 'var(--txtcol) 0 0 40px';
  }
  function shrinkCursor() {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.width = '30px';
    cursor.style.borderRadius = '50% ';
    cursor.style.boxShadow = 'var(--txtcol) 0 0 0px';
  }

  function swingCursorToStop() {
    const initialAngle = lastAngle > 0 ? -tilt : tilt;
    const duration = 3500; // total duration of the damping animation in milliseconds
    const dampingFactor = 0.001; // damping factor to reduce amplitude over time

    const startTime = Date.now();

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;
      const decay = Math.exp(-dampingFactor * progress * duration);
      const swingAngle = initialAngle * decay * Math.cos(progress * 2 * Math.PI * 5); // Increase frequency for more swings

      if (progress < 1) {
        cursor.style.transform = `translate(-50%, -50%) rotateZ(${swingAngle}deg) scale(1)`;
        cursor.style.transition = 'border-radius 0.1s ease-in-out';
        requestAnimationFrame(animate);
      } else {
        cursor.style.transform = 'translate(-50%, -50%) rotateZ(0deg) scale(1)';
      }
    }

    animate();
  }

  document.addEventListener('mousemove', function (e) {
    window.lastMouseX = e.pageX;
    window.lastMouseY = e.clientY;
    updateCursorPosition(e.pageX, e.clientY, 1);
  });
});




function updateAccentColors() {
  const root = document.documentElement;
  const currentTime = new Date().getHours();

  let accentColorLight, accentColorDark, timeEmoji;

  if (currentTime >= 5 && currentTime < 7) {
    // Early Morning colors
    accentColorLight = '#FFDDC1'; // Light Coral
    accentColorDark = '#FF8C00';  // Dark Orange
    timeEmoji = '🌅'; // Sunrise
  } else if (currentTime >= 7 && currentTime < 9) {
    // Morning colors
    accentColorLight = '#FFE4B5'; // Moccasin
    accentColorDark = '#FFA500';  // Orange
    timeEmoji = '☀️'; // Sun with rays
  } else if (currentTime >= 9 && currentTime < 11) {
    // Late Morning colors
    accentColorLight = '#FFDAB9'; // Peach Puff
    accentColorDark = '#FF7F50';  // Coral
    timeEmoji = '🌤️'; // Sun behind small cloud
  } else if (currentTime >= 11 && currentTime < 13) {
    // Midday colors
    accentColorLight = '#FFD700'; // Gold
    accentColorDark = '#FF4500';  // Orange Red
    timeEmoji = '🌞'; // Sun
  } else if (currentTime >= 13 && currentTime < 15) {
    // Early Afternoon colors
    accentColorLight = '#FFA07A'; // Light Salmon
    accentColorDark = '#FF6347';  // Tomato
    timeEmoji = 'Good Afternoon!'; // Sun behind large cloud
  } else if (currentTime >= 15 && currentTime < 17) {
    // Mid Afternoon colors
    accentColorLight = '#FFB6C1'; // Light Pink
    accentColorDark = '#DC143C';  // Crimson
    timeEmoji = 'Good Afternoon!'; // Sun behind rain cloud
  } else if (currentTime >= 17 && currentTime < 19) {
    // Late Afternoon colors
    accentColorLight = '#FF69B4'; // Hot Pink
    accentColorDark = '#C71585';  // Medium Violet Red
    timeEmoji = '🌇'; // Sunset
  } else if (currentTime >= 19 && currentTime < 21) {
    // Early Evening colors
    accentColorLight = '#B0C4DE'; // Light Steel Blue
    accentColorDark = '#4682B4';  // Steel Blue
    timeEmoji = '🌆'; // Cityscape at dusk
  } else if (currentTime >= 21 && currentTime < 23) {
    // Night colors
    accentColorLight = '#778899'; // Light Slate Gray
    accentColorDark = '#2F4F4F';  // Dark Slate Gray
    timeEmoji = '🌙'; // Moon
  } else {
    // Late Night colors
    accentColorLight = '#708090'; // Slate Gray
    accentColorDark = '#1C1C1C';  // Very Dark Gray
    timeEmoji = '🌌'; // Milky Way
  }

  document.documentElement.style.setProperty('--accent-col-light', accentColorDark);
  document.documentElement.style.setProperty('--accent-col-dark', accentColorLight);
  document.documentElement.style.setProperty('--time-emoji', `"${new Date().toString().split(' ')[4]}"`);
  const isDarkMode = document.body.classList.contains('dark-mode');
  document.documentElement.style.setProperty('--accent-col', isDarkMode ? 'var(--accent-col-dark)' : 'var(--accent-col-light)');


}

// Update colors and emoji immediately and then every hour


// Update colors immediately and then every hour
updateAccentColors();
setInterval(updateAccentColors, 1); // 1 ms = 1 hour
