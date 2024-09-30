// Books database
const books = [
  {
    emotion: "Supernatural",
    path: "ourshareofnight",
    images: ["cover", "1", "2", "3", "4", "5", "6"],
    title: "Our Share of Night",
    author: "Mariana Enriquez",
    genre: [
      "Horror",
      "Fiction",
      "Historical Fiction",
      "Latin American",
      "Queer",
    ],
    year: 2019,
    summary:
      "Moving back and forth in time, during the brutal years of Argentina’s military dictatorship and its turbulent aftermath, Our Share of Night is a novel like no other: a family story, a ghost story, a story of the occult and the supernatural, a book about the complexities of love and longing with queer subplots and themes.",
    awards: [
      "Premio Herralde de Novela (2019)",
      "Tähtifantasia Award Nominee (2023)",
      "Premio de la Crítica de Narrativa Castellana (2019)",
      "The Kitschies Nominee for Red Tentacle (Novel) (2023)",
      "Premio Celsius (2020)",
      "Goodreads Choice Award Nominee for Horror (2023)",
    ],
    recommendation:
      "This is the masterwork of one of Latin America’s most original novelists. An enchanting, shattering, once-in-a-lifetime reading experience.",
  },
  {
    emotion: "Unsilencing",
    path: "lilianasinvinciblesummer",
    images: ["cover", "1", "2", "3", "4"],
    title: "Liliana’s Invincible Summer",
    author: "Cristina Rivera Garza",
    genre: ["Memoir", "Nonfiction", "Biography", "Feminism", "Latin American"],
    year: 2021,
    summary:
      "In this gut-wrenching blend of memoir and reportage, Rivera Garza  investigates her younger sister Liliana’s 1990 murder by an abusive ex-boyfriend, who remains at large. Placing her sister’s death in the context of the femicide crisis in Mexico, Rivera Garza documents and recreates the years and months leading up to her murder, interweaving startling facts, case files and newspaper accounts with lyrical meditations on her family life and Liliana’s efforts to break away from her obsessive high school boyfriend. The excerpts from Liliana’s teenage diary and her oft-repeated desire not to be left alone haunt the narrative, as do Rivera Garza’s guilt and shame over her sister’s death.",
    awards: [
      "Pulitzer Prize for Memoir or Autobiography (2024)",
      "Premio Xavier Villaurrutia for Novela (2021)",
      "National Book Award Finalist for Non-Fiction (2023)",
    ],
    recommendation:
      "This book gives us the insight and the language to identify the signs of danger and to see in plain sight how patriarchy deforms and hurts men, as much as it does women.",
  },
  {
    emotion: "Visceral",
    path: "hurricaneseason",
    images: ["cover", "1", "2", "3", "4"],
    title: "Hurricane Season",
    author: "Fernanda Melchor",
    genre: ["Fiction", "Horror", "Latin American", "Crime"],
    year: 2017,
    summary:
      "The Witch is dead. And the discovery of her corpse—by a group of children playing near the irrigation canals—propels the whole village into an investigation of how and why this murder occurred. Rumors and suspicions spread. As the novel unfolds in a dazzling linguistic torrent, with each unreliable narrator lingering on new details, new acts of depravity or brutality, Melchor extracts some tiny shred of humanity from these characters that most would write off as utterly irredeemable, forming a lasting portrait of a damned Mexican village.",
    awards: [
      "National Book Award Nominee for Translated Literature (2020)",
      "Internationaler Literaturpreis – Haus der Kulturen der Welt (2019)",
      "Andrew Carnegie Medal Nominee for Fiction (2021)",
      "International Booker Prize Nominee for Shortlist (2020)",
      "Metų verstinė knyga Nominee for Fiction (2021)",
      "Dublin Literary Award Nominee (2021)",
    ],
    recommendation:
      "Hurricane Season takes you to a world filled with mythology and real violence: it’s a world that becomes more terrifying and more terrifyingly real the deeper you explore it.",
  },

  {
    emotion: "Metamorphosis",
    path: "eyeofthewild",
    images: ["cover", "1", "2", "3", "4", "5", "6"],
    title: "In the Eye of the Wild",
    author: "Nastassja Martin",
    genre: ["Memoir", "Nonfiction", "Nature", "Anthropology", "Philosophy"],
    year: 2019,
    summary:
      "In the Eye of the Wild begins with a terrifying account of the anthropologist Nastassja Martin’s nearly fatal run-in with a Kamchatka bear while conducting research in Siberia. In her dangerous encounter with the bear, however, she faced something else altogether: the nonhuman, the animal, the wild. Something in the balance of her world shifts. A change takes place that she must somehow reckon with.",
    awards: [],
    recommendation:
      "A fascinating, mind-altering book about terror, pain, endurance, and self-transformation. Here Nastassja Martin takes us to the farthest limits of human being.",
  },
  {
    emotion: "Toughness",
    path: "gorillasinmist",
    images: ["cover", "1", "2", "3", "4", "5"],
    title: "Gorillas in the Mist",
    author: "Dian Fossey",
    genre: ["Memoir", "Nonfiction", "Animals", "Nature", "Science"],
    year: 1983,
    summary:
      "One of the most important books ever written about our connection to the natural world, Gorillas in the Mist is the riveting account of Dian Fossey’s thirteen years in a remote African rain forest with the greatest of the great apes. Fossey’s extraordinary efforts to ensure the future of the rain forest and its remaining mountain gorillas are captured in her own words and in candid photographs of this fascinating endangered species.",
    awards: [],
    recommendation:
      "Although Fossey’s work ended tragically with her murder, Gorillas in the Mist remains an invaluable testament to one of the longest-running field studies of primates and reveals her undying passion for her subject.",
  },
  {
    emotion: "Reckoning",
    path: "fierceattachments",
    images: ["cover", "1", "2", "3", "4"],
    title: "Fierce Attachments",
    author: "Vivian Gornick",
    genre: ["Memoir", "Nonfiction", "Biography", "Feminism"],
    year: 1987,
    summary:
      "In this deeply etched and haunting memoir, Vivian Gornick tells the story of her lifelong battle with her mother for independence. Born and raised in the Bronx, Gornick grows up in a household dominated by her intelligent but uneducated mother’s romantic depression over the early death of her husband. Next door lives Nettie, an attractive widow whose calculating sensuality appeals greatly to Vivian. These women with their opposing models of femininity continue, well into adulthood, to affect Gornick’s struggle to find herself in love and in work.",
    awards: [
      "Premio de los Libreros de Madrid for Fiction (2017)",
      "New York Times #1 Best Memoir of the Past 50 Years (2019)",
    ],
    recommendation:
      "One of the most remarkable documents of family feeling that has been written, a classic that helped start the memoir boom and remains one of the most moving examples of the genre.",
  },
  {
    emotion: "Heartwarming",
    path: "84charingcrossrd",
    images: ["cover", "1", "2", "3", "4", "5"],
    title: "84, Charing Cross Road",
    author: "Helene Hanff",
    genre: ["Memoir", "Nonfiction", "Books about books", "British Literature"],
    year: 1970,
    summary:
      "This funny, poignant, classic love story unfolds through a series of letters between Helene Hanff, a freelance writer living in New York City, and a used-book dealer in London at 84, Charing Cross Road. Through the years, though never meeting and separated both geographically and culturally, they share a charming, sentimental friendship based on their common love for books.",
    awards: [],
    recommendation:
      "A unique, throat-lumping, love story about people who love books for readers who love books... A timeless period piece. Do read it.",
  },
];
