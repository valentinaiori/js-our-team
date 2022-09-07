/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

/*
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/


// Creare l'array di oggetti con le informazioni fornite 

const arrayOfObject = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },

]; 

// Stampare su console le informazioni di nome, ruolo e la stringa della foto


for (let i = 0; i < arrayOfObject.length; i++){
    const classe = arrayOfObject[i];
    console.log(`${classe.nome} ${classe.ruolo} ${classe.foto}`)
}

// Stampare le stesse informazioni su DOM sottoforma di stringhe

const container = document.getElementById('container');

const teamContainer = document.createElement('div')
container.appendChild(teamContainer)

let content = '';

for (let i = 0; i < arrayOfObject.length; i++){
    const classe = arrayOfObject[i];
    content += `<div class="card">
                    <div>
                    <img src="img/${classe.foto}" alt="${classe.foto}" /> 
                    </div>
                    <div class="text">${classe.nome} </div>
                    <div class="text">${classe.ruolo} </div>
                </div>`
}

teamContainer.innerHTML = `${content}`
