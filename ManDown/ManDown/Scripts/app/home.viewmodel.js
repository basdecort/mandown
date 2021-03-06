﻿function HomeViewModel(app, dataModel) {
    var self = this;

    self.warnings = ko.observableArray();
    self.errors = ko.observableArray();

    function updateValues() {
        $.getJSON("/api/notifications", function (data) {

            for (var i = 0, len = data.length; i < len; i++) {
                self.errors.push({ message: data[i] });
            }
        });
    }

    Sammy(function () {
        setInterval(updateValues, 5000);
    });

    return self;
}

app.addViewModel({
    name: "Home",
    bindingMemberName: "home",
    factory: HomeViewModel
});
