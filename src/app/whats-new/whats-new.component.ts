import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss']
})
export class WhatsNewComponent implements OnInit {

  textArray:any[] =["Direction about Roznama and next date of hearing","New Guidelines regarding hearing of complaintsâ€¦","New Guidelines regarding hearing of complaintsâ€¦"];

  constructor() { }

  ngOnInit(): void {
  }

}
