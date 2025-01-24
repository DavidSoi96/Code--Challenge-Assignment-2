// write your code here
// Get DOM elements
const BASE_URL = "http://localhost:3000";


fetch(`${BASE_URL}/images/1`)
        .then(response => response.json())
        .then(data => {

            imageContainer.src = data.image;
            imageContainer.alt = data.title;
            title.textContent = data.title;
            likesCount.textContent = `${data.likes} likes`;
            
            commentsList.innerHTML = '';
            
            data.comments.forEach(comment => {
                const li = document.createElement('li');
                li.textContent = comment.content;
                commentsList.appendChild(li);
            });
        });

        const imageContainer = document.querySelector('#card-image');
        const title = document.querySelector('#card-title');
        const likesCount = document.querySelector('#like-count');
        const commentsList = document.querySelector('#comments-list');
        const commentForm = document.querySelector('#comment-form');
        const likeButton = document.querySelector('#like-button');

    let likes = 0;
    likeButton.addEventListener('click', () => {
        likes++;
        likesCount.textContent = `${likes} likes`;
    });
    
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentInput = document.querySelector('#comment');
        const newComment = commentInput.value;
        
        if (newComment.trim()) {
            const li = document.createElement('li');
            li.textContent = newComment;
            commentsList.appendChild(li);
            commentForm.reset();
        }
    });

