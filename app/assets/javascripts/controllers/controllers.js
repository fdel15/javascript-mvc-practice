function Controller(storeListView, groceryListView) {
  this.storeListView = storeListView;
  this.storeList = [];

  this.groceryListView = groceryListView;
  this.groceryList = [];

}

Controller.prototype = {
  addItems: function(items){
    items.forEach(function(i){
      this.storeList.push(i);
    }.bind(this));
    this._draw();
  },

  addToCartByName: function(soughtName) {
    var item = this.storeList.filter(function(element){
      return element.name == soughtName
    })[0];
    this.groceryList.push(item)
    this._draw();
    this.groceryList.pop()
  },

  _draw: function() {
    this.groceryListView.draw(this.groceryList);
    this.storeListView.draw(this.storeList);
  }
}
