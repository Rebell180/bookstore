function getBookTemplate (book) {

    return /*html*/`
        <div id="book-0" class="book-card">
            
            <header class="book-header">
                <h2>Titel</h2>
                <img src="./assets/img/book_img.png" class="head-img" alt="show a book as template, non-specific">
                <div class="book-info-head">
                    <span id="book-price"><strong>Price</strong></span>
                    <div>
                        <span>likes</span>
                        <img id="like-btn" src="./assets/icons/like_empty.png"alt="like icon">
                    </div>
                </div>
            </header>

            <div class="book-info">
                <table class="info-table">
                    <tr>
                        <td class="td-align">Autor:</td>
                        <td id="td-author">author name</td>
                    </tr>
                    <tr>
                        <td class="td-align">veröffentlicht:</td>
                        <td id="td-published">Year 2025</td>
                    </tr>
                    <tr>
                        <td class="td-align">Genre:</td>
                        <td id="td-genre">genre name</td>
                    </tr>
                </table>
            </div>

            <div id="book_0_comment_container" class="comment-container">
                <h3>Kommentare:</h3>
                <div>
                    <table id="tbl-comment" class="comment-table">
                        <tr>
                            <td class="td-align">[name]</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim doloribus pariatur dicta repellat quidem assumenda repellendus iusto aliquam culpa molestiae, a doloremque accusantium expedita, blanditiis, rem cupiditate nulla ducimus!</td>
                        </tr>
                        <tr>
                            <td class="td-align">[name]</td>
                            <td>commentMsg</td>
                        </tr>
                        <tr>
                            <td class="td-align">[name]</td>
                            <td>commentMsg</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="add-comment-container">
                <form >
                    <input type="text" id="comment-input" placeholder="Schreibe einen Kommentar ...">
                    <button id="comment-submit-btn">
                        <img src="./assets/icons/send.png">
                    </button>
                </form>
                    
            </div>
        </div>
    `
}


function getCommentTemplate() {
    return /*html*/`
        <a>comment</a>
    `
}