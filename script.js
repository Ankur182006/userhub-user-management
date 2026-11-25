const Form = document.querySelector("#userForm")
const name = document.querySelector("#name")
const role = document.querySelector("#role")
const desc = document.querySelector("#desc")
const img = document.querySelector("#img")
const userContainer = document.querySelector("#userContainer");
// const UserManager = {
//     UserName: [],
//     init: function () {
//         Form.addEventListener("submit", this.submitForm.bind(this))
//     },
//     submitForm: function (e) {
//         e.preventDefault()


//         console.log(this.UserName);
//         this.addUser();
//         Form.reset();
//     },
//     addUser: function () {

//         this.UserName.push({
//             name: name.value.trim(),
//             role: role.value.trim(),
//             desc: desc.value.trim(),
//             img: img.value.trim()

//         });

//         this.show(this.UserName)
//     },
//     show: function (UserManager) {
//         userContainer.innerHTML = "";
//         UserManager.forEach(user => {
//             const card = document.createElement("div");

//             card.classList.add("user-card");

//             card.innerHTML = `
//             <img src="${user.img}" alt="${user.name}">
//             <h2>${user.name}</h2>
//             <h4>${user.role}</h4>
//             <p>${user.desc}</p>
//         `;

//             userContainer.appendChild(card);
//         });
//     }
// }

// UserManager.init()
// console.log(UserManager.UserName)


const UserManager = {
    user: [],
    init: function () {
        Form.addEventListener("submit", this.submit.bind(this))
        let savedUsers = localStorage.getItem("cards", JSON.stringify)
        if (savedUsers) {
            this.user = JSON.parse(savedUsers);
        }

        this.DisplayUser(this.user);
    },
    submit: function (e) {
        e.preventDefault();
        this.addUser()
        this.DisplayUser(this.user)
        localStorage.setItem("cards", JSON.stringify(this.user));

    },
    addUser: function () {
        this.user.push({
            userName: name.value,
            role: role.value,
            desc: desc.value,
            img: img.value
        })
    },
    DisplayUser: function (users) {

        userContainer.innerHTML = "";
        users.forEach(user => {
            const card = document.createElement("div");

            card.classList.add("user-card");

            card.innerHTML = `
            <img src="${user.img}" alt="${user.name}">
            <h2>${user.userName}</h2>
            <h4>${user.role}</h4>
            <p>${user.desc}</p>
            <button>Del User</button>
        `;
            userContainer.appendChild(card)

            const deleteBtn = card.querySelector("button");

            deleteBtn.addEventListener("click", function () {
                this.deleteUser(user)
            }.bind(this));

        });
    },
    deleteUser: function (user) {
        this.user = this.user.filter(item => item !== user);
        localStorage.setItem("cards", JSON.stringify(this.user));
        this.DisplayUser(this.user);
    }
}


UserManager.init()