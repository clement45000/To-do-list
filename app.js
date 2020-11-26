const form = document.querySelector('form');
const liste = document.querySelector('ul');
const input = document.querySelector('form input');
let toutesLesTaches = [];


form.addEventListener('submit', event => {
    event.preventDefault();
  
    const text = input.value.trim();
    if(text !== ''){
      rajouterUneTache(text);
      input.value = '';
    }
  })
  

function rajouterUneTache(text){
    //objet todo
    const todo = {
     text,
    // La methode Date.now() renvoi le nb de milliseconde ecoulé depuis le 1er janvier 1970
    id : Date.now()  //pour supprimer la tache
    }
    afficherListe(todo);
}
    
    function afficherListe(todo){//permet de rajouter une tache
        const item = document.createElement('li');
        item.setAttribute('data-key', todo.id); // <li data-key="25222222222(id d'une tache de la liste)"

        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.addEventListener('click', tacheFaite);
        item.appendChild(input);

        const txt = document.createElement('span');
        txt.innerText = todo.text;
        item.appendChild(txt);

        const btn = document.createElement('button');
        btn.addEventListener('click',supprimerTache);
        const img = document.createElement('img');
        img.setAttribute('src', 'ressources/fermer.svg');
        btn.appendChild(img);
        item.appendChild(btn);

        liste.appendChild(item);
        toutesLesTaches.push(item)
    } 
   


function tacheFaite(e){
    e.target.parentNode.classList.toggle('fin de taches');
}

function supprimerTache(e){
    toutesLesTaches.forEach(el =>{
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
            el.remove(); // on supprimer l'element du dom
            //On garde seulement  les li qui on un id strictement different du li que l'on vient de retirer
            toutesLestaches = toutesLesTaches.filter(li => li.dataset.key !== el.dataset.key);
        }
    })
}