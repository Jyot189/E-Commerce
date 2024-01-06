import PDFDocument from 'pdfkit'
import fs from 'fs'

const doc = new PDFDocument();

// Saving the pdf file in root directory.
doc.pipe(fs.createWriteStream('createAfilename.pdf'))

doc
    .fontSize(27)
    .text('This the article for GeeksforGeeks', 100, 100);

doc
    .addPage()
    .fillColor('blue')
    .text('The link for GeeksforGeeks website', 100, 100)

    .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');

// Finalize PDF file
doc.end();