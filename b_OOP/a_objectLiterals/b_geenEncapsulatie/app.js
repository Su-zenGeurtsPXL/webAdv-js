let person = {
    _name: 'tim',
    print: function () {
        console.log(`name: ${this._name}`);
    },
    setName: function (name) {
        this._name = name;
    },
    getName: function () {
        return this._name;
    },
};
person.setName('sofie');
person.print(); //name: sofie
person._name = 'jan'; // tegen conventie maar lukt toch
person.print(); //name: jan
