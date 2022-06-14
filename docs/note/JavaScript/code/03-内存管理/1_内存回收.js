const registry = new FinalizationRegistry(heldValue => {
    console.log(heldValue) // foo被销毁了
});

let foo = { bar: 0 }
registry.register(foo,'foo被销毁了');

foo = null
