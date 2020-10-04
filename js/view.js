(function (exports) {
    'use strict';
    function View(template) {
        console.log('View created!!!');
        this.template = template;

        this.$todoList = document.getElementById('todo-list');
        this.$newTodo = document.getElementById('new-todo');
    }
    View.prototype.bind = function(event, handler) {
        let self = this;
        if (event == 'newTodo') {
            console.log('View.bind.newTodo execute!', );
            let temp = self.$newTodo;
            temp.addEventListener('change', () => {
                console.log('addEventListener change', );
                handler(self.$newTodo.value);
            })
        }
    }
    View.prototype.render = function (viewCmd, data) {
        let self = this;
        let viewCommands = {
            showEntries : function () {
                console.log('View.render.showEntries execute', data);
                self._addItem(data);
            },
            clearNewTodo : function () {
                console.log('View.render.clearNewTodo execute', );
                self.$newTodo.value = '';
            }
        };
        viewCommands[viewCmd] ();
    }
    View.prototype._addItem = function (id) {
        this.$todoList.innerHTML = this.template.insert(id);
    }
    exports.app = exports.app || {};
    exports.app.View = View;
})(this);