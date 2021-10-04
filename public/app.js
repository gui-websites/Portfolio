class SuperNode {
  constructor(nodeList) {
      this.nodes = Array.from(nodeList)
  }

  click(cb) {
    this.nodes.forEach(el => {
      el.addEventListener("click", cb)
    })
  }

  valueOf() {
    return this.nodes
  }
}

function $(selector) {
  const res = document.querySelectorAll(selector)
  return new SuperNode(res)
}
