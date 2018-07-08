function solve() {


    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(text) {
            this.comments.push(text);
        }

        toString() {
            let result = super.toString() + `\nRating: ${this.likes-this.dislikes}`;

            if (this.comments.length > 0) {
                result += `\nComments:`;
                for (let i = 0; i < this.comments.length; i++) {
                    result += `\n * ${this.comments[i]}`;
                }
            }

            return result;
        }

    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this; //enables function chaining
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {Post,SocialMediaPost,BlogPost};
}