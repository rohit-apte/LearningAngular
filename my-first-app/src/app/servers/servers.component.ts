import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector:'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css'],
  styles:[`
        .online{
            color: white;
        }
        .fifthItem{
          color: white
        }
    
    `]
})
export class ServersComponent implements OnInit {
  
  allowNewServer:boolean=false;
  serverCreationStatus:string = 'No server was created';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  displayDetails:boolean = false;
  displayButtonClicks=[];
  fifthItemFlag = false;
  displayColor:string='';

  userName='';

  constructor(){
     setTimeout(() => {
          this.allowNewServer = true;
      },2000)

  }


  toggleDisplayDetails(){
    this.displayButtonClicks.push(new Date());
    this.displayDetails = !(this.displayDetails)
    if(this.displayButtonClicks.length>=5){
      this.fifthItemFlag = true;
    }
}
  

  ngOnInit(){

  }

  onServerCreation(){
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server was created and name is ' + this.serverName;
  }

  onUpdateServerName(event : Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  getDisplayColor(){
    if(this.displayButtonClicks.length>=5){
       this.displayColor = 'blue';
    }
    return this.displayColor;
  }
  
}
