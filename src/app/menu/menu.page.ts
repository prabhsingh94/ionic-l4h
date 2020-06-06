import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pages =[
    {
      title:'Home',
      url:'/menu/main',
      icon:'home'
    },
    {
      title:'Home',
      url:'/menu/main',
      icon:'home'
    },
    {
      title:'Events',
      children:[
        {
          title:'Login-Ravi',
          url:'/menu/login',
          icon:'logo-ionic'
        },
        {
          title:'Events',
          url:'/menu/events',
          icon:'logo-google'
        }
      ]
    }
  ]
}
