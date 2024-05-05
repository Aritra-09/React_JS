function customreact(reactElement, rootElement){

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    rootElement.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://developer.mozilla.org/en-US/',
        target: '_blank'
    },
    children: 'Click to visit MDN docs'
}


const rootElement = document.getElementById('root')

customreact(reactElement,rootElement)