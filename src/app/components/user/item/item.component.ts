import { Component, OnInit } from '@angular/core';
import { UserItem } from 'src/app/models/userItem/userItem';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item/item.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  dbItem: Array<UserItem> = new Array<UserItem>();
  userItem: UserItem = new UserItem();
  imageSrc: string;
  userId: number;
  loggedUser: User;

  constructor(private http: HttpClient, private itemService: ItemService, private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.loggedUser = this.userService.getLoggedUser();
    console.log('ngoninit findUserItem ' + this.userService.getLoggedUser().id);
    this.itemService.findUserItemByUser(this.userService.getLoggedUser().id,
      this.callbackOnSuccess.bind(this), this.callbackOnFailure.bind(this));
  }

  insertUserItem(): void {

    console.log('nel insertUserItem >' + '[ ' + this.userItem.title + ' ' + this.userItem.description + ' ]');
    this.userItem.userId = this.userService.getLoggedUser().id;
    this.itemService.insertUserItem(this.userItem, this.callbackItemOnSuccess.bind(this), this.callbackOnUserItemFailure.bind(this));
  }

  callbackItemOnSuccess(data: any): void {

    if (data !== null) {
      this.userItem = data;
      console.log('nel callbackItemOnSuccess , item > ' + JSON.stringify(this.userItem));
    }
  }

  callbackOnUserItemFailure(data: any): void {
    console.log('nel cal back insertUserItem failure > ' + JSON.stringify(data));
  }

  callbackOnFailure(data: any): any {
    console.log(data);
  }

  callbackOnSuccess(data: any): void {

    console.log('nel callbackOnSuccess del findAllItemss > ' + JSON.stringify(data));
    this.itemService.setDb(data);
    this.dbItem = this.itemService.getDb();
    console.log('nel callbackOnSuccess del findAllItems dopo il getDB> ' + JSON.stringify(this.dbItem));
  }

  // insertItem(itemForm: NgForm): void {
  //   console.log(itemForm);
  // }
  // reset(itemForm: NgForm){
  //   // this.active = null;
  //   this.imageSrc = null;
  //   itemForm.reset();
  // }

  readUrl(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      }
    }
  }

  //   onFileSelect(event) {
  //     for (let i = 0; i < (event.target.files.length); i++) {
  //       this.file = event.target.files[i];
  //       this.myFiles.push(event.target.files[i]);
  //       this.itemForm.get('picture1').setValue(this.myFiles);
  //     }
  //     console.log(this.myFiles);
  //   }

  //   onSubmit() {
  //     const formData = new FormData();

  //     for (let i = 0; i < this.myFiles.length; i++) {
  //       formData.append('picture1[]', this.myFiles[i]);
  //     }
  //     formData.append('title', this.itemForm.get('title').value);
  //     formData.append('description', this.itemForm.get('description').value);
  //     this.options = { content: formData };
  //     formData.append('notes', this.itemForm.get('notes').value);
  //     this.options = { content: formData };
  //     formData.forEach((value, key) => {
  //       console.log(key + ' ' + value)
  //     })
  //   }

  // }
  // onFileSelect(event){
  //   const file = event.target.files[0];
  //   console.log(file);
  // }

}
