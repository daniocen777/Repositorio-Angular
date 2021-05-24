import { Component, OnInit } from '@angular/core';
/* Firestore */
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'completo';

  constructor(private _afs: AngularFirestore) {}

  ngOnInit(): void {
    this._afs
      .collection('test')
      .snapshotChanges()
      .subscribe((items) => {
        console.log(items.map(x => x.payload.doc.data()));
      });
  }
}
