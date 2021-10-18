//defining global variables.
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('#navbar__list');
function createNav() {
    let numOfSections = sections.length;
    //I used fragment method for performance.
    const fragment = document.createDocumentFragment();
    for (let i = 1; i <= numOfSections; i++) {
        const list = document.createElement('li');
        /*after creating the list I added the anchor to it with the id value of each section
        ,I used i as variable for the number of sections.*/
        list.innerHTML =
            `<a class="menu__link" href="#${i}" data-position="${i}">Section ${i}</a>`
        fragment.appendChild(list);
    }
    navBar.appendChild(fragment);
}
createNav();
// Function to scroll smoothly.
function smooth(event) {
    event.preventDefault();
    if(event.target.id !== "navbar__list")
        //event.target.dataset.position returns string of required section.
        document.getElementById(event.target.dataset.position).scrollIntoView({behavior: "smooth", block: "start", inline: "center"}); 
}
navBar.addEventListener('click',smooth);

// Function starts when 60% of the next object appears.
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
}

/**
 * @description change the background of active section in section and navBar
 * @param {section} entries
 * @param observer
 */
let observer = new IntersectionObserver(
    function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) //works on intrtsecting with sections.
            {
                document.querySelector('.your-active-class').classList.remove('your-active-class');
                entry.target.classList.add('your-active-class');
                //calling all links in navbar nodeList.
                let allNavBarElements = document.querySelectorAll('a');
                //I made menu__active class in css file with the same adjustment as menu__hoover to be clear.
                document.querySelector('.menu__active').classList.remove('menu__active');
                /* sections id is changed to numbers rather than section1 
                to make it easy for to imply this line. */
                allNavBarElements[entry.target.id -1].classList.add('menu__active');
            }
            /* if it is not intersecting no class will be active */
            else if(document.documentElement.scrollTop<88)
            {
                document.querySelector('.your-active-class').classList.remove('your-active-class');
                document.querySelector('.menu__active').classList.remove('menu__active');
                document.querySelector('span').classList.add('your-active-class');
                document.querySelector('span').classList.add('menu__active');
            }
        })
    }, options);
//observing each section using forEach.
sections.forEach(section => {
    observer.observe(section);
});
function addSec(){
    console.log('Fuck');
    let sec=document.createElement('section');
    let c=0;
    sections.forEach(section =>{
            c++;
    })
    c++;
    sec.innerHTML=`        <div class="landing__container">
    <h2>Section ${c}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
  </div>`
  document.querySelector('main').appendChild(sec);
}