import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-sub-com',
  templateUrl: './sub-com.component.html',
  styleUrls: ['./sub-com.component.scss']
})
export class SubComComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });
}
