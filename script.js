const articlesListElement = document.getElementById("articles__list");

function createArticleItems(books) {
  const fragment = document.createDocumentFragment();

  books.forEach((book, i) => {
    book.id = i + 1;

    const {
      emotion,
      title,
      author,
      year,
      summary,
      recommendation,
      genre,
      awards,
    } = book;

    // Article
    const article = document.createElement("article");
    article.id = `book${book.id}`;
    article.classList.add("article__container");

    // div header container
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header__container");
    // Span label
    const spanLabel = document.createElement("span");
    spanLabel.classList.add("label");
    spanLabel.textContent = "If you’re looking for";
    // h2 Emotion heading
    const h2Emotion = document.createElement("h2");
    h2Emotion.classList.add("label-h2");
    h2Emotion.textContent = emotion;

    // div Gallery background
    const carouselBg = document.createElement("div");
    carouselBg.classList.add("carousel__bg");
    // div Carousel container
    const carousel = document.createElement("div");
    carousel.classList.add("carousel", "flex");
    // Chevron containers
    const chevPrevContainer = document.createElement("div");
    chevPrevContainer.classList.add("chevron__container", "flex", "prev");
    const chevNextContainer = document.createElement("div");
    chevNextContainer.classList.add("chevron__container", "flex", "next");

    // chevron icons
    const chevronPrev = createSVG("prev-icon", 32, 70, "Previous slide");
    const chevronNext = createSVG("next-icon", 32, 70, "Previous slide");
    chevronPrev.classList.add("chevron");
    chevronNext.classList.add("chevron");

    // Gallery container with pictures and images
    const gallery = createGallery(book);

    // Div for Review Content container
    const reviewContainer = document.createElement("div");
    reviewContainer.classList.add("stack-md", "review__container");

    // div title container
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("text__container");
    // h2 Title heading
    const h2Title = document.createElement("h2");
    h2Title.textContent = title;
    // p Author
    const pAuthor = document.createElement("p");
    pAuthor.classList.add("p-lg", "author");
    pAuthor.textContent = author;
    // div text 1 container
    const text1Container = document.createElement("div");
    text1Container.classList.add("text__container");

    // Summary paragraph
    const summaryBody = document.createElement("p");
    summaryBody.textContent = summary;
    summaryBody.classList.add("p-md");
    // div text 2 container
    const text2Container = document.createElement("div");
    text2Container.classList.add("text__container");

    if (awards.length > 0) {
      // h4 Awards heading
      const h4Awards = document.createElement("h4");
      h4Awards.textContent = "Awards";
      // Awards list
      const ulAwards = document.createElement("ul");
      createListItems(awards, ulAwards);

      text2Container.append(h4Awards, ulAwards);
    }

    // h4 Why we love it heading
    const h4Why = document.createElement("h4");
    h4Why.textContent = "Why we love it";
    // Recommendation paragraph
    const whyBody = document.createElement("p");
    whyBody.textContent = `“${recommendation}”`;
    // div info container
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info__container");
    // p Year
    const pYear = document.createElement("p");
    pYear.classList.add("label", "p-md");
    pYear.textContent = year;
    // Genre list
    const ulGenre = document.createElement("ul");
    ulGenre.classList.add("flex", "genre");
    createListItems(genre, ulGenre);

    // Choice container
    const choiceContainer = document.createElement("div");
    choiceContainer.classList.add("choice__container", "flex");

    const readChoiceTile = createChoiceTile("read", "", i, title, "I read it");
    const toReadChoiceTile = createChoiceTile(
      "to-read",
      "",
      i,
      title,
      "Want to read it"
    );

    choiceContainer.append(readChoiceTile, toReadChoiceTile);
    infoContainer.append(pYear, ulGenre);
    text2Container.append(h4Why, whyBody);
    text1Container.append(summaryBody);
    titleContainer.append(h2Title, pAuthor);
    reviewContainer.append(
      titleContainer,
      text1Container,
      text2Container,
      infoContainer
    );
    chevPrevContainer.appendChild(chevronPrev);
    chevNextContainer.appendChild(chevronNext);
    carousel.append(chevPrevContainer, gallery, chevNextContainer);
    carouselBg.appendChild(carousel);
    headerContainer.append(spanLabel, h2Emotion);
    article.append(
      headerContainer,
      carouselBg,
      reviewContainer,
      choiceContainer
    );
    fragment.appendChild(article);

    setupSlideshow(book, chevronPrev, chevronNext, gallery);
  });

  articlesListElement.appendChild(fragment);
}

