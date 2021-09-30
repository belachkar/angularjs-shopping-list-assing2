(function () {
  'use strict';

  angular
    .module('shoppingListApp', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // Controller To Buy
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    const toBuy = this;

    toBuy.items = ShoppingListCheckOffService.toBuyItems;
    toBuy.buy = (itemIndex) => ShoppingListCheckOffService.buyItem(itemIndex);
  }

  // Controller Bought
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    const bought = this;

    bought.items = ShoppingListCheckOffService.boughtItems;
  }

  // Service
  function ShoppingListCheckOffService() {
    const service = this;

    const toBuyItems = [
      {
        name: 'cookies',
        qty: 10,
        isBought: false,
      },
      {
        name: 'sheese cakes',
        qty: 4,
        isBought: false,
      },
      {
        name: 'chips',
        qty: 7,
        isBought: false,
      },
      {
        name: 'sweets',
        qty: 5,
        isBought: false,
      },
      {
        name: 'donuts',
        qty: 1,
        isBought: false,
      },
    ];

    const boughtItems = [];

    service.toBuyItems = toBuyItems;
    service.boughtItems = boughtItems;

    service.buyItem = (itemIndex) => {
      if (itemIndex >= toBuyItems.length)
        throw new Error(
          'The selected item ' +
            itemIndex +
            ' does not exists on the list, or an error occured during the selection, please try again!'
        );

      const newBoughtItem = toBuyItems.splice(itemIndex, 1);
      if (newBoughtItem) boughtItems.push(newBoughtItem[0]);
    };
  }
})();
