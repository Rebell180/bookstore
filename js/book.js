class Book {

    // #region properties
    static bookCount = 0;
    
    id;
    likeIconId;
    likeCounterId;
    commentId;
    commentBtnId;
    commentContainerId;

    name;
    author;
    price;
    publishedYear;
    genre;
    likesCount;
    isLiked;

    comments = [];

    // #endregion properties

    constructor(pName, pAuthor, pPrice, pPublishedYear, pGenre, pIsLiked = false) {
        
        Book.bookCount++;

        this.id = "book_" + Book.bookCount;
        this.likeIconId = this.id + "_icon";
        this.likeCounterId = this.id + "_counter";
        this.commentId = this.id + "_comment";
        this.commentBtnId = this.commentId + "_btn";
        this.commentContainerId = this.commentId + "_container";

        this.name = pName;
        this.author = pAuthor;
        this.price = pPrice; 
        this.publishedYear = pPublishedYear;
        this.genre = pGenre;
        this.likes = pLikes;
        this.isLiked = pIsLiked;

        // render Card
        this.renderBookCard();

    }

    // #region methods

    renderBookCard() {
        const bookContainerRef = document.getElementById('book_container');
        bookContainerRef.innerHTML += getBookTemplate(this);

        const commentButtonRef = document.getElementById(this.commentBtnId);
        commentButtonRef.addEventListener('click', () => this.addComment());

        const likeIconRef = document.getElementById(this.likeIconId);
        likeIconRef.addEventListener('click', () => this.toggleLike());
    }

    toggleLike() {
        if(this.isLiked) {
            this.isLiked = false;
            this.likes = this.likes + 1;
            updateLikeArea();
        } else {
            this.isLiked = true;
            this.likes = this.likes - 1;
            updateLikeArea();
        }
    }

    updateLikeArea() {
        let iconPath;
        
        if(this.isLiked) {
            iconPath = "heart_full";
        }
        else {
            iconPath = "heart_empty";
        }

        const iconElement = document.getElementById(this.likeIconId);
        iconElement.src = iconPath;

        const counter = document.getElementById(this.likeCounterId);
        counter.innerHTML = this.likes;
    }

    // EventListener function AddCommentButton
    addComment(){
        const creator = "Kevin";
        const commentMsgRef = document.getElementById(this.commentId);

        this.comments.push(new Comment(creator, commentMsgRef.value));
        commentMsgRef.value = "";

        this.renderComments();
    }

    renderComments() {
        const commentContainerRef = document.getElementById(this.commentContainerId)
        commentContainerRef.innerHTML = "";
        for(let i = 0; i < this.comments.length; i++) {
            const currentComment = comments[i];
            commentContainerRef += getCommentTemplate(currentComment);
        }
    }
    // #endregion methods
}

class Comment {

    creator; 
    commentMsg;

    constructor(pCreator, pCommentMsg) {
        this.creator = pCreator;
        this.commentMsg = pCommentMsg;
    }
}





