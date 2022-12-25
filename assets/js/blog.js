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
    let checkbox = document.getElementsByName("technologies")

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
        checkbox
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
                        >${blogs[i].title} - ${getFuLLTime(blogs[i].postedAt)}</a
                      ></h2>
                </div>
                <div class="durasi">
                    <p>durasi ${getDistance(blogs[i].postedAt)}</p>
                </div>
                <div class="deskripsi">
                    <p>${blogs[i].description}</p>
                </div>
                <div class="technologies">
                    <p>${check(blogs[i].checkbox)}</p>
                </div>
                <div class="btn-group">
                    <button class="btn">edit</button>
                    <button class="btn">delete</button>
                </div>
            </div>
        `
    }
}

function getFuLLTime(time) {
    let years = time.getFullYear()
    // let monthIndex = time.getMonth()
    // let date = time.getDate()
    // let hour = time.getHours()
    // let minute = time.getMinutes()

    // const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    // return ` ${date} ${month[monthIndex]} ${years} ${hour} ${minute}`
    return ` ${years} `
}

function getDistance(time) {
    let timePost = time
    let timeNow = new Date()

    let distance = timeNow - timePost

    let ms = 1000

    let day = Math.floor(distance / (ms * 60 * 60 * 24))
    let hour = Math.floor(distance / (ms * 60 * 60))
    let min = Math.floor(distance / (ms * 60))
    let sec = Math.floor(distance / ms)

    if(day > 0) {
        return `${day} Days Ago`
      } else if(hour > 0) {
        return `${hour} Hours Ago`
      }else if(min > 0) {
        return `${min} minutes Ago`
      } else if(sec > 0) {
        return `${sec} seconds Ago`
      }

      setInterval(() => {
        showData()
      }, 1000)
}

function check(markedCheckbox) {
    // let markedCheckbox = document.getElementsByName('technologies')
  for (let checkbox of markedCheckbox) {
    if (checkbox.checked)
        
      document.body.append(checkbox.value + ' ')
  }

//     let c1 = document.getElementsById("nodeJs")
//     let c2 = document.getElementsById("nextJs")
//     let c3 = document.getElementsById("reactJs")
//     let c4 = document.getElementsById("ts")

    
//   if (c1.checked == true){
//     return document.getElementById("result").innerHTML = "Node Js"
//   } 
//   else if (c2.checked == true){
//     return document.getElementById("result").innerHTML = "Node Js"
//   }
//   else if (c3.checked == true){
//     return document.getElementById("result").innerHTML = "Node Js"
//   }
//   else if (c4.checked == true){
//     return document.getElementById("result").innerHTML = "Node Js"
//   } else {
//   return document.getElementById("result").innerHTML = "You have not selected anything"
//   }
  
}

// ${(function icon() {
//     let string = ""
//     for (let j = 0; j < dataProject[i].techChecked.length; j++) {
//       string += `<li><img src="assets/img/icon/logo-${dataProject[i].techChecked[j]}.svg" alt="Item Icon"></li>`
//     }
//     return string
//   })()}