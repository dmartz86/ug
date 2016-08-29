(() => {

  class Item {
    constructor() {
      this.scope = {
        item: '=',
        position: '='
      };
      this.controller = ItemController;
      this.controllerAs = 'it';
      this.templateUrl = '/templates/item.html';
    }
  }

  class ItemController {
    constructor($scope) {
      this.scope = $scope;
      this.active = false;
    }

    $onInit() {
      this.item = this.scope.item;
      this.position = this.scope.position;
      const bases = this.item.split('-');
      this.a = bases[0];
      this.b = bases[1];
      this.c = bases[2];
      this.d = bases[3];
      this.e = bases[4];
    }

    select() {
      this.active = !this.active;
    }

    light() {
      document.getElementById(this.item).select();
    }
  }

  class Feed {
    constructor() {
      this.controller = FeedController;
      this.controllerAs = 'generator';
      this.templateUrl = '/templates/item-feed.html';
    }
  }

  class FeedController {
    constructor() {
      this.items = [];
      this.ranges = [4, 16, 48, 64, 100, 200, 500, 1000];
    }

    $onInit() {
      this.generate(4);
    }

    generate(units) {
      this.items = [];

      for (let i = 0; i < units; i++) {
        this.items.push(uuid.v4());
      }
    }
  }

  angular.module('UUIDApp', [])
    .directive('uuidItem', Item)
    .directive('uuidFeed', Feed);

})();