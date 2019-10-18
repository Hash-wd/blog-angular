import { Component } from '@angular/core';
import { postModel } from './models/post-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {

	public arrayPost: Array<postModel>;

	constructor() {

		this.arrayPost = [

			{
				title: 'Post1',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dignissimos dicta modi dolore, perspiciatis error unde. Enim, eos cum quisquam quis fuga distinctio aperiam nesciunt debitis similique nam voluptates quibusdam.',
				created_at: new Date(),
				loveIts: 0
			},
			{
				title: 'Post2',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nihil, doloremque fuga minima reiciendis ab impedit, praesentium id incidunt provident a. Porro illo a at nisi! Obcaecati eum, perferendis iste!',
				created_at: new Date(),
				loveIts: 0
			},
  			{
				title: 'Post3',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt temporibus quas cupiditate consequatur deleniti hic, in fugiat eligendi corporis pariatur nostrum doloribus soluta odio! Blanditiis minima, vel! Doloribus, tempore, ab!',
				created_at: new Date(),
				loveIts: 0
			}
		]
	}
  
}

