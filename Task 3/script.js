/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const fetchGithub = async () => {
    try {
        const response = await fetch(ENDPOINT);
        if (response.ok) {
            document.getElementById('message').style.display = 'none';
            const users = await response.json();
            displayUsers(users);
        }
    } catch (error) {
        console.error(error);
    }
};


const displayUsers = (users) => {
    const output = document.getElementById('output');
    users.forEach(user => {
        const name = document.createElement('h4');
        name.innerText = user.login;

        const avatar = document.createElement('p');
        avatar.innerText = user.avatar_url

        const card = document.createElement('div');
        card.append(name, avatar);
        output.append(card);
    })
}

document.getElementById('btn').addEventListener('click', fetchGithub);
