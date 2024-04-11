import { Component } from '@angular/core';
import {DeviceUUID} from "device-uuid";
import {Code} from "../models/Code";
import {CodeGeneratorService} from "../service/code-generator.service";
import {PdfService} from "../service/pdf-service.service";

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css'
})
export class CouponComponent {

  code: Code = {deviceId:new DeviceUUID().get(), couponCode:""};

  deviceIdentifier: string = "";

  constructor(private service: CodeGeneratorService, private pdfService: PdfService) {

    this.service.saveCode(this.code).subscribe(
      (savedCode: Code) => {
        console.log('codice salvato:', savedCode);
        this.deviceIdentifier = savedCode.couponCode;
      });

  }

  generatePdf() {

    const imageUrl = 'assets/riff.jpg';
    const text = "Riscatta il codice per una bevuta gratuita : " + this.deviceIdentifier;

    this.pdfService.generatePdf(imageUrl, text);
  }

}
