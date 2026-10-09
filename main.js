/* =========================================================
   EATFLOW JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* =======================================================
     FAVORITE BUTTONS
  ======================================================= */

  const favoriteButtons = document.querySelectorAll(".favorite-btn");

  favoriteButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const isActive = button.classList.toggle("active");

      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );

      const icon = button.querySelector("i");

      if (!icon) {
        return;
      }

      if (isActive) {

        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");

      } else {

        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");

      }

    });

  });


  /* =======================================================
     NAVBAR ACTIVE LINK
  ======================================================= */

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
        navLink.removeAttribute("aria-current");
      });

      link.classList.add("active");
      link.setAttribute("aria-current", "page");

    });

  });


  /* =======================================================
     CLOSE MOBILE NAVBAR AFTER CLICK
  ======================================================= */

  const navbar = document.getElementById("navbarNav");

  if (navbar) {

    const mobileLinks = navbar.querySelectorAll(".nav-link");

    mobileLinks.forEach((link) => {

      link.addEventListener("click", () => {

        if (
          window.innerWidth < 768 &&
          navbar.classList.contains("show")
        ) {

          const navbarCollapse =
            bootstrap.Collapse.getInstance(navbar) ||
            new bootstrap.Collapse(navbar, {
              toggle: false
            });

          navbarCollapse.hide();

        }

      });

    });

  }


  /* =======================================================
     NEWSLETTER FORM
  ======================================================= */

  const newsletterForm =
    document.getElementById("newsletterForm");

  const newsletterMessage =
    document.getElementById("newsletterMessage");

  if (newsletterForm && newsletterMessage) {

    newsletterForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const emailInput =
        document.getElementById("email");

      if (!emailInput) {
        return;
      }

      const email = emailInput.value.trim();

      newsletterMessage.className =
        "newsletter-message";

      if (!email) {

        newsletterMessage.textContent =
          "Please enter your email address.";

        newsletterMessage.classList.add("error");

        emailInput.focus();

        return;
      }


      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {

        newsletterMessage.textContent =
          "Please enter a valid email address.";

        newsletterMessage.classList.add("error");

        emailInput.focus();

        return;
      }


      newsletterMessage.textContent =
        "Thanks for subscribing! Check your inbox for updates.";

      newsletterMessage.classList.add("success");

      newsletterForm.reset();

    });

  }


  /* =======================================================
     SMOOTH SCROLL
  ======================================================= */

  const internalLinks =
    document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#" ||
        targetId.length <= 1
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const revealElements = document.querySelectorAll(
    ".category-card, .recipe-card, .food-poster, .instagram-card, .about-content, .about-image, .newsletter-container"
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries, observerInstance) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add("visible");

              observerInstance.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach((element) => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

  }


  /* =======================================================
     PAUSE HERO CAROUSEL WHILE HOVERING
  ======================================================= */

  const heroCarousel =
    document.getElementById("heroCarousel");

  if (heroCarousel && window.bootstrap) {

    const carousel =
      bootstrap.Carousel.getOrCreateInstance(
        heroCarousel
      );

    heroCarousel.addEventListener(
      "mouseenter",
      () => carousel.pause()
    );

    heroCarousel.addEventListener(
      "mouseleave",
      () => carousel.cycle()
    );

  }


  /* =======================================================
     PREVENT EMPTY SOCIAL LINKS FROM JUMPING
  ======================================================= */

  const emptyLinks =
    document.querySelectorAll(
      'a[href="#"]:not(.view-recipe)'
    );

  emptyLinks.forEach((link) => {

    link.addEventListener("click", (event) => {
      event.preventDefault();
    });

  });












  // FOR RECIPE

  /* =======================================================
   ALL RECIPES PAGE
======================================================= */

  const allRecipeContainer =
    document.getElementById("allRecipeContainer");

  const recipeSearch =
    document.getElementById("recipeSearch");

  const recipeCategory =
    document.getElementById("recipeCategory");

  const noRecipeFound =
    document.getElementById("noRecipeFound");


  const allRecipes = [

    {
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      category: "beef",
      time: "30 Minutes",
      image: "image/beef-cheeseburger.jpg"
    },

    {
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      category: "seafood",
      time: "30 Minutes",
      image: "image/lemon-herb-grilled-salmon.jpg"
    },

    {
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      category: "breakfast",
      time: "20 Minutes",
      image: "image/healthy-strawberry-pancake.jpg"
    },

    {
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      category: "healthy",
      time: "15 Minutes",
      image: "image/coleslaw-salad.jpg"
    },

    {
      title: "Chicken Meatballs with Cream Cheese",
      category: "chicken",
      time: "35 Minutes",
      image: "image/chicken-meatballs.jpg"
    },

    {
      title: "Fruity Pancake with Orange & Blueberry",
      category: "sweet",
      time: "25 Minutes",
      image: "image/pancake-blueberry.jpg"
    },

    {
      title: "The Best Easy One Pot Chicken and Rice",
      category: "chicken",
      time: "40 Minutes",
      image: "image/chicken-fried-rice.jpg"
    },

    {
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
      category: "pasta",
      time: "35 Minutes",
      image: "image/chicken-pasta.webp"
    },

    {
      title: "Creamy Garlic Parmesan Pasta",
      category: "pasta",
      time: "25 Minutes",
      image: "image/creamy-garlic-pasta.jpg"
    },

    {
      title: "Grilled Vegetable Bowl",
      category: "vegetarian",
      time: "20 Minutes",
      image: "image/vegetable-bowl.webp"
    },

    {
      title: "Honey Garlic Chicken",
      category: "chicken",
      time: "30 Minutes",
      image: "image/crispy-honey-glazed-chicken.jpg"
    },

    {
      title: "Classic Berry Cheesecake",
      category: "sweet",
      time: "45 Minutes",
      image: "image/berry-cheesecake.jpg"
    }

  ];


  function renderAllRecipes() {

    if (!allRecipeContainer) {
      return;
    }


    const searchValue =
      recipeSearch
        ? recipeSearch.value.toLowerCase().trim()
        : "";

    const selectedCategory =
      recipeCategory
        ? recipeCategory.value
        : "all";


    const filteredRecipes =
      allRecipes.filter((recipe) => {

        const matchesSearch =
          recipe.title
            .toLowerCase()
            .includes(searchValue);

        const matchesCategory =
          selectedCategory === "all" ||
          recipe.category === selectedCategory;

        return matchesSearch && matchesCategory;

      });


    allRecipeContainer.innerHTML = "";


    if (filteredRecipes.length === 0) {

      if (noRecipeFound) {
        noRecipeFound.classList.remove("d-none");
      }

      return;
    }


    if (noRecipeFound) {
      noRecipeFound.classList.add("d-none");
    }


    filteredRecipes.forEach((recipe) => {

      const recipeCard = document.createElement("div");

      recipeCard.className =
        "col-sm-6 col-lg-4";


      recipeCard.innerHTML = `

            <article class="recipe-card">

                <div class="recipe-image">

                    <img
                        src="${recipe.image}"
                        alt="${recipe.title}"
                        loading="lazy"
                    >

                    <button
                        type="button"
                        class="favorite-btn"
                        aria-label="Add to favorites"
                        aria-pressed="false"
                    >
                        <i class="fa-regular fa-heart"></i>
                    </button>

                </div>


                <div class="recipe-content">

                    <a
                        href="#"
                        class="recipe-title"
                    >
                        <h3>
                            ${recipe.title}
                        </h3>
                    </a>


                    <div class="recipe-info">

                        <span>
                            <i class="fa-regular fa-clock"></i>
                            ${recipe.time}
                        </span>

                        <span>
                            <i class="fa-solid fa-utensils"></i>
                            ${recipe.category}
                        </span>

                    </div>

                </div>

            </article>

        `;


      allRecipeContainer.appendChild(recipeCard);

    });


    /*
        Your existing favorite button code
        runs before these cards are created,
        so initialize the newly-created
        favorite buttons here.
    */

    const favoriteButtons =
      allRecipeContainer.querySelectorAll(
        ".favorite-btn"
      );


    favoriteButtons.forEach((button) => {

      button.addEventListener("click", () => {

        const isActive =
          button.classList.toggle("active");


        button.setAttribute(
          "aria-pressed",
          String(isActive)
        );


        const icon =
          button.querySelector("i");


        if (!icon) {
          return;
        }


        if (isActive) {

          icon.classList.remove(
            "fa-regular"
          );

          icon.classList.add(
            "fa-solid"
          );

        } else {

          icon.classList.remove(
            "fa-solid"
          );

          icon.classList.add(
            "fa-regular"
          );

        }

      });

    });

  }


  /* Search */

  if (recipeSearch) {

    recipeSearch.addEventListener(
      "input",
      renderAllRecipes
    );

  }


  /* Category */

  if (recipeCategory) {

    recipeCategory.addEventListener(
      "change",
      renderAllRecipes
    );

  }


  /* Initial render */

  renderAllRecipes();










  // FOR CONTACT

  /* =======================================================
   CONTACT FORM
======================================================= */

  const contactForm = document.getElementById("contactForm");

  const contactMessageStatus =
    document.getElementById("contactMessageStatus");


  if (contactForm && contactMessageStatus) {

    contactForm.addEventListener("submit", (event) => {

      event.preventDefault();


      const name =
        document.getElementById("contactName").value.trim();

      const email =
        document.getElementById("contactEmail").value.trim();

      const subject =
        document.getElementById("contactSubject").value.trim();

      const message =
        document.getElementById("contactMessage").value.trim();


      contactMessageStatus.className =
        "contact-message-status";


      if (!name || !email || !subject || !message) {

        contactMessageStatus.textContent =
          "Please fill in all fields.";

        contactMessageStatus.classList.add("error");

        return;
      }


      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (!emailPattern.test(email)) {

        contactMessageStatus.textContent =
          "Please enter a valid email address.";

        contactMessageStatus.classList.add("error");

        return;
      }


      contactMessageStatus.textContent =
        "Thank you! Your message has been sent successfully.";

      contactMessageStatus.classList.add("success");


      contactForm.reset();

    });

  }

});















