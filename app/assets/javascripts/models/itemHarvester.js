function Item (name, price, html) {
  this.name = name;
  this.price = price;
  this.html = html;
}

function ItemHarvester (selector) {
  this.$selector = $(selector);

}

ItemHarvester.prototype = {
  harvest: function() {
    var items = this._nodes().map(function(node, index){
      var name = $(node).children().first().text()
      var price = parseFloat($(node).children().last().text());
      var html = node.cloneNode(node)
    return new Item(name, price, html)
    });
    this.$selector.empty()
    return items
  },

  _nodes: function() {
    return this.$selector.children().toArray(this)
  }
}
