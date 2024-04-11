import {Component, ElementRef, ViewChild} from '@angular/core';
import {DeviceUUID} from "device-uuid";
import {Code} from "../models/Code";
import {CodeGeneratorService} from "../service/code-generator.service";
import {PdfService} from "../service/pdf-service.service";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.scss'
})
export class CouponComponent {

  @ViewChild('contentToDownload') contentToDownload!: ElementRef;

  code: Code = {deviceId:new DeviceUUID().get(), couponCode:""};

  deviceIdentifier: string = "";

  constructor(private service: CodeGeneratorService, private pdfService: PdfService) {

    this.service.saveCode(this.code).subscribe(
      (savedCode: Code) => {
        console.log('codice salvato:', savedCode);
        this.deviceIdentifier = savedCode.couponCode;
      });

  }


  downloadContentAsImage() {
    this.generateImageFile(this.contentToDownload.nativeElement).then((dataUrl: any) => {
      const filename = `coupon_code.png`;
      this.downloadImage(dataUrl, filename);
    });
  }

  generateImageFile(element: any) {
    return html2canvas(element, {
      useCORS: true, // Needed to download images from a different domain
    }).then(canvas => {
      return canvas.toDataURL('image/png'); // Convert canvas to data URL
    });
  }

  downloadImage(dataUrl: any, filename: any) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
