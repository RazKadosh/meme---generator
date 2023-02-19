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

            line.txtWidth = gCtx.measureText(line.txt).width + 100
        })
        markCurrLine()
    }
}


function onSetListeners() {
    const elTextInput = document.querySelector('.text-line-input')
    elTextInput.addEventListener('input', onUpdateText)

    const elFillColorInput = document.querySelector('.font-color-input')
    elFillColorInput.addEventListener('input', onUpdateFillColor)

    const elFillStrokeColorInput = document.querySelector('.font-stroke-color-input')
    elFillStrokeColorInput.addEventListener('input', onUpdateStrokeColor)

    const elIncreaseFontBtn = document.querySelector('.increase-font-btn')
    elIncreaseFontBtn.addEventListener('click', onIncreaseFontSize)
    
    const elDecreaseFontBtn = document.querySelector('.decrease-font-btn')
    elDecreaseFontBtn.addEventListener('click', onDecreaseFontSize)
    
    const elAddLine = document.querySelector('.add-line-btn')
    elAddLine.addEventListener('click', onAddLine)

    const elDeleteLine = document.querySelector('.delete-line-btn')
    elDeleteLine.addEventListener('click', onDeleteText)

    const elSwitchLines = document.querySelector('.switch-line-btn')
    elSwitchLines.addEventListener('click', onSwitchLines)
    
    const elUpLine = document.querySelector('.up-line-btn')
    elUpLine.addEventListener('click', onMoveUpLine)

    const elDownLine = document.querySelector('.down-line-btn')
    elDownLine.addEventListener('click', onMoveDownLine)

    const elLeftLine = document.querySelector('.aline-left-btn')
    elLeftLine.addEventListener('click', () => {
        onChangeAlign('left')
    })

    const elCenterLine = document.querySelector('.aline-center-btn')
    elCenterLine.addEventListener('click', () => {
        onChangeAlign('center')
    })

    const elRightLine = document.querySelector('.aline-right-btn')
    elRightLine.addEventListener('click', () => {
        onChangeAlign('right')
    })

    const elFontFamilySelect = document.querySelector('.font-family-select')
    elFontFamilySelect.addEventListener('change', function () {
        onChangeFontFamily(this.value)
    })

    const elGalleryNav = document.querySelector('.nav-gallery')
    elGalleryNav.addEventListener('click', onChangeTab)
    
    const elLogoNav = document.querySelector('.logo')
    elLogoNav.addEventListener('click', onChangeTab)
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
    document.querySelector('.text-line-input').value = getSelectedLine().txt
}

function onSwitchLines() {
    switchLines()
    renderMeme()
    document.querySelector('.text-line-input').value = getSelectedLine().txt
}

function onDeleteText() {
    deleteLine()
    renderMeme()
    document.querySelector('.text-line-input').value = getSelectedLine().txt
}

function onChangeAlign(align) {
    changeAlign(align)
    renderMeme()
}

function clearTxtInput() {
    const elImputText = document.querySelector('.text-line-input')
    elImputText.value = ''
}


function onChangeFontFamily(font) {
    setFontFamily(font)
    renderMeme()
}


function onChangeTab() {
    
    const elGalleryNav = document.querySelector('.nav-gallery')
    const elLogoNav = document.querySelector('.logo')

    if (elGalleryNav || elLogoNav) {
        const elEditor = document.querySelector('.meme-editor')
        elEditor.classList.add('hide')

        const elGallery = document.querySelector('.meme-gallery')
        elGallery.style.display = 'grid'
        
        onInit()
    }
}

function markCurrLine() {
    const line = getSelectedLine()
    if (!line) return
    const pos = {
        x: line.posX - (line.txtWidth / 2),
        y: line.posY - (line.size / 2 + 10),
    }
    gCtx.strokeStyle = 'white'
    gCtx.lineWidth = 3
    gCtx.strokeRect(pos.x, pos.y, line.txtWidth, line.size)
}

function onShareOnFB() {
    const imgDataUrl = gElCanvas.toDataURL()

    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }

    doShareImg(imgDataUrl, onSuccess)
}

