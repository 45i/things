// // Include the external Google Translate script
// $(document).ready(function() {
//   $('#\\3A 1\\.container').click(function() {
//     var immediateParent = $(this).parent(); // This selects the immediate parent (1)
//     var grandParent = immediateParent.parent(); // This selects the grandparent (2)

//     $(this).add(grandParent).animate({ top: '-200%' }, 'slow');
//   });
// });

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
  fetch("\\navbar.html")
    .then(response => response.text())
    .then(data => {
      // Insert the navbar HTML into the navbar-container element
      const navbarContainer = document.querySelector('.navbar-container');
      navbarContainer.innerHTML = data;

      // Access the menuIcon element and add a click event listener
      var icon = document.querySelector('.main');
      var menuIcon = document.querySelector('.icon');
      var navbar = document.querySelector('.navbar');
      var navig = document.querySelector('.navig');


      // Add this line
      menuIcon.addEventListener('click', function () {
        console.log("clicked");
        icon.classList.toggle('open');
        if (icon.classList.contains('open')) {
          menuIcon.innerHTML = '<i class="fas fa-chevron-up"></i>';

          // toggleDropdown();
        } else {
          menuIcon.innerHTML = '<i class="fas fa-chevron-down"></i>';

          // toggleDropdown();
        }
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('open');

        setTimeout(function () {
          navig.classList.toggle('open');
        }, 200); // 300 milliseconds delay (0.3 seconds)
      });


      // Select all dropdown menus with the class "committee-menu"
      // Select all elements with class "committee"
      var committees = document.querySelectorAll(".committee");

      // Define the function to toggle the chevron icon and menu
      function toggleChevronIcon(event) {
        var committee = event.currentTarget;
        var committeeIcon = committee.querySelector(".ico");
        var dropdownMenu = committee.nextElementSibling; // Assumes the menu is right after the .committee element

        // Toggle the display of the dropdown menu
        dropdownMenu.style.display = (dropdownMenu.style.display === "none" || !dropdownMenu.style.display) ? "block" : "none";

        // Rotate the chevron icon based on the display state
        if (dropdownMenu.style.display === "block") {
          committeeIcon.style.transform = "rotate(180deg)";
        } else {
          committeeIcon.style.transform = "rotate(0deg)";
        }
      }

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
        var typed = new Typed('.info_thing', {
          strings: ["The Website Is Still In Development 🚧^1000", "The Website Is Still Brewing ☕^1000", "The Website Is Still In The Woodworks 🔨^1000", "The Developer Is Busy Brainstorming Easter Eggs 🥚^1000", "The Developer Is Busy Vibing 🎶^1000"],
          typeSpeed: 30,
          backSpeed: 30,
          backDelay: 700,
          smartBackspace: true,
          startDelay: 100,
          delay: 10000,
          loop: true,
          loopCount: Infinity,
        });
      }
      catch {

      }

    });
  var navbar = document.querySelector(".navbar");

  function toggleDropdown() {
    navbar.classList.toggle("open");
  }

});
// footer.js

