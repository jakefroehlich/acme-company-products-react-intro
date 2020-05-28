const URL = `https://acme-users-api-rev.herokuapp.com/api/`;

const e = (type) => React.createElement(type)

const root = document.querySelector(`#app`);

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
            this.setState({ Products: data })
            console.log('data', data)
        })

        apiFetch(`companies`).then(data => {
            console.log(this.state.Companies);
            this.setState({ Companies: data })
            console.log('data', data)
        })
    }

    render() {
        const { Products, Companies } = this.state

        let productArray = [];

        for( let i = 0; i < Products.length; i++) {
            let product = Products[i];

            productArray.push(e(`li`, null, `${product.name}`))
        }

        const ulOne = React.createElement(`ul`, null, [...productArray])

        // const lisTwo = Companies.map(company => {
        //     e(`li`, null, `${company.name}`)
        // })

        let companyArray = [];

        for( let i = 0; i < Companies.length; i++) {
            let company = Companies[i];

            companyArray.push(e(`li`, null, `${company.name}`));
        }

        const ulTwo = e(`ul`, null, [...companyArray])

        console.log(ulOne)

        const divOne = e(`div`, null, ulOne)
        const divTwo = e(`div`, null, ulTwo)

        return e(`div`, null, divOne, divTwo)
    }
}

ReactDOM.render(React.createElement(App), root)
