(function () {
  'use strict';

  angular
    .module('shoppingListApp', [])
    .controller('ToBuyController', ToBuyController)
    .controller('BoughtController', BoughtController)
    .service('ShoppingListService', ShoppingListService);

  // Controller To Buy
  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService) {
    const toBuy = this;

    toBuy.items = ShoppingListService.toBuyItems;
    toBuy.buy = (itemIndex) => ShoppingListService.buyItem(itemIndex);
  }

  // Controller Bought
  BoughtController.$inject = ['ShoppingListService'];
  function BoughtController(ShoppingListService) {
    const bought = this;

    bought.items = ShoppingListService.boughtItems;
  }

  // Service
  function ShoppingListService() {
    const service = this;

    const toBuyItems = [
      {
        name: 'coukies',
        qty: 10,
        isBought: false,
      },
      {
        name: 'fromages',
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
        name: 'donnets',
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