document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      const footerContainer = document.querySelector('.footer-container');
      footerContainer.innerHTML = data;
      const footer = document.querySelector(".footer-container");
      const button = footer.querySelector("footer").querySelector(".retract");
      // var btn2 = document.createElement('button');
      // btn2.innerHTML = '<i class="fas fa-chevron-up"></i>';
      // btn2.style.position = 'relative';
      // btn2.style.bottom = '0';
      // btn2.style.right = '0';
      // btn2.style.zIndex = '9999';
      // let isCollapsed = false;
      // footer.insertAdjacentElement('beforebegin', btn2);
      // footer.style.display = "block";
      // btn2.style.display = "none";
      // button.addEventListener('click', () => {
      //   isCollapsed = !isCollapsed;
      //   footer.style.display = "none";
      //   btn2.innerHTML = '<i class="fas fa-chevron-up"></i>';
      //   btn2.style.display = "block";
      // });
      // btn2.addEventListener('click', () => {
      //   footer.style.display = "block";
      //   button.innerHTML = '<i class="fas fa-chevron-down"></i>';
      //   btn2.style.display = "none";
      // });
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

      // document.body.addEventListener('mouseup', function (e) {
      //   if (e.target !== contextMenu) {
      //     selectedText = window.getSelection().toString(); // Store the selected text
      //     if (selectedText && selectedText.trim() !== '') {

      //       const contextMenu = document.getElementById('contextMenu');
      //       contextMenu.style.display = 'block';
      //       const contextMenuWidth = contextMenu.offsetWidth;
      //       const contextMenuHeight = contextMenu.offsetHeight;
      //       const maxX = window.innerWidth - contextMenuWidth;
      //       const maxY = window.innerHeight - contextMenuHeight;

      //       const x = Math.min(e.clientX, maxX);
      //       const y = Math.min(e.clientY, maxY);

      //       contextMenu.style.top = y + 'px';
      //       contextMenu.style.left = x + 'px';

      //       // Check if selected text contains a phone number (you can customize the regex)
      //       const phoneRegex = /\+?\d{1,3}?(\d{10})\b/;

      //       if (phoneRegex.test(selectedText)) {
      //         const callPhone = document.getElementById('callPhone');
      //         callPhone.style.display = 'block';

      //         // Add a click event to the 'callPhone' list item
      //         callPhone.addEventListener('click', function () {
      //           const match = selectedText.match(phoneRegex);
      //           if (match && match[1]) {
      //             const phoneNumber = match[1];
      //             window.location.href = 'tel:' + phoneNumber;
      //           }
      //         });
      //       } else {
      //         const callPhone = document.getElementById('callPhone');
      //         callPhone.style.display = 'none';
      //       }

      //     } else {
      //       window.getSelection().removeAllRanges();
      //       contextMenu.style.display = 'none';
      //     }
      //   }
      // });

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

document.addEventListener("DOMContentLoaded", function () {
  var readMoreElements = document.querySelectorAll('.readmoretext');
  readMoreElements.forEach(function (element) {
    var content = element.innerHTML;
    var limit = 100; // Set the character limit
    if (content.length > limit) {
      var visibleText = content.substring(0, limit);
      var hiddenText = content.substring(limit);
      console.log("Read More");

      element.innerHTML = visibleText +
        '<span class="more-dots">...</span>' +
        '<span class="hidden-text">' + hiddenText + '</span>' +
        '<span class="read-more-button"> Read more</span>';

      var readMoreButton = element.querySelector('.read-more-button');
      var moreDots = element.querySelector('.more-dots');
      var hiddenTextSpan = element.querySelector('.hidden-text');

      readMoreButton.addEventListener('click', function () {
        hiddenTextSpan.style.display = 'inline';
        console.log("Read More");
        moreDots.style.display = 'none';
        readMoreButton.style.display = 'none';
      });
    }
  });
});
let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").classList.remove("hidden");

  } else {
    document.querySelector("nav").classList.add("hidden");

  }
  prevScrollpos = currentScrollPos;
}
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

let timer = setInterval(tick, 1000);

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
    console.log('Copied to clipboard:', text);
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
    imgBox.querySelector('img').style.transform = `perspective(1000px) rotateY(${deltaX * 5.1}deg) rotateX(${deltaY * 5.1}deg) scale(1.1)`;
  });

  imgBox.addEventListener('mouseleave', () => {
    imgBox.querySelector('img').style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.1)';
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
    let animate = word.animate([{
      opacity: 0,
      filter: "blur(" + getRandom(2, 5) + "px)"
    }, {
      opacity: 1,
      filter: "blur(0px)"
    }],
      {
        duration: 1000,
        delay: getRandom(500, 3300),
        fill: 'forwards'
      }
    )
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
