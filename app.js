
AOS.init();
const quotes = document.getElementById("quotes")
const author = document.getElementById("author")
const newQ = document.getElementById("newQ")
const tweetMe = document.getElementById("tweetMe")
let realData = "";
let quotesData = "";

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`
    window.open(tweetPost)
}
const getNewQoutes = () => {
    let rNum = Math.floor(Math.random() * 1643)
    quotesData = realData[rNum]

    quotes.innerText = `${quotesData.text}`
    quotesData.author == null ? (author.innerText = 'Unknown')
        : author.innerText = `${quotesData.author}`


}
const getQoutes = async () => {
    const api = "https://type.fit/api/quotes"
    try {
        let data = await fetch(api)
        realData = await data.json()
        // console.log(realData.length);
        getNewQoutes()
    } catch (error) {

    }
}
tweetMe.addEventListener('click', tweetNow)
newQ.addEventListener('click', getNewQoutes)
getQoutes()

