'use strict'

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
      posY: gElCanvas.height - 200,
    }
  }

  gMeme.lines.push(line)
  gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function deleteLine() {
  if (gMeme.lines.length === 1) {
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
    return
  }

  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
  gMeme.selectedLineIdx--

  if (gMeme.selectedLineIdx < 0) gMeme.selectedLineIdx = 0

}

function switchLines() {
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
  else gMeme.selectedLineIdx++
}

function changeAlign(align) {
  gMeme.lines[gMeme.selectedLineIdx].align = align

  if (align === 'left') var x = gElCanvas.width / 25
  if (align === 'center') var x = gElCanvas.width / 2
  if (align === 'right') var x = gElCanvas.width - gElCanvas.width / 25

  gMeme.lines[gMeme.selectedLineIdx].posX = x
}

function downloadMeme(elLink) {
  const data = gElCanvas.toDataURL()
  elLink.href = data
}

function doShareImg(imgDataUrl, onSuccess) {
  const formData = new FormData()

  formData.append('img', imgDataUrl)
  console.log('formData:', formData)

  fetch('//ca-upload.com/here/upload.php', { method: 'POST', body: formData })
      .then(res => res.text())
      .then(url => {
          console.log('url:', url)
          onSuccess(url)
      })
}