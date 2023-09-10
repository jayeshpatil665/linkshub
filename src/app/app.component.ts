import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'linkshub';

  homePageTitle : string='Links-Hub : your ultimate links dock !';
  projectVersion : string='v 0.0.1';

  constructor(){
    console.log('Starting...');
  }

  ngOnInit(): void {
    console.log('Project init success ! - ',this.projectVersion);
  }

}
