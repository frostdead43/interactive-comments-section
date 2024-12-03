const data = {
  "currentUser": {
      "image": {
          "png": "./images/avatars/image-juliusomo.png",
          "webp": "./images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
  },
  "comments": [
      {
          "id": 1,
          "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
          "createdAt": "1 month ago",
          "score": 12,
          "user": {
              "image": {
                  "png": "assets/img/amyrobson-avatar.svg",
                  "webp": "./images/avatars/image-amyrobson.webp"
              },
              "username": "amyrobson"
          },
          "replies": []
      },
      {
          "id": 2,
          "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
          "createdAt": "2 weeks ago",
          "score": 5,
          "user": {
              "image": {
                  "png": "assets/img/maxblagun-avatar.svg",
                  "webp": "./images/avatars/image-maxblagun.webp"
              },
              "username": "maxblagun"
          },
          "replies": [
              {
                  "id": 3,
                  "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                  "createdAt": "1 week ago",
                  "score": 4,
                  "replyingTo": "maxblagun",
                  "user": {
                      "image": {
                          "png": "./images/avatars/image-ramsesmiron.png",
                          "webp": "./images/avatars/image-ramsesmiron.webp"
                      },
                      "username": "ramsesmiron"
                  }
              },
              {
                  "id": 4,
                  "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                  "createdAt": "2 days ago",
                  "score": 2,
                  "replyingTo": "ramsesmiron",
                  "user": {
                      "image": {
                          "png": "./images/avatars/image-juliusomo.png",
                          "webp": "./images/avatars/image-juliusomo.webp"
                      },
                      "username": "juliusomo"
                  }
              }
          ]
      }
  ]
}

const container = document.querySelector(".container");
const sendBtn = document.querySelector(".send-btn");
sendBtn.addEventListener('click', addComment)


renderComments()
function renderComments() {
  const comments = data.comments
  container.innerHTML = ""
  container.innerHTML += comments.map((comment) => 
    `
    <div class="card">
      <div class="comment-header">
        <img src="${comment.user.image.png}" alt="" >
        <h5>${comment.user.username}</h5>
        <span>${comment.createdAt}</span>
      </div>
      <div class="comment-content">
        <p>${comment.content}</p>
      </div>
      <div class="comment-actions">
        <div class="btn-group">
          <button id="plusBtn">+</button>
          <button id="pointBtn">${comment.score}</button> 
          <button id="minusBtn">-</button>
        </div>
        <button class="reply-btn">Reply</button>
      </div>
    </div>
    `

  ).join("")
}

function addComment(e) {
  e.preventDefault();
  if(commentUser.value.trim() !== "") {
    container.innerHTML += `
     <div class="card" id="myCard">
        <div class="comment-header">
          <img src="assets/img/juliusomo-avatar.svg" alt="" >
          <h5>Makif Kyilmaz</h5>
          <h3>you</h3>
          <span>1 month ago</span>
        </div>
        <div class="comment-content">
          <p>${commentUser.value}</p>
        </div>
        <div class="comment-actions">
          <div class="btn-group">
            <button id="plusBtn">+</button>
            <button id="pointBtn">0</button> 
            <button id="minusBtn">-</button>
          </div>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    `  }
    commentUser.value = ""; 
    
    const deleteBtns = document.querySelectorAll('.delete-btn');
    for (const deleteBtn of deleteBtns) {  
      deleteBtn.addEventListener ("click", (e) => {
        const y = e.target.parentElement.parentElement;
        myDialog.showModal();
        yesBtn.addEventListener('click', function deleteBtn() {
          y.remove()
          myDialog.close()
        })
        
      })
      noBtn.addEventListener('click', () => {myDialog.close()});
    }
  }