// // FOR RECIPE PAGE

// /* =======================================================
//    ALL RECIPES PAGE
// ======================================================= */

// const allRecipeContainer =
//   document.getElementById("allRecipeContainer");

// const recipeSearch =
//   document.getElementById("recipeSearch");

// const recipeCategory =
//   document.getElementById("recipeCategory");

// const noRecipeFound =
//   document.getElementById("noRecipeFound");


// const allRecipes = [

//   {
//     title: "Big and Juicy Wagyu Beef Cheeseburger",
//     category: "beef",
//     time: "30 Minutes",
//     image: "image/recipe1.jpg"
//   },

//   {
//     title: "Fresh Lime Roasted Salmon with Ginger Sauce",
//     category: "seafood",
//     time: "30 Minutes",
//     image: "image/recipe2.jpg"
//   },

//   {
//     title: "Strawberry Oatmeal Pancake with Honey Syrup",
//     category: "breakfast",
//     time: "20 Minutes",
//     image: "image/recipe3.jpg"
//   },

//   {
//     title: "Fresh and Healthy Mixed Mayonnaise Salad",
//     category: "healthy",
//     time: "15 Minutes",
//     image: "image/recipe4.jpg"
//   },

//   {
//     title: "Chicken Meatballs with Cream Cheese",
//     category: "chicken",
//     time: "35 Minutes",
//     image: "image/recipe5.jpg"
//   },

