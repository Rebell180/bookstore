
/**
 * An object class to define a book. 
 */
export class Book {

    // #region properties
    static bookCount = 0;
    
    id;
    likeIconId;
    likeBtnSrc;
    likeCounterId;
    commentId;
    commentInputId;
    commentBtnId;
    commenttableId;

    name;
    author;
    price;
    formattedPrice;
    publishedYear;
    genre;
    likes;
    isLiked;

    comments = [];

    // #endregion properties

    constructor(pName, pAuthor, pPrice, pPublishedYear, pGenre, pLikes, pIsLiked, pComments, ) {
        
        Book.bookCount++;

        this.id = "book-" + Book.bookCount;
        this.likeIconId = this.id + "-icon";
        this.likeCounterId = this.id + "-counter";
        this.commentId = this.id + "-comment";
        this.commentInputId = this.commentId + "-input";
        this.commentBtnId = this.commentId + "-btn";
        this.commentTableId = this.commentId + "-table";

        this.name = pName;
        this.author = pAuthor;
        this.price = pPrice;
        this.publishedYear = pPublishedYear;
        this.genre = pGenre;
        this.likes = pLikes;
        this.isLiked = pIsLiked;
        this.comments = pComments;

        this.formattedPrice = this.formatPrice();

        if(pIsLiked){
            this.likeBtnSrc = "/assets/icons/like_full.png";
        }
        else {
            this.likeBtnSrc = "/assets/icons/like_empty.png";
        }
    }

    // #region methods

    /**
     * Format the plain price to readable german format. 
     * @returns the formatted price as string.
     */
    formatPrice() {
        let fPrice = this.price.toFixed(2);
        fPrice = fPrice.replace('.', ',');
        return fPrice + " €";
    }

    // #endregion methods
}






