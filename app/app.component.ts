import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  show: boolean = false;
  public deploymentName: any;
  showModal() {
    this.show = !this.show;
  }
  fnAddDeploytment() {
    console.log(this.deploymentName);
    this.show = !this.show;
  }
}
