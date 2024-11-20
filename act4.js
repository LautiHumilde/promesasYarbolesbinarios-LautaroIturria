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
  preOrden(nodo = this.raiz) {
    if (nodo !== null) {
        this.preOrden(nodo.izquierda);
        console.log(nodo.valor);
        this.preOrden(nodo.derecha);
    }
  }
}

const arbol = new ArbolBinarioBusqueda();

arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(3);
arbol.insertar(7);
arbol.insertar(20);
arbol.insertar(15);
arbol.insertar(25);

arbol.preOrden()