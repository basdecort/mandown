function HomeViewModel(app, dataModel) {
    var self = this;

    self.warnings = ko.observableArray();
    self.errors = ko.observableArray();

    function updateValues() {
        self.errors.push({ message: "asdasd" });
    }

    Sammy(function () {
        setInterval(updateValues, 5000);

        self.warnings.push({ message: "asdasd" });
    });

    return self;
}

app.addViewModel({
    name: "Home",
    bindingMemberName: "home",
    factory: HomeViewModel
});
