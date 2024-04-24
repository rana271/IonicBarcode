import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BarcodeService } from '../barcode.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private barcodeservice:BarcodeService) {}
  async startScan() {
    const barcodeImage = await this.barcodeservice.scanBarcode();
    console.log('Barcode image path:', barcodeImage);
    // Process the barcode image path as needed
  }
}
