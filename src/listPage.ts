import './assets/styles/index.css'

const sun = './src/assets/images/sun-moon 1.svg';
const moon = './src/assets/images/moon-star 1.svg';

const body = document.querySelector('body')!;
const headerContainer = document.querySelector('.header-container')!;

const darkModeButton = document.querySelector('#dark-mode') as HTMLImageElement;
const tableBody = document.querySelector('#table-body')!; 

//dark mode
darkModeButton.addEventListener('click', () => {

    if (body.classList.contains('dark-mode')) {
        darkModeButton.src = moon;
    } else {
        darkModeButton.src = sun;
    }

    body.classList.toggle('dark-mode');
    headerContainer.classList.toggle('dark-mode');
 
});

window.addEventListener('load', async() => {
    try{
        const result = await fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        });
        const data = await result.json();
        console.log(data);
        try{
            data.forEach((user: any) => {
                tableBody.insertAdjacentHTML('beforeend', `
                    <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.sex}</td>
                    <td>${user.course}</td>
                    <td>${user.observation}</td>
                </tr>`)
            });
        }
        catch (error) {
            console.error('Erro ao processar os dados do GET:', error);
            alert('Erro ao processar os dados recebidos. Por favor, tente novamente mais tarde.');
        }
    }
    catch (error) {
        console.error('GET error:', error);
        alert('Erro ao fazer GET. Por favor, tente novamente mais tarde.');
    }
    

    
    
});
