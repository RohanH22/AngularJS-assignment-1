var  todo = angular.module("toDo", [])

todo.controller("todocontroller", function ($scope){

    localItem = localStorage.getItem("todos")
    if(localItem == null){
        $scope.todos = []
    }
    else{
        $scope.todos = JSON.parse(localItem)
    }


    $scope.onclick = function(index){
        $scope.todos.splice(index,1);
        localStorage.setItem('todos' , JSON.stringify($scope.todos)) 
        // sessionStorage.setItem('todos' , JSON.stringify($scope.todos))


    }

    $scope.onsubmit =function(){
        $scope.todos.push({title: $scope.title, desc: $scope.desc})
        localStorage.setItem('todos' , JSON.stringify($scope.todos)) 
        sessionStorage.setItem('todos' , JSON.stringify($scope.todos))

    }

   



        
})



