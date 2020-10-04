(function (exports) {
    'use strict';
    function Controller(model, view) {
        console.log('controller created!!!');
        this.model = model;
        this.view = view;
        let self = this;
        // view의 이벤트를 등록 (initialize)
        this.view.bind('newTodo', function(title) {
            self.addItem(title);
        })
        // model에 연결 (initialize)
        this.showAll();
    }
    Controller.prototype.showAll = function() {
        console.log('Controller.showAll method execute!', );
        let self = this;
        this.model.read( function(data) {
            self.view.render('showEntries', data)
        })
    }
    Controller.prototype.addItem = function(title) {
        console.log('Console.addItem method execute!', );
        let self = this;
        if (title.trim() === '') {
            return;
        }
        self.model.create(title, function() {
            self.view.render('clearNewTodo', title);
        });
        this.showAll();
    }
    exports.app = exports.app || {};
    exports.app.Controller = Controller;
})(this);