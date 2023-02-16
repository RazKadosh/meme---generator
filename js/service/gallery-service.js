'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['angry', 'politics'] },
    { id: 2, url: 'img/2.jpg', keywords: ['dog', 'cute'] },
    { id: 3, url: 'img/3.jpg', keywords: ['baby', 'sleep'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat', 'cute'] },
    { id: 5, url: 'img/5.jpg', keywords: ['angry', 'baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['weird', 'man'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby', 'funny'] },
    { id: 8, url: 'img/8.jpg', keywords: ['weird', 'crazy'] },
    { id: 9, url: 'img/9.jpg', keywords: ['baby', 'funny'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'politics'] },
    { id: 11, url: 'img/11.jpg', keywords: ['love', 'boxing'] },
    { id: 12, url: 'img/12.jpg', keywords: ['famous', 'old'] },
    { id: 13, url: 'img/13.jpg', keywords: ['famous', 'cheers'] },
    { id: 14, url: 'img/14.jpg', keywords: ['angry', 'scary'] },
    { id: 15, url: 'img/15.jpg', keywords: ['angry', 'explain'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'old'] },
    { id: 17, url: 'img/17.jpg', keywords: ['famous', 'politics'] },
    { id: 18, url: 'img/18.jpg', keywords: ['toys', 'famous'] },
]

function getImgs() {
    return gImgs
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    gMeme.selectedImgUrl = `img/${imgId}.jpg`
}