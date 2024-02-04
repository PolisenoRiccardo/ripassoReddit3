import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  autoStamp(colore: HTMLInputElement, porte: HTMLInputElement, cambio:  HTMLInputElement): boolean {
    console.log(`Colore ${colore.value},${porte.value} porte, cambio ${cambio.value}`);
    return false
  }
}
