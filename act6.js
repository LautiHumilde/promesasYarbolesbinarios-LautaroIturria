class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

class ArbolBinarioBusqueda {
  constructor() {
    this.raiz = null;
  }

  insertar(valor) {
    const nuevoNodo = new Nodo(valor);
    if (this.raiz === null) {
      this.raiz = nuevoNodo;
    } else {
      this._insertarRecursivo(this.raiz, nuevoNodo);
    }
  }

  _insertarRecursivo(nodoActual, nuevoNodo) {
    if (nuevoNodo.valor < nodoActual.valor) {
      if (nodoActual.izquierda === null) {
        nodoActual.izquierda = nuevoNodo;
      } else {
        this._insertarRecursivo(nodoActual.izquierda, nuevoNodo);
      }
    } else {
      if (nodoActual.derecha === null) {
        nodoActual.derecha = nuevoNodo;
      } else {
        this._insertarRecursivo(nodoActual.derecha, nuevoNodo);
      }
    }
  }
}

function validateTraversal(arbol) {
  const objeto = {
    preOrden: 0,
    inOrder: 0,
    posOrder: 0
  };

  function preOrden(nodo) {
    if (nodo !== null) {
      objeto.preOrden += nodo.valor;
      preOrden(nodo.izquierda);
      preOrden(nodo.derecha);
    }
  }

  function inOrder(nodo) {
    if (nodo !== null) {
      inOrder(nodo.izquierda);
      objeto.inOrder += nodo.valor;
      inOrder(nodo.derecha);
    }
  }

  function postOrder(nodo) {
    if (nodo !== null) {
      postOrder(nodo.izquierda);
      postOrder(nodo.derecha);
      objeto.posOrder += nodo.valor;
    }
  }
  preOrden(arbol.raiz);
  inOrder(arbol.raiz);
  postOrder(arbol.raiz);

  return objeto;
}
const arbol = new ArbolBinarioBusqueda();

arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(3);
arbol.insertar(7);
arbol.insertar(20);
arbol.insertar(15);
arbol.insertar(25);

const resultado = validateTraversal(arbol);
console.log(resultado.preOrden);
console.log(resultado.inOrder);
console.log(resultado.posOrder);