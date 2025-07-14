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
    static showAllBooks() {

        LocalStorageManager.getDataFromLS();

        const bookContainerRef = document.getElementById('book-container');
        bookContainerRef.innerHTML = "";

        for(let i = 0; i < LocalStorageManager.books.length; i++) {
            const currentBook = LocalStorageManager.books[i];
            bookContainerRef.innerHTML += TemplateManager.getBookTemplate(currentBook);
        }

        BookManager.showAllLikeAreas();
        BookManager.showAllComments();

        BookManager.addLikeEventListener();
        BookManager.addCommentEventListener();
    }

    /**
     * Render the like area for all books.
     */
    static showAllLikeAreas() {

        for(let i = 0; i < LocalStorageManager.books.length; i++) {
            const currentBook = LocalStorageManager.books[i];
            const likeAreaRef = document.getElementById(currentBook.likeAreaId);
            likeAreaRef.innerHTML = "";
            likeAreaRef.innerHTML += TemplateManager.getLikeAreaTemplate(currentBook);
        }
    }

    /**
     * Render the comments for all books.
     */
    static showAllComments() {

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
            likeBtnRef.addEventListener('click', () => BookManager.toggleLike(currentBook));
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

        if(commentInputRef.value !== "") {
            currentBook.comments.unshift({'creator':'unknownXP3', 'commentMsg': commentInputRef.value});
            LocalStorageManager.setDataToLS();
            BookManager.updateComments(currentBook);
        }
    }

    /**
     * Toggles the like icon to like or dislike a book.
     * 
     * @param {number} index of the bookDB to localize the right book
     */
    static toggleLike(currentBook) {

        if(currentBook.isLiked) {
            currentBook.isLiked = false;
            currentBook.likes = currentBook.likes - 1; 
            currentBook.likeBtnSrc = "./assets/icons/like_empty.png";
        }
        else {
            currentBook.isLiked = true;
            currentBook.likes = currentBook.likes + 1;
            currentBook.likeBtnSrc = "./assets/icons/like_full.png";
        }

        LocalStorageManager.setDataToLS();
        BookManager.updateLikeArea(currentBook);

    }

    /**
     * Updates the comments for a single book.
     * 
     * @param {Book} currentBook 
     */
    static updateComments(currentBook) {
        const currentComments = currentBook.comments;
        const currentCommentAreaRef = document.getElementById(currentBook.commentTableId);
        currentCommentAreaRef.innerHTML = "";

        for(let i = 0; i < currentComments.length; i++) {
            const currentComment = currentComments[i]
            currentCommentAreaRef.innerHTML += TemplateManager.getCommentTemplate(currentComment);
        }
    }

    /**
     * Updates the like area for right count and icon
     * 
     * @param {Book} currentBook 
     */
    static updateLikeArea(currentBook) {

        const likeAreaRef = document.getElementById(currentBook.likeAreaId);
        likeAreaRef.innerHTML = "";
        likeAreaRef.innerHTML += TemplateManager.getLikeAreaTemplate(currentBook);

        const likeBtnRef = document.getElementById(currentBook.likeIconId);
        likeBtnRef.addEventListener('click', () => BookManager.toggleLike(currentBook));

    }

}