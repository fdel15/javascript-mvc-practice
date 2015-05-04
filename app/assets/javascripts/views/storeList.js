function StoreListView(selector) {
  this.$selector = $(selector)
}

StoreListView.prototype = {
  draw: function(listItems) {
    this.$selector.empty();
    listItems.forEach(function(item){
      this.$selector.append(item.html.cloneNode(item.html))
    }.bind(this));

  },
}
