const form = document.querySelector("form");
const ul = document.querySelector("ul");

//Para apenas um submit na page:
form.onsubmit = function(event){
    event.preventDefault();

    const input = form.querySelector('input')
    const value = input.value

    if(value == "") return

    const li = ul.querySelector('li').cloneNode(true);
    li.querySelector('span').textContent = value
    ul.appendChild(li)

    input.value = ""

    /*
    Outra forma:
    ul.innerHTML += `<li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between"><span>${value}</span><button class="text-red-700 delete">ⅹ</button></li>`;

    input.value = ""*/

    /*
    Outra forma:
    const li = document.createElement('li')

    ul.appendChild(li)
    li.setAttribute("class","px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between")

    li.textContent = value

    const button = document.createElement('button')
    button.setAttribute("class", "text-red-700 delete")
    button.textContent = 'ⅹ'

    li.appendChild(button)
    ul.appendChild(li)*/

}

ul.onclick = function(event) {
    if(event.target.classList.contains('delete')) {
        if(confirm("Deseja deletar esse item?")) {
            event.target.parentElement.remove()
        }
    }
}


//Se existir mais de um submit na page, fazer assim:
//form.addEventListener("submit", function(event){});