function createGallery(book) {
  const galleryContainer = document.createElement("div");
  galleryContainer.classList.add("gallery__container", "flex");

  const { title, path, images } = book;

  images.forEach((image) => {
    const picture = document.createElement("div"); // originally this was a 'picture' element but changed because of Safari behavior

    const img = document.createElement("img");
    img.src = `./images/${path}-${image}.jpg`;
    img.alt = `${title}`;
    img.loading = "lazy";

    picture.appendChild(img);
    galleryContainer.appendChild(picture);
  });

  return galleryContainer;
}

function createListItems(array, parentElement) {
  const fragment = document.createDocumentFragment();

  array.forEach((arrayItem) => {
    const listItem = document.createElement("li");
    listItem.textContent = arrayItem;
    fragment.appendChild(listItem);
  });
  parentElement.appendChild(fragment);
}

function countCheckedBooks(bookType) {
  let booksList = [];
  let checkboxes,
    countElement,
    countListElement,
    emptyMessage,
    singularMessage,
    pluralMessage,
    navCount;

  if (bookType === "read") {
    checkboxes = document.querySelectorAll(".books-read");
    countElement = document.getElementById("read-count");
    countListElement = document.getElementById("read-count-ul");
    emptyMessage = "I haven't read any of these books yet...";
    singularMessage = "I've read 1 book on the list:";
    pluralMessage = "I've read {count} books on the list:";
    navCount = document.getElementById("nav-read-count");
  } else if (bookType === "to-read") {
    checkboxes = document.querySelectorAll(".books-to-read");
    countElement = document.getElementById("to-read-count");
    countListElement = document.getElementById("to-read-count-ul");
    emptyMessage = "I'm sure there's something for me...";
    singularMessage = "I want to read 1 book:";
    pluralMessage = "I want to read {count} books:";
    navCount = document.getElementById("nav-to-read-count");
  }

  countElement.innerText = emptyMessage;
  countListElement.innerHTML = "";

  // Count checked books
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      booksList.push(checkboxes[i].value);
    }
  }

  // Update display
  if (booksList.length > 0) {
    if (booksList.length === 1) {
      countElement.innerText = singularMessage;
    } else {
      countElement.innerText = pluralMessage.replace(
        "{count}",
        booksList.length
      );
    }
    createListItems(booksList, countListElement);
  }
  navCount.innerText = booksList.length;
}

function setupSlideshow(book, prevButton, nextButton, galleryContainer) {
  prevButton.addEventListener("click", () =>
    updateGallery(book, "prev", galleryContainer)
  );
  nextButton.addEventListener("click", () =>
    updateGallery(book, "next", galleryContainer)
  );
}

function updateGallery(book, direction, galleryContainer) {
  const { path, title } = book;

  let newOrder;
  if (direction === "next") {
    newOrder = slideNext(book);
  } else {
    newOrder = slidePrev(book);
  }

  galleryContainer.innerHTML = "";

  newOrder.forEach((image) => {
    const picture = document.createElement("div"); // originally this was a 'picture' element but changed because of Safari behavior

    const img = document.createElement("img");
    img.src = `./images/${path}-${image}.jpg`;
    img.alt = `${title}`;
    img.loading = "lazy";

    picture.appendChild(img);
    galleryContainer.appendChild(picture);
  });

  book.images = newOrder;
}

function slideNext(book) {
  const { images } = book;
  let list = [...images];
  let firstItem = list.shift();
  list.push(firstItem);

  return list;
}

function slidePrev(book) {
  const { images } = book;
  let list = [...images];
  let lastItem = list.pop();
  list.unshift(lastItem);

  return list;
}

function createSVG(useName, width, height, alt) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", alt);
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("fill", "none");

  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    `#${useName}`
  ); // useName must be a string
  svg.appendChild(use);

  return svg;
}

function createChoiceTile(name, svgAlt, i, title, labelText) {
  // name, svgAlt, and labeltext must be a string
  const icon = createSVG(`${name}-icon`, 52, 70, svgAlt);
  icon.classList.add("svg-people");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = `book${i + 1}-${name}`;
  input.classList.add(`books-${name}`);
  input.value = title;

  const label = document.createElement("label");
  label.htmlFor = `book${i + 1}-${name}`;
  label.innerText = labelText;

  const tile = document.createElement("div");
  tile.classList.add("choice__tile");
  tile.addEventListener("click", () => {
    if (input.checked === false) {
      tile.classList.add("selected");
      input.checked = true;
      countCheckedBooks(name);
    } else {
      tile.classList.remove("selected");
      input.checked = false;
      countCheckedBooks(name);
    }
  });

  tile.append(icon, input, label);
  return tile;
}

createArticleItems(books);

document.addEventListener("DOMContentLoaded", function () {
  loadSVGs();
});

function loadSVGs() {
  fetch("icons.svg")
    .then((response) => response.text())
    .then((svgContent) => {
      document.getElementById("svg-container").innerHTML = svgContent;
    })
    .catch((error) => console.error("Error loading SVG file:", error));
}
