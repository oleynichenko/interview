function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  }
}

HtmlElement.prototype.focus = function() {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
  
  this.addItem = function(item) {
    this.items.push(item);
  };

  this.removeItem = function(item) {
    this.items.filter((i) => item !== i);
  };
  
  this.render = function () {
    let optionsStr = '';
    
    for (let s of this.items) {
      optionsStr += `<option>${s}</option>`
    } 
    
    return `
<select>
  ${optionsStr}
<select>`;
  }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImgElement(src = '') {
  this.src = src;
  
  this.render = function () {
    return `<img src=${this.src} />`;
  }
}

HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.constructor = HtmlImgElement;

const elems = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImgElement('http://')
];

for (let el of elems) {
  console.log(el.render());
} 
