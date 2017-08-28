(function() {
  angular.module('Lab').component('fieldComp', {
    bindings: {
      title: '@',
      color: '@',
      grid: '@',
      value: '@',
    },
    controller: [
      'gridSystem',
      function(gridSystem){
        this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
      }
    ],
    template: `
    <div class="{{$ctrl.gridClasses}}">
      <div class="info-box">
        <span class="info-box-icon {{$ctrl.color}}"><i class="ion ion-ios-gear-outline"></i></span>

        <div class="info-box-content">
          <span class="info-box-text">{{$ctrl.title}}</span>
          <span class="info-box-number">{{$ctrl.value}}</span>
        </div>
        <!-- /.info-box-content -->
      </div>
      <div class="form-group">
              <label for="{{$ctrl.title}}">Update {{$ctrl.title}}</label>
              <input type="text" class="form-control" id="{{$ctrl.title}}" placeholder="Enter a string" ng-model="$ctrl.value">
      </div>
      <!-- /.info-box -->
    </div>
    `
  })
})()
