function GroceryListView(selector){
  this.$selector = $(selector);
}

GroceryListView.prototype = {
  draw: function(listItems) {
    listItems.forEach(function(item){
      clone = item.html.cloneNode()
      this.$selector.append(item.html.cloneNode(item.html))
    }.bind(this));
  }
}