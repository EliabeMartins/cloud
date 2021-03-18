import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCreateServer(): void {
    this.router.navigate(['new/server'])
  }

}
