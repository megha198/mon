import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lintingdemo';

sayHello() {
  let message='Hello';
  message=message + 'Pragim';
  console.log(message);
}

}

