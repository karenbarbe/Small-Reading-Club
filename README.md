# A small Reading Club 📚

Find your next read! Discover a book you've meant to read or revisit a beloved favorite you'd like to pick up again.

## About the project

A personal project showcasing a curated collection of books in an interactive single-page website that helps readers discover their next great book. Built with HTML, CSS, and JavaScript, this site displays several book entries including visual previews, detailed information, and interactive features to track reading interest.

## Live site

[A small Reading Club](https://karenbarbe.github.io/Small-Reading-Club/) on GitHub Pages

## Features

### Book display

Each book entry includes:

- Carousel featuring book cover and 4-5 interior pages
- Title and author
- Plot summary
- Awards, if any
- Personal recommendation
- Publication year
- Emotion and genre tags

### Interactive elements

**Reading tracking**:

- Persistent navigation bar with reading counters
- Interactive "I read it" and "I want to read it" buttons for each book

**Personal reading lists**:

- "My reading" section displays two personalized lists: the "I've read" collection for tracking completed books and the "I want to read" list for future reading goals

### Technical implementation

**Dynamic content generation**:

- Book entries are dynamically created with JavaScript
- Minimal HTML structure
- Content is managed through a private Google Sheets database

**Data pipeline**:

- Google Sheets data is published to web as CSV
- Python script converts CSV to JSON
- JavaScript fetches and renders the JSON data

## Built with

- HTML5
- CSS3
- JavaScript
- Python (for data processing)
- Google Sheets (as a CMS)

## Getting started

To run this project locally:

1. Clone the repository
   ```
   git clone https://github.com/karenbarbe/Small-Reading-Club.git
   ```
2. Open `index.html` in your preferred browser

Note: The site runs on pre-processed JSON data. The content management system (Google Sheets) is private to maintain data integrity.

## Project status

Feedback and suggestions are welcome through GitHub issues.

## Acknowledgments

- This project was originally created as a team project for a JavaScript course on [CodePen](https://codepen.io/firstwoman/pen/XWLmoRJ)
- The reading tracking feature was inspired by The New York Times' ["The 100 Best Books of the 21st Century"](https://www.nytimes.com/interactive/2024/books/best-books-21st-century.html) interactive article
- All book descriptions and reviews have been curated from various editorial sites and GoodRead
- UI re-design by [Rodrigo Zuloaga Studio](https://zuloaga.studio/)
