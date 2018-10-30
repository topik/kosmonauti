import { Component, OnInit } from '@angular/core'

import { AngularFirestore } from 'angularfire2/firestore'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Post } from 'src/app/model/post'

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    public posts: Observable<Post[]>

    constructor(private db: AngularFirestore) {
        
    }

    ngOnInit(): void {
        this.posts = this.db.collection<Post>('/posts').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Post
                const id = a.payload.doc.id
                return { ...data, id }
            }))
        )
    }
}