import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public alertController: AlertController) {}
  cardsData = [
    {
    title: 'Esta es la 2',
    subtitle: 'La cerveza está bien',
    contentText: 'Pues ya pasen la siguiente ¿no?'
  },
  {
    title: 'Esta es la 3',
    subtitle: 'La cerveza está mal',
    contentText: 'Pues ya pasen la siguiente x2 ¿no?'
  }
];
  
  onBeerClicked(){
    console.log('Una más por favor');
  }
  async alertaa() {
    const alert = await this.alertController.create({
      header: 'Alertaa',
      subHeader: '¿Mas cerveza?',
      message: 'Sólo una más ¿No?',
      buttons: ['OK']
    });

    await alert.present();
  }
}
