import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item/item.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user';
import { NgForm } from '@angular/forms';
import { UserItem } from 'src/app/models/userItem/userItem';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  dbItem: Array<UserItem> = new Array<UserItem>();
  userItem: UserItem = new UserItem();
  userId: number;
  loggedUser: User;
  pictureList: Array<string> = new Array<string>();
  itemForm: NgForm;
  userItemIdSelected: UserItem;
  selectedTitle: string;


  constructor(private http: HttpClient,
              private itemService: ItemService, private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.loggedUser = this.userService.getLoggedUser();
    console.log('ngoninit findUserItem ' + this.userService.getLoggedUser().id);
    this.itemService.findUserItemByUser(this.userService.getLoggedUser().id,
      this.callbackOnSuccess.bind(this), this.callbackOnFailure.bind(this));
  }

  insertUserItem(itemForm): void {

    console.log('nel insertUserItem > ' + this.userItem.title + ' ' + this.userItem.description);
    this.userItem.userId = this.userService.getLoggedUser().id;
    this.itemService.insertUserItem(this.userItem, this.callbackItemOnSuccess.bind(this), this.callbackOnUserItemFailure.bind(this));
    this.itemService.findUserItemByUser(this.userService.getLoggedUser().id,
      this.callbackOnSuccess.bind(this), this.callbackOnFailure.bind(this));
    this.itemForm.reset();
  }

  insertAuctionFromItem(userItem) {
    // qui va ripreso il title/id dell'item selezionato e stamparlo nella form dell'auction
    this.router.navigate(['/auction']);
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

  // seleziona il prodotto, i dati vengono inseriti nel form di inserimento che diventa di modifica
  getUserItem(userItem: UserItem) {
    this.userItem = userItem;
  }



  // readUrl(event: any) {
  //   const reader = new FileReader();
  //   if (event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.imageSrc = reader.result as string;
  //     }
  //   }
  // }

  // onFileSelect(event: any) {
  //   if (event.targert.pictureList.length > 0) {
  //     for (let i = 0; i < event.target.pictureList.length; i++){
  //       const file = event.target.files[i]
  //       this.files.push(file)
  //       this.productForm.get('pictureList').setValue(this.files[i])
  //       console.log(this.files)
  //     }
  //   }

  //   }


  //   onFileSelect(event: any) {
  //     const formData = new FormData();


  //     for (let i = 0; i < this.pictureList.length; i++) {
  //       console.log('nel for della selezione file');
  //       formData.get(this.userItem.picture1);
  //       console.log('formData: ' + formData);
  //       console.log('picture: ' + this.userItem.picture1)
  //       console.log('pictureList > ' + this.pictureList);
  //       formData.set(this.userItem.picture1, this.pictureList[i]);
  //       console.log(this.pictureList);
  //       // formData.set(this.userItem.picture1, this.pictureList[0]);
  //       // console.log('1: ' + this.userItem.picture1);
  //       formData.set(this.userItem.picture2, this.pictureList[i]);
  //       console.log('2: ' + this.userItem.picture2);
  //       formData.set(this.userItem.picture3, this.pictureList[i]);
  //       console.log('3: ' + this.userItem.picture3);
  //       formData.set(this.userItem.picture4, this.pictureList[i]);
  //       console.log('4: ' + this.userItem.picture4);
  //       formData.set(this.userItem.picture5, this.pictureList[i]);
  //       console.log('5: ' + this.userItem.picture5);
  //     }
  //     console.log('lista: ' + this.pictureList);
  //   }
  // }


}
