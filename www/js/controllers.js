angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope) {})

  .controller('ChatsCtrl', function($scope, Chats) {
    // 单选按钮数据
    $scope.obj_radioData=["html5","css3","js"];
    $scope.obj_choice={
      choice:"css3"
    };

    // 复选框数据
    $scope.obj_checkboxData=[
      {
        name:"中国",
        isSelect:true
      },
      {
        name:"美国",
        isSelect:false
      },
      {
        name:"小日本",
        isSelect:false
      }
    ]

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
