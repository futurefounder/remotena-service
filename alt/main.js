class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `  
        
        <header class="text-gray-600 body-font sticky top-0 z-50 bg-white" >
        <div class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row" >
          <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0" href="index.html">
      
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            stroke="currentColor" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            class="w-10 h-10 p-2 text-white bg-green-500 rounded-full" 
            viewBox="0 0 24 24">
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="1.6" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>      
            <span class="ml-3 text-xl">Remote<span class="ml-0 text-xl text-green-600 font-bold"> 'n Active</span></span>
          </a>
          <nav class="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
            <a class="mr-5 hover:text-gray-900" href="index.html#ablauf">Ablauf</a>
            <a class="mr-5 hover:text-gray-900" href="index.html#faq">Häufige Fragen</a>
            <a class="mr-5 hover:text-gray-900" href="/preise.html">Preise</a>
          </nav>
          <button id="openCalendar" class="inline-flex items-center px-3 py-1 mt-4 text-lg text-gray-200 font-medium bg-green-500 border-0 rounded focus:outline-none hover:bg-green-700 font-medium md:mt-0">Beratung anfordern
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
        
      ` 
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =  ` 
        <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
              <span class="ml-3 text-xl">Remote<span class="ml-0 text-xl text-green-600 font-bold"> 'n Active</span></span>
            </a>
            <p class="mt-2 text-sm text-gray-500"> Dein Remote Team Boutique Service </p>
            <br> 
            <p class="mt-2 text-sm text-gray-500">Gegründet mit <img src="img/germany.svg" style="width:17px;display: inline"> in Berlin <br> 
            <p class="mt-2 text-sm text-gray-500">100% selbstfinanziert & unabhängig</p> 
            <br>
            <p class="mt-2 text-sm text-gray-500">🌱 5% der Gewinne werden für nachhaltige Projekte gespendet</p> 
            </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">RemoteNActive</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Über uns</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Kontakt</a>
                </li>

              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Rechtliches</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Impressum</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Datenschutz</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">AGB</a>
                </li>
              </nav>
            </div>

          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2021 RemoteNActive I Design mit Hilfe von<a href="https://github.com/mertJF/tailblocks" rel="noopener noreferrer" class="text-gray-600 ml-0" target="_blank"> Tailblocks </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              
              <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
    </footer>  
        
    ` 
    }
}

customElements.define('my-footer', MyFooter)

// We select the element we want to target
var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn")
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn")
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
    
// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);