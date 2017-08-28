(function() {
  angular.module('Lab').controller('WhatcherCtrl', [
    WhatcherController
  ])

  function WhatcherController() {
    const vm = this
    vm.title = ""
    vm.value = ""
  }
})()
