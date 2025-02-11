# A small Reading Club 📚

Find your next read! Discover a book you've meant to read or revisit a beloved favorite you'd like to pick up again.

## About the project

A personal project showcasing a curated collection of books in a responsive and interactive single-page website that helps readers discover their next great book. Built with HTML, CSS, and JavaScript, this site displays multiple book entries that include visual previews, detailed information, and interactive features to track reading interest.

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

**Layout**:

- Minimal HTML structure
- Responsive CSS with media queries to adapt to mobile, tablet, desktop and large screen

**Dynamic content generation**:

- Book entries are dynamically created with JavaScript
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

1. Clone the repository and open `index.html` in your preferred browser

To update content (access required to Google Sheets file):

1. Edit the Google Sheets document
2. Create vitual environment and pip install `requirements.txt`
3. Run `main.py` to regenerate `books.json`
4. Refresh browser

## Project status

Feedback and suggestions are welcome through GitHub issues.

## Acknowledgments

- This project was originally created as a team project for a JavaScript course on [CodePen](https://codepen.io/firstwoman/pen/XWLmoRJ)
- The reading tracking feature was inspired by The New York Times' ["The 100 Best Books of the 21st Century"](https://www.nytimes.com/interactive/2024/books/best-books-21st-century.html) interactive article
- All book descriptions and reviews have been curated from various editorial sites and GoodReads
- UI design by [Zuloaga Studio](https://zuloaga.studio/)
