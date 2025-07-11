/**
 * A class which contains the data for one single comment.
 */
export class Comment {

    creator; 
    commentMsg;

    constructor(pCreator, pCommentMsg) {
        this.creator = pCreator;
        this.commentMsg = pCommentMsg;
    }
}