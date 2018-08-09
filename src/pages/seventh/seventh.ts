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
   @ViewChild('username') user;
   @ViewChild('password') password;

   provider = {
     name: '',
     profilePicture: '',
     email: '',
     loggedin: false
   }

   constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth,
     private alertCtrl: AlertController, public ref: ChangeDetectorRef) {
   }

   alert(message: string){
     this.alertCtrl.create({
       title: 'Info!',
       subTitle: message,
       buttons: ['OK']
     }).present();
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad SeventhPage');
   }

   loginWithGoogle(){
     this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
     .then( res => {
       console.log('From --Google--');
       console.log(res);
       this.provider.loggedin = true;
       this.provider.name = res.user.displayName;
       this.provider.email = res.user.email;
       this.provider.profilePicture = res.user.photoURL;
       this.alert('Success! You\'re logged in');
       this.ref.detectChanges();
     })
   }



   logout(){
     this.fire.auth.signOut();
     this.provider.loggedin = false;
     this.ref.detectChanges();
   }

 }
