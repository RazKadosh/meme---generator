'use strict'

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['angry', 'politics'] },
{ id: 1, url: 'img/2.jpg', keywords: ['dog', 'cute'] }
]

var gMeme = {
  selectedImgId: 2,
  selectedImgUrl: 'img/2.jpg',
  selectedLineIdx: 0,

  lines: [
    {
      txt: 'Enter text here',
      size: 40,
      font: 'Impact',
      color: '#ffffff',
      strokeColor: '#000000',
      align: 'center',
      posX: 250,
      posY: 50,
    }
  ]
}


function getMeme() {
  return gMeme
}

function getImgs() {
  return gImgs
}


function setImg(imgId) {
  gMeme.selectedImgId = imgId
  gMeme.selectedImgUrl = `img/memes/${imgId}.jpg`
}


function setLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt
}


function setFillColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color
}


function setStrokeColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
}

function setFontSize(num) {
  const lineIdx = gMeme.selectedLineIdx
  const fontSize = gMeme.lines[lineIdx].size

  if (fontSize < 30 || fontSize > 100) return
  gMeme.lines[lineIdx].size += num
}

function setMoveLine(num) {
  gMeme.lines[gMeme.selectedLineIdx].posY += num
}


function setFontFamily(font) {
  gMeme.lines[gMeme.selectedLineIdx].font = font
}


function addLine() {
  const linesCount = gMeme.lines.length

  if (linesCount === 1) {
    var line = {
      txt: 'Enter text here',
      size: 40,
      font: 'Impact',
      color: '#ffffff',
      strokeColor: '#000000',
      align: 'center',
      posX: gElCanvas.width / 2,
      posY: gElCanvas.height - 50,
    }
  }

  else {
    line = {
      txt: 'Enter more text here',
      size: 40,
      font: 'Impact',
      color: '#ffffff',
      strokeColor: '#000000',
      align: 'center',
      posX: gElCanvas.width / 2,
      posY: gElCanvas.height - 150,
    }
  }

  gMeme.lines.push(line)
  gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchLines() {
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0

  else gMeme.selectedLineIdx++
}

