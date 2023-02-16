'use strict'

function renderGallery() {
    const imgs = getImgs()

    const strHTML = imgs.map(function (img) {
        return `<img src="${img.url}"  onclick="onImgSelect(${img.id})">`
    })

    document.querySelector('.meme-gallery').innerHTML = strHTML.join('')
}


function onImgSelect(imgId) {
    const elEditor = document.querySelector('.meme-editor')
    elEditor.classList.remove('hide')

    const elGallery = document.querySelector('.meme-gallery')
    elGallery.style.display = 'none'

    setImg(imgId)
    renderMeme()
}
