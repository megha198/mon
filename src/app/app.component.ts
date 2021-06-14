import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.square(6));
    
  }
  title = 'lintingdemo';
square(x:any){
  return x*x;
  }


}

