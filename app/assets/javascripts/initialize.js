$(function(){
  var storeListView = new StoreListView('#store_list tbody')
  var groceryListView = new GroceryListView('#grocery_list')
  var c = new Controller(storeListView, groceryListView)
  var test = new ItemHarvester("#store_list tbody");
  c.addItems(test.harvest());
  c.addToCartByName("Tofu");
  c.addToCartByName("Apple");
  c.addToCartByName("Tofu");
})