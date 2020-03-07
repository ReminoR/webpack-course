export default class Post {
    constructor(title, img) {
    this.title = title
    this.img = img
    this.date = new Date()
    }

    showTitle() {
        console.log(this.title)
    }

    showDesc() {
        console.log('description of post')
    }
    showLogo() {
        return JSON.stringify( {
            title: this.title,
            img: this.img
        })
    }
}