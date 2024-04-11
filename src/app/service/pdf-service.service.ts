import { Injectable } from '@angular/core';
import * as jsPDF from "jspdf";

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  generatePdf(imageUrl: string, text: string) {
    const pdf = new jsPDF.jsPDF();
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx!.drawImage(img, 0, 0, img.width, img.height);

      const imgData = canvas.toDataURL('image/jpeg');
      pdf.addImage(imgData, 'JPEG', 15, 40, 180, 160);
      pdf.text( text, 20, 20 );
      pdf.save('riff_coupon.pdf');
    };

    img.src = imageUrl;
  }
}
