
//  AQUIVO DE ENTRADA DO REACT

const root = document.querySelector('#root');

const element = React.createElement('h1', {id: 'Título Principal'}, 'Olá Mundo');

ReactDOM.render(element, root);