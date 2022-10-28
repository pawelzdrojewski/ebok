import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { PDFDocument, StandardFonts, rgb, degrees } from 'pdf-lib'

@Component({
  selector: 'app-faktury',
  templateUrl: './faktury.component.html',
  styleUrls: ['./faktury.component.scss']
})
export class FakturyComponent implements OnInit {

  dataSource: any;

  podglad: boolean = false;
  required: string = 'allfv';

  constructor(private httpService: HttpService){} //private Http: HttpService) { }

  ngOnInit(): void {

    this.FakturyGet(this.required); 
  }

  FakturyGet(text: string){  
    this.httpService.getAllFaktury(text).subscribe(
      (response) => { this.dataSource = response; },
      (error) => { console.log(error); }
      );
     // return this.dataSource;
  }


  show(){
    this.podglad = true;
    
    console.log(this.podglad);
  }
  async getPDF(){
// Create a new PDFDocument
const pdfDoc = await PDFDocument.create()

// Embed the Times Roman font
const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

// Add a blank page to the document
const page = pdfDoc.addPage()

// Get the width and height of the page
const { width, height } = page.getSize()

// Draw a string of text toward the top of the page
const fontSize = 30
page.drawText('Creating PDFs in JavaScript is awesome!', {
  x: 50,
  y: height - 4 * fontSize,
  size: fontSize,
  font: timesRomanFont,
  color: rgb(0, 0.53, 0.71),
})
var a = window.document.createElement("a");
// Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save();

console.log(pdfBytes);



const bytes  = new Uint8Array( pdfBytes ); 
const blob   = new Blob( [ bytes ], { type: "application/pdf" } );
const docUrl = URL.createObjectURL( blob );
console.log(docUrl);
a.href = window.URL.createObjectURL(blob);
console.log(a.href);
a.download = "help.pdf";

// For example, `pdfBytes` can be:
//   • Written to a file in Node
//   • Downloaded from the browser
//   • Rendered in an <iframe>
  }

}
