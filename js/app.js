(function () {
    'use strict';
    function App() {
        console.log('App created!!!');
        this.storage = new app.Storage('name');
        this.model = new app.Model(this.storage);
        this.template = new app.Template();
        this.view = new app.View(this.template);
        this.controller = new app.Controller(this.model, this.view);
        console.log('App template', this.template);
        console.log('App template', this.template.defaultTemplate);
        console.log('App template', this.template.insert);
        console.log('App view', this.view);
        console.log('App view', this.view.bind);
        console.log('App controller', this.controller);
        console.log('App model', this.model);
        console.log('App storage', this.storage);
    }
    let todo = new App();
})();