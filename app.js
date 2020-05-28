const URL = `https://acme-users-api-rev.herokuapp.com/api/`;

const e = (type) => React.createElement(type)

const app = document.querySelector(`#app`);

const apiFetch = (type) => {
    return fetch(`${URL}${type}`)
    .then(res => res.json())
}

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            Products: [],
            Companies: [],
        };
    }

    componentDidMount() {
        apiFetch(`products`).then(data => {
            console.log(this.state.Products);
            this.state.Products = data
            console.log('data', data)
        })

        apiFetch(`companies`).then(data => {
            console.log(this.state.Companies);
            this.state.Companies = data
            console.log('data', data)
        })

        this.render()
    }

    render() {
        const { Products, Companies } = this.state

        let productArray = [];

        for( let i = 0; i < Products.length; i++) {
            let product = Products[i];

            productArray.push(product)
        }

        const ulOne = e(`ul`, null, ...productArray)

        const lisTwo = Companies.map(company => {
            e(`li`, null, `${company.name}`)
        })

        const ulTwo = e(`ul`, null, ...lisTwo)

        const divOne = e(`div`, null, ulOne)
        const divTwo = e(`div`, null, ulTwo)

        app.append(divOne, divTwo);

        console.log(Products, Companies)

        return e(`div`, null, app)
    }
}

ReactDOM.render(React.createElement(App), app)
