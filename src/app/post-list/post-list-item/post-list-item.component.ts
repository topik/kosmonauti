import { Component, Input } from '@angular/core'

import { Post } from 'src/app/model/post'
import { Router } from '@angular/router'

@Component({
    selector: 'post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {
    @Input('post') public post: Post

    constructor(private router: Router) {
        
    }

    navigate(post: Post): void {
        this.router.navigate(['/post', post.id])
    }
}