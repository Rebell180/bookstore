import {Book} from "./book.js";
import {Comment} from "./comment.js";

/**
 * Storage Manager handles the communication between website and local storage. 
 * It sets and gets the data.
 */
export class LocalStorageManager {
    
    static books = [
    new Book("Die Geheimnisse des Ozeans", "Clara Meer", 19.99, 2018, "Fantasy", 1250, true,
        [
            new Comment("Leser123", "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."),
            new Comment("Bookworm84", "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."),
            new Comment("FantasyFanatic", "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."),
            new Comment("SciFiGuru", "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."),
            new Comment("NovelLover", "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.")
        ]
    ),
    new Book("Der vergessene Pfad", "Maximilian Schwarz", 14.50, 2021, "Fantasy", 980, false,
        []
    ),
    new Book("Die Farben des Himmels", "Laura Blau", 22.95, 2019, "Romantik", 1520, true,
        [
            new Comment("LeserPeter", "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."),
            new Comment("BookLover21", "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."),
            new Comment("FantasyNerd", "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"),
            new Comment("SciFiEnthusiast", "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."),
            new Comment("ReadingAddict", "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.")
        ]
    ),
    new Book("Das Rätsel der Zeit", "Alexander Weiss", 18.00, 2020, "Science-Fiction", 750, false,
        [
            new Comment("BuchKenner", "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."),
            new Comment("LeseWurm", "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.")
        ]
    ),
    new Book("Der letzte Wächter", "Sabine Grün", 16.75, 2017, "Fantasy", 1300, true,
        []
    ),
    new Book("Im Schatten des Mondes", "Philipp Silber", 12.30, 2022, "Science-Fiction", 890, false,
        [
            new Comment("BücherLiebhaber", "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."),
            new Comment("Leseratte", "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.")
        ]
    ),
    new Book("Jenseits der Sterne", "Oliver Schwarz", 21.00, 2015, "Science-Fiction", 1450, true,
        [
            new Comment("Leser123", "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.")
        ]
    ),
    new Book("Das verborgene Königreich", "Elena Gold", 17.50, 2020, "Fantasy", 920, false,
        [
            new Comment("Bookworm92", "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.")
        ]
    ),
    new Book("Liebe in Zeiten des Krieges", "Emilia Rot", 19.99, 2016, "Romantik", 1800, true,
        [
            new Comment("Bibliophile23", "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."),
            new Comment("StorySeeker", "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."),
            new Comment("SciFiExplorer", "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.")
        ]
    )
    ];

    /**
     * Save the initial book data into the local storage
     */
    static setInitialDataToLS() {
        localStorage.setItem('books', JSON.stringify(LocalStorageManager.books));
    }
    
    /**
     * Gets the data of books from the local storage.
     * 
     * @returns an array of books.
     */
    static getDataFromLS() {
        let bookDB = JSON.parse(localStorage.getItem('books'));
        
        // set initial data when first run
        if(bookDB === null) {
            LocalStorageManager.setInitialDataToLS();
            bookDB = JSON.parse(localStorage.getItem('books'));
        }

        LocalStorageManager.books = bookDB;
    }
}

