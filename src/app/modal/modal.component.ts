import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MemService } from '../services/mem.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],
  providers: [MemService]
})
export class NgbdModalBasic {
  closeResult: string;
  globalMem: any;
  content: any;

  constructor(
    private modalService: NgbModal,
    private memService: MemService
  ) {
    this.globalMem = this.memService.global();
    this.globalMem.openModal = ()=>{
      this.open();
    }
  }

  open() {
    this.modalService.open(this.content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    },()=>{});
  }

  registerContent(content: any){
    this.content = content;
  }
}