//   {
//     title: "Fruity Pancake with Orange & Blueberry",
//     category: "sweet",
//     time: "25 Minutes",
//     image: "image/recipe6.jpg"
//   },

//   {
//     title: "The Best Easy One Pot Chicken and Rice",
//     category: "chicken",
//     time: "40 Minutes",
//     image: "image/recipe7.jpg"
//   },

//   {
//     title: "The Creamiest Creamy Chicken and Bacon Pasta",
//     category: "pasta",
//     time: "35 Minutes",
//     image: "image/recipe8.jpg"
//   },

//   {
//     title: "Creamy Garlic Parmesan Pasta",
//     category: "pasta",
//     time: "25 Minutes",
//     image: "image/recipe9.jpg"
//   },

//   {
//     title: "Grilled Vegetable Bowl",
//     category: "vegetarian",
//     time: "20 Minutes",
//     image: "image/recipe10.jpg"
//   },

//   {
//     title: "Honey Garlic Chicken",
//     category: "chicken",
//     time: "30 Minutes",
//     image: "image/recipe11.jpg"
//   },

//   {
//     title: "Classic Berry Cheesecake",
//     category: "sweet",
//     time: "45 Minutes",
//     image: "image/recipe12.jpg"
//   }

// ];


// function renderAllRecipes() {

