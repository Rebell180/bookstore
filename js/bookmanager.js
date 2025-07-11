import { LocalStorageManager } from "./localstoragemanager.js";
import { TemplateManager } from "./templatemanager.js"
import { Book } from "./book.js";
import { Comment } from "./comment.js";

/**
 * Handles the interaction to show and render the book Cards
 */
export class BookManager {

/**
 * Render the book data.
 */
static showBooks() {
    
    LocalStorageManager.getDataFromLS();

    const bookContainerRef = document.getElementById('book-container');
    bookContainerRef.innerHTML = "";
    
    for(let i = 0; i < LocalStorageManager.books.length; i++) {
        const currentBook = LocalStorageManager.books[i];
        bookContainerRef.innerHTML += TemplateManager.getBookTemplate(currentBook);
    }
    
    BookManager.showComments();
    BookManager.addCommentEventListener();
    BookManager.addLikeEventListener();
}

/**
 * Render the comments for books
 */
static showComments() {
    for(let i = 0; i < LocalStorageManager.books.length; i++){
        const currentBook = LocalStorageManager.books[i];
        const currentComments = currentBook.comments;
        const commentTableRef = document.getElementById(currentBook.commentTableId);
        commentTableRef.innerHTML = "";

        for(let j = 0; j < currentComments.length; j++) {
            const currentComment = currentComments[j]
            commentTableRef.innerHTML += TemplateManager.getCommentTemplate(currentComment);
        }
    }
}

/**
 * Add an event listener to the like button
 */
static addLikeEventListener() {
        for(let i = 0; i < LocalStorageManager.books.length; i++){
        const currentBook = LocalStorageManager.books[i];

        const likeBtnRef = document.getElementById(currentBook.likeIconId);
        likeBtnRef.addEventListener('click', () => BookManager.toggleLike(i));
    }
}

/**
 * Add an event listener to the comment button
 */
static addCommentEventListener() {
    for(let i = 0; i < LocalStorageManager.books.length; i++){
        const currentBook = LocalStorageManager.books[i];

        const submitButtonRef = document.getElementById(currentBook.commentBtnId);
        submitButtonRef.addEventListener('click', () => BookManager.addComment(i));
    }
}

/**
 * Adds a comment to a book
 * 
 * @param {number} index of the bookDB to localize the right book
 */
static addComment(index) {
    const currentBook = LocalStorageManager.books[index];
    const commentInputRef = document.getElementById(currentBook.commentInputId);

    currentBook.comments.unshift({'creator':'unknownXP3', 'commentMsg': commentInputRef.value});
    LocalStorageManager.setInitialDataToLS();
    BookManager.showBooks();
}

/**
 * Toggles the like icon to like or dislike a book.
 * 
 * @param {number} index of the bookDB to localize the right book
 */
static toggleLike(index) {

    const currentBook = LocalStorageManager.books[index];

    if(currentBook.isLiked) {
        currentBook.isLiked = false;
        currentBook.likes = currentBook.likes - 1; 
    }
    else {
        currentBook.isLiked = true;
        currentBook.likes = currentBook.likes + 1;
    }

    if(this.isLiked) {
        currentBook.likeBtnSrc = "./assets/icons/like_full.png";
    } 
    else {
        currentBook.likeBtnSrc = "./assets/icons/like_empty.png";
    }
    
    // LocalStorageManager.setInitialDataToLS();
    BookManager.showBooks();
}

}