window.addEventListener("app:mounted", (function() {
    new Popper("#top-header-menu",".popper-ref",".popper-root",{
        placement: "bottom-start",
        modifiers: [{
            name: "offset",
            options: {
                offset: [0, 4]
            }
        }]
    });
    var p = {
        placement: "bottom-end",
        modifiers: [{
            name: "offset",
            options: {
                offset: [0, 4]
            }
        }]
    };
    new Popper("#cardMenu1",".popper-ref",".popper-root",p),
    new Popper("#cardMenu2",".popper-ref",".popper-root",p),
    new Popper("#cardMenu3",".popper-ref",".popper-root",p),
    new Popper("#cardMenu4",".popper-ref",".popper-root",p),
    new Popper("#cardMenu5",".popper-ref",".popper-root",p),
    new Popper("#cardMenu6",".popper-ref",".popper-root",p),
    new Popper("#cardMenu7",".popper-ref",".popper-root",p),
    new Popper("#cardMenu8",".popper-ref",".popper-root",p),
    new Popper("#cardMenu9",".popper-ref",".popper-root",p),
    new Popper("#cardMenu10",".popper-ref",".popper-root",p),
    new Popper("#cardMenu11",".popper-ref",".popper-root",p),
    new Popper("#cardMenu12",".popper-ref",".popper-root",p)
}
), {
    once: !0
});
