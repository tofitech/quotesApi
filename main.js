

  //fetch some post . get into json placeholder site 
  const postSection = document.querySelector('#posts');
  const postTemplate = document.querySelector('#post-template');

  getData()
  .catch(err => console.log(err))

    //async function
  async function getData() {
  	const postStream = await fetch('https://type.fit/api/quotes');
  	const posts = await postStream.json();
  	let i = 0;

  	console.log(posts); 
  	posts.forEach(post => {
  		i++;
  		if(i < 55) {
  			const author = post.author;
  			const text = post.text;

  			fetch('https://unsplash.it/300/200')
  			.then(res => res.blob())
  			.then(blob => {

  				const newPost = document.importNode(postTemplate.content, true);
  			const postTitle = newPost.querySelector('.post__title');
  			const postBody = newPost.querySelector('.post__body');
  			const postImg = newPost.querySelector('.post__img');
  			postImg.src = URL.createObjectURL(blob); 
  			postTitle.innerText = author;
  			postBody.innerText = text;
  			postSection.appendChild(newPost)
  			})
  			.catch(err => console.log(err));
  			
  			
  		}
  	});

  };




