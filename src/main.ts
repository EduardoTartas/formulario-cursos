import { parse } from 'zod/v4-mini';
import './assets/styles/index.css'
import { FormSchema } from './utils/zod/FormSchema';

const darkModeButton = document.querySelector('#dark-mode') as HTMLImageElement;
const body = document.querySelector('body')!;
const headerContainer = document.querySelector('.header-container')!;
const formGroups = document.querySelectorAll('.form-group')!;
const inputs = document.querySelectorAll('input[type="text"], input[type="email"], select')!;

const sun = './src/assets/images/sun-moon 1.svg';
const moon = './src/assets/images/moon-star 1.svg';

const name = document.querySelector('#name') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const sexMale = document.querySelector('#sex-male') as HTMLInputElement;
const sexFemale = document.querySelector('#sex-female') as HTMLInputElement;
const course = document.querySelector('#course') as HTMLSelectElement;
const observation = document.querySelector('#text-area') as HTMLTextAreaElement;
const terms = document.querySelector('#terms') as HTMLInputElement;
const submitButton = document.querySelector('#submit') as HTMLButtonElement;

let sex = '';

//dark mode
darkModeButton.addEventListener('click', () => {

    if (body.classList.contains('dark-mode')) {
        darkModeButton.src = moon;
    } else {
        darkModeButton.src = sun;
    }

    body.classList.toggle('dark-mode');
    headerContainer.classList.toggle('dark-mode');

    formGroups.forEach(formGroup => {
        formGroup.classList.toggle('dark-mode');
    });
    
    inputs.forEach(input => {
        input.classList.toggle('dark-mode');
    });
});

function limparCampos() {
    name.value = '';
    email.value = '';
    sexMale.checked = false;
    sexFemale.checked = false;
    sex = '';
    course.selectedIndex = 0;
    observation.value = '';
    terms.checked = false;
}

submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    
    if (!terms.checked) {
        alert('Porfavor, aceite os termos de serviço.');
        return;
    }

    if (sexMale.checked){
        sex = "male"
    }
    else if (sexFemale.checked){
        sex = "female"
    }

    const user = {
        name: name.value,
        email: email.value,
        sex: sex,
        course: course.value,
        observation: observation.value
    }

    const parsedData = FormSchema.safeParse(user);
    if (!parsedData.success) {
        const errors = parsedData.error.issues.map(err => err.message).join('\n');
        alert(`Erro ao enviar o formulário:\n${errors}`);
        return;
    }

    try {
        await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(parsedData.data)});

        console.log('Formulário enviado com sucesso:', parsedData);
        alert('Formulário enviado com sucesso!');
        limparCampos();
    } 
    catch (error) {
        console.error('POST error:', error);
        alert('Erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
    }
});


