'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')

    renderGallery()
    renderMeme()
}


function renderMeme() {
    var img = new Image()
    var meme = getMeme()

    img.src = meme.selectedImgUrl

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

        meme.lines.forEach(line => {
            gCtx.lineWidth = '2'
            gCtx.font = `${line.size}px ${line.font}`
            gCtx.fillStyle = line.color
            gCtx.strokeStyle = line.strokeColor
            gCtx.textAlign = line.align

            gCtx.fillText(line.txt, line.posX, line.posY)
            gCtx.strokeText(line.txt, line.posX, line.posY)
        })
    }
}


function onUpdateText(ev) {
    setLineTxt(ev.target.value)
    console.log(ev.target.value)
    renderMeme()
}

function onUpdateFillColor(ev) {
    setFillColor(ev.target.value)
    renderMeme()
}

function onUpdateStrokeColor(ev) {
    setStrokeColor(ev.target.value)
    renderMeme()
}
 
function onIncreaseFontSize() {
    setFontSize(+1)
    renderMeme()
}

function onDecreaseFontSize() {
    setFontSize(-1)
    renderMeme()
}

function onMoveUpLine() {
    setMoveLine(-20)
    renderMeme()
}

function onMoveDownLine() {
    setMoveLine(20)
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onSwitchLines() {
    switchLines()
    renderMeme()
}

function onChangeAlign(align) {
    changeAlign(align)
    renderMeme()
}

