const menu = [
  {
    id: 1,
    title: "👰🏻Wedding Parties",
    category: "Wedding",
    
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: `We're so happy to serve you in your memorable wedding day! `,
  },
  {
    id: 2,
    title: "🎈Birthday Parties",
    category: "Party",
  
    img: "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcnRoZGF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: `We use the most recent theme and design on your birthday! `,
  },
  {
    id: 3,
    title: "🎤Seminars",
    category: "Event",
  
    img: "https://images.unsplash.com/photo-1587554801262-e074b7d300e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxjb25mZXJlbmNpYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: `We hold more than 300 guest on each ceminar!`,
  },
  {
    id: 4,
    title: "🎉Party",
    category: "Party",
 
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGNvc3RvbWUlMjBwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: `Lighting, stage, DJs, Music, youname it!, `,
  },
  {
    id: 5,
    title: "🧹After Party Cleaning",
    category: "Party",
  
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjkyfHxjaHJpc21hcyUyMHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: `This is a great idea isn't it? `,
  },
  {
    id: 6,
    title: "🎃Halloween",
    category: "Event",

    img: "https://images.unsplash.com/photo-1565377024937-5e947136c50c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbGxvd2VlbiUyMHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: `Costum party with not so scary halloween foods!`,
  },
  {
    id: 7,
    title: "🎄Christmas Eve",
    category: "Event",
   
    img: "https://images.unsplash.com/photo-1513861810402-53342bf5bd13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzYwfHxjaHJpc3RtYXMlMjBwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: ` `,
  },
  {
    id: 8,
    title: "🪷Cultural Weddings",
    category: "Wedding",

    img: "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: `All the middle eastern, eastern, and cultural parties with their music bands and set designers are available.`,
  },
  {
    id: 9,
    title: "🍼Baby Shower",
    category: "Showers",
  
    img: "https://images.unsplash.com/photo-1438962136829-452260720431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhYnklMjBzaG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: ``,
  },
  {
    id: 10,
    title: "🥂Bridal Shower",
    category: "Showers",
   
    img: "https://images.unsplash.com/photo-1553276706-5ecf65f08b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyaWRhbCUyMHNob3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: ``,
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
