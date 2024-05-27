const usersDiv = document.createElement('div')
usersDiv.setAttribute('id', 'usersDiv')
document.body.appendChild(usersDiv)


fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            return response.json()
        }).then((data) => {
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                const name = document.createElement('p');
                name.setAttribute('id', 'user_name')
                name.textContent = element.name;
                usersDiv.appendChild(name);

                const email = document.createElement('p')
                email.setAttribute('id', 'user_email')
                email.textContent = element.email;
                usersDiv.appendChild(email)

                const address = document.createElement('p')
                address.setAttribute('id', 'user_address')
                address.textContent = element.address.street;
                usersDiv.appendChild(address)

                const user = document.createElement('div')
                user.setAttribute('id', 'user')
                user.appendChild(name)
                user.appendChild(email)
                user.appendChild(address)
                usersDiv.appendChild(user)
            }
        }).catch((error) => {
            console.log(error)
        })

