export class TemplateManager {

    /**
     * This template function build a html template for a book card with submitted data.
     * 
     * @param {Book} book 
     * @returns a html template filled with data
    */
    static getBookTemplate (book) {

        return /*html*/`
            <div id="book-${book.id}" class="book-card">

                <header class="book-header">
                    <h2>${book.name}</h2>
                    <img src="./assets/img/book1.jpg" class="head-img" alt="show a book as template, non-specific">
                    <div class="book-info-head">
                        <span id="book-price"><strong >${book.formattedPrice}</strong></span>
                        <div>
                            <span>${book.likes}</span>
                            <img id="${book.likeIconId}" class="like-btn" src="${book.likeBtnSrc}" alt="like icon">
                        </div>
                    </div>
                </header>

                <hr>
                <div class="book-info">
                    <table class="info-table">
                        <tr>
                            <td class="td-align">Autor:</td>
                            <td id="td-author">${book.author}</td>
                        </tr>
                        <tr>
                            <td class="td-align">veröffentlicht:</td>
                            <td id="td-published">${book.publishedYear}</td>
                        </tr>
                        <tr>
                            <td class="td-align">Genre:</td>
                            <td id="td-genre">${book.genre}</td>
                        </tr>
                    </table>
                </div>

                <hr>
                <div class="comment-container">
                    <h3>Kommentare:</h3>
                    <div>
                        <table id="${book.commentTableId}" class="comment-table">
                            <!-- Comments here -->
                        </table>
                    </div>
                </div>

                <hr>
                <div class="add-comment-container">
                    <form >
                        <input type="text" id="${book.commentInputId}" class="comment-input" placeholder="Schreibe einen Kommentar ...">
                        <button type="button" id="${book.commentBtnId}" class="comment-submit-btn">
                            <img src="./assets/icons/send.png">
                        </button>
                    </form>

                </div>
            </div>
        `;
    }


    /**
    * This template function build a html template for a comment table row with submitted data.
    * 
    * @param {Comment} book 
    * @returns a html template filled with data
    */
    static getCommentTemplate(comment) {
        return /*html*/`
            <tr>
                <td class="td-align">[${comment.creator}]</td>
                <td>${comment.commentMsg}</td>
            </tr>
            `;
    }
}