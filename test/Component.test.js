const Component = require ('../lib/Component')

describe ("Component Class", () =>{
    describe ("Initialization", ()=>{
        it ("should create an instance of the Component class", () =>{
            const component = new Component();
            expect(component).toBeInstanceOf(Component)
        })
        it ("should have a children property that is an array", () =>{
            const component = new Component();
            expect(Array.isArray(component.children)).toBe(true)
        })
        it ("should take in a children array and attach it to the new instance of the Component", () =>{
            const childrenArray = ["this", "that", "the", "other"]
            const component = new Component();
            expect((component.children.length)).toBe(3)
            expect((component.children[0])).toBe(childrenArray[0])
        })
    })
    describe ("render()", () => {
        it("should throw and error if we run this functions from the Component class", () =>{
            const component = new Component()
            const error = new Error (`Child class must implement render () method.`)
            const callback = () => component.render();
            expect(callback).toThrow(error)
        })
    })
    // describe ("render()", () => {
    //     it("should throw and error if we run this functions from the Component class", () =>{
    //         const component = new Component()
    //         const error = new Error (`Child class must implement render () method.`)
    //         const callback = () => component.render();
    //         expect(callback).toThrow(error)
    //     })
    // })
})