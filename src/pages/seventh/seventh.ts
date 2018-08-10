import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import firebase from 'firebase';

/**
 * Generated class for the SeventhPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-seventh',
   templateUrl: 'seventh.html',
 })
 export class SeventhPage {

   provider = {
     name: '',
     profilePicture: '',
     email: '',
     domain: '',
     loggedin: false
   }

   constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth,
     private alertCtrl: AlertController, public ref: ChangeDetectorRef) {
   }

   alert(message: string, moniker = "Info!"){
     this.alertCtrl.create({
       title: moniker,
       subTitle: message,
       buttons: ['OK']
     }).present();
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad SeventhPage');
   }

   login(){
     this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
     .then( res => {
       console.log('From --Google--');
       console.log(res);
       this.provider.name = res.user.displayName;
       this.provider.email = res.user.email;
       this.provider.profilePicture = res.user.photoURL;
       this.provider.domain = res.additionalUserInfo.profile.hd;
       if(this.provider.domain != 'jeffcoschools.us'){
         this.alert(this.provider.email+' isn\'t registered with jeffcoschools! Please log in with a jeffcoschools email.', 'Error!');
         this.logout();
       }else{
         this.provider.loggedin = true;
         this.alert('Success! You\'re logged in');
         this.ref.detectChanges();  
       }
     })
     .catch( error => {
       console.log('got and error',error);
       this.alert(error.message);
       return false;
     })
   }


   logout(){
     this.fire.auth.signOut()
     .then()
     this.provider.loggedin = false;
     this.ref.detectChanges();
   }
 }


