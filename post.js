console.log("connected");
function loadData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));

}
loadData();

function displayPost(posts){
    const postContainer = document.getElementById("post_container");

    for (const post of posts) {

        const {id, title, body} = post;

        const postDiV = document.createElement("div");
        postDiV.classList.add("post");
        postDiV.innerHTML = `
           <h4 class='post-id'>post ID:${id}<h4>
           <h5>Post Title:${title}<h5>
           <h5>Post Description:${body}<h5>
           <button onclick="console.log(${id})">See Comments</button>
           `;

           postContainer.appendChild(postDiV);
    }
}






// function displayPost(posts){
//     const postContainer = document.getElementById("post_container");
//     for (const post of posts) {
       
//         const { id, title, body } = post;

//         let postDiV = document.createElement("div");
//         postDiV.classList.add("post");
//         postDiV.innerHTML=`
//         <h4 class='post-id'>post ID: ${id}</h4>
//         `;
//         postContainer.appendChild(postDiV);