//   if (!allRecipeContainer) {
//     return;
//   }


//   const searchValue =
//     recipeSearch
//       ? recipeSearch.value.toLowerCase().trim()
//       : "";

//   const selectedCategory =
//     recipeCategory
//       ? recipeCategory.value
//       : "all";


//   const filteredRecipes =
//     allRecipes.filter((recipe) => {

//       const matchesSearch =
//         recipe.title
//           .toLowerCase()
//           .includes(searchValue);

//       const matchesCategory =
//         selectedCategory === "all" ||
//         recipe.category === selectedCategory;

//       return matchesSearch && matchesCategory;

//     });


//   allRecipeContainer.innerHTML = "";


//   if (filteredRecipes.length === 0) {

//     if (noRecipeFound) {
//       noRecipeFound.classList.remove("d-none");
//     }

//     return;
//   }


//   if (noRecipeFound) {
//     noRecipeFound.classList.add("d-none");
//   }


//   filteredRecipes.forEach((recipe) => {

//     const recipeCard = document.createElement("div");

//     recipeCard.className =
//       "col-sm-6 col-lg-4";


//     recipeCard.innerHTML = `

//             <article class="recipe-card">

//                 <div class="recipe-image">

//                     <img
//                         src="${recipe.image}"
//                         alt="${recipe.title}"
//                         loading="lazy"
//                     >

//                     <button
//                         type="button"
//                         class="favorite-btn"
//                         aria-label="Add to favorites"
//                         aria-pressed="false"
//                     >
//                         <i class="fa-regular fa-heart"></i>
//                     </button>

//                 </div>


//                 <div class="recipe-content">

//                     <a
//                         href="#"
//                         class="recipe-title"
//                     >
//                         <h3>
//                             ${recipe.title}
//                         </h3>
//                     </a>


//                     <div class="recipe-info">

//                         <span>
//                             <i class="fa-regular fa-clock"></i>
//                             ${recipe.time}
//                         </span>

//                         <span>
//                             <i class="fa-solid fa-utensils"></i>
//                             ${recipe.category}
//                         </span>

//                     </div>

//                 </div>

//             </article>

//         `;


//     allRecipeContainer.appendChild(recipeCard);

//   });


//   /*
//       Your existing favorite button code
//       runs before these cards are created,
//       so initialize the newly-created
//       favorite buttons here.
//   */

//   const favoriteButtons =
//     allRecipeContainer.querySelectorAll(
//       ".favorite-btn"
//     );


//   favoriteButtons.forEach((button) => {

//     button.addEventListener("click", () => {

//       const isActive =
//         button.classList.toggle("active");


//       button.setAttribute(
//         "aria-pressed",
//         String(isActive)
//       );


//       const icon =
//         button.querySelector("i");


//       if (!icon) {
//         return;
//       }


//       if (isActive) {

//         icon.classList.remove(
//           "fa-regular"
//         );

//         icon.classList.add(
//           "fa-solid"
//         );

//       } else {

//         icon.classList.remove(
//           "fa-solid"
//         );

//         icon.classList.add(
//           "fa-regular"
//         );

//       }

//     });

//   });

// }


// /* Search */

// if (recipeSearch) {

//   recipeSearch.addEventListener(
//     "input",
//     renderAllRecipes
//   );

// }


// /* Category */

// if (recipeCategory) {

//   recipeCategory.addEventListener(
//     "change",
//     renderAllRecipes
//   );

// }


// /* Initial render */

// renderAllRecipes();