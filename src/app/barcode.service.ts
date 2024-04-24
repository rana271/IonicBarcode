import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';



@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  constructor() { }
  async scanBarcode() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      //Camerasource: 'camera',
      promptLabelHeader: 'Scan Barcode'
    });

    var imageUrl = image.webPath;
    return imageUrl;
  }
}
