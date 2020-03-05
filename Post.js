class Post {
    constructor(title) {
    this.title = title
    this.date = new Date()
    }

    showTitle() {
        console.log(this.title)
    }
}