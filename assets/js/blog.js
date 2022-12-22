// let myFriends = [
//     {
//         name: "Yusuf",
//         age: 23,
//         ismarried: false
//     },
//     {
//         name: "Budi",
//         age: 20,
//         ismarried: true
//     }
// ]

// console.table(myFriends[0])

let blogs = []

function getData(event) {
    event.preventDefault()

    let title = document.getElementById("name").value
    let description = document.getElementById("description").value
    let image = document.getElementById("images").files
    // let checkbox = document.getElementsByName("technologies")

    image = URL.createObjectURL(image[0])

    // let tech = "";

    // for(var j = 0; j < checkbox.length; j++){
    //     if(checkbox[j].checked){
    //         tech = tech + checkbox[j].value +", ";
    //     }
    // }

    // document.getElementById("technologies").innerText = tech.replace(/,\s*$/, "")

    let addBlog = {
        title,
        description,
        image,
        postedAt: new Date(),
        // tech

    }

    blogs.push(addBlog)

    console.log(blogs)
    showData()
}

function showData() {
    document.getElementById("card-box").innerHTML = ""

    for(let i= 0; i <= blogs.length; i++){
        document.getElementById("card-box").innerHTML += `
        <div class="card" id="card">
                <div class="blog-image">
                    <img src="${blogs[i].image}" alt="" />
                </div>
                <div class="title">
                    <h2><a href="blog-detail.html" target="_blank"
                        >${blogs[i].title}</a
                      ></h2>
                </div>
                <div class="durasi">
                    <p>durasi 3 bulan</p>
                </div>
                <div class="deskripsi">
                    <p>${blogs[i].description}</p>
                </div>
                <div class="technologies">
                    <p></p>
                </div>
                <div class="btn-group">
                    <button class="btn">edit</button>
                    <button class="btn">delete</button>
                </div>
            </div>
        `
    }
}