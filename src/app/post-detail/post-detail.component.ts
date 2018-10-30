import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material'

import { AngularFirestore, DocumentReference } from 'angularfire2/firestore'

import { from, Observable } from 'rxjs'
import { flatMap, tap } from 'rxjs/operators'


import { Post } from 'src/app/model/post'

@Component({
    selector: 'post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
    private id: string

    public detailForm: FormGroup

    constructor(private route: ActivatedRoute, private router: Router, private db: AngularFirestore, private fb: FormBuilder, private snack: MatSnackBar) {
        
    }

    ngOnInit(): void {
        this.createForm()

        this.route.paramMap.pipe(
            tap((param) => this.id = param.get('id')),
            flatMap((param) => this.db.doc<Post>(`/posts/${param.get('id')}`).valueChanges())
        )
        .subscribe((post) => this.createForm(post))
    }

    onSubmit(form: FormGroup): void {
        if (form.valid) {
            const post = {} as Post
            post.name = form.get('name').value
			post.lastname = form.get('lastname').value
			post.brthday = form.get('brthday').value
            post.desc = form.get('desc').value

            var save: Observable<DocumentReference | void>
            save = this.id === 'new' ? from(this.db.collection<Post>('/posts').add(post)) : from(this.db.doc<Post>(`/posts/${this.id}`).set(post))
            save.subscribe(() => {
                this.snack.open('Data has been saved')
				this.snack.open('Data has been saved', 'Back', {duration: 3000});
                this.router.navigate([''])
            })
        }
    }

    onDelete(): void {
		this.db.doc(`/posts/${this.id}`).delete()
//		this.snack.open('Data has been removed', {duration: 3000});

		this.snack.open('Data has been removed', 'Back', {duration: 3000});
        this.router.navigate([''])
    }


    onCancel(): void {
        this.router.navigate([''])
    }


    private createForm(post?: Post): void {
        this.detailForm = this.fb.group({
            'name': [post ? post.name : '', Validators.required],
			'lastname': [post ? post.lastname : '', Validators.required],
			'brthday': [post ? post.brthday : '', Validators.required],
            'desc': [post ? post.desc : '']
        })
    }
}

