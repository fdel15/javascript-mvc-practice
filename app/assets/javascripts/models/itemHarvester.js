function Item (name, price) {
  this.name = name;
  this.price = price;
}

function ItemHarvester (selector) {
  this.$selector = $(selector);

}

ItemHarvester.prototype = {
  harvest: function() {
    var items = this._nodes().map(function(index, node){
      var name = $(node).children().first().text()
      var price = parseFloat($(node).children().last().text())
    return new Item(name, price)
    });
    this.$selector.empty()
    return items
  },

  _nodes: function() {
    return this.$selector.children();
  }
}

$(function(){
  var test = new ItemHarvester("#store_list tbody");
  test.harvest();
})