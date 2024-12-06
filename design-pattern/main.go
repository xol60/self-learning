package main

import (
	//"design/singleton"
	//"design/builder"
	//f "design/abstract-factory"
	//"design/prototype"
	//"design/chain"
	//"design/command"
	//o "design/observer"
	//"design/iterator"
	//"design/bridge"
	//"design/composite"
	"design/decorator"
	//"fmt"
	//"time"
)

func main() {
	// for i := 0; i < 10; i++ {
	// 	go func() {
	// 		fmt.Printf("%p\n", singleton.GetInstance());
	// 	}()
	// }
	// var director = builder.NewDirector(builder.NewNormalBuilder())
	// var house = director.Construct();
	// fmt.Println(house.Door,	house.Wall, house.Roof, house.Name);
	// time.Sleep(time.Second)
	// var factory = f.GetFactory("adidas")
	// var shoe = factory.CreateShoe()
	// var shirt = factory.CreateShirt()
	// fmt.Println(shoe.GetName(), shoe.GetSize())
	// fmt.Println(shirt.GetName(), shirt.GetColor())
	// var node = &prototype.Node{
	// 	Content:"root",
	// }
	// var node2 = & prototype.Node{
	// 	Content:"node",
	// }
	// var ArrayNode = &prototype.ArrayNode{
	// 	Content:[]prototype.INode{node, node2},
	// 	Name:"ArrayNode",
	// }
	// var cloneNode = ArrayNode.Clone()
	// cloneNode.Print()
	// var action = & chain.Handle{}
	// var payment = & chain.Payment{}
	// action.SetNext(payment)
	// action.Execute()
	// var tv = command.NewTV()
	// var onButton = command.OnButton{
	// 	Device: tv,
	// }
	// var offButton = command.OffButton{
	// 	Device: tv,
	// }
	// onButton.Press()
	// offButton.Press()
	// var o1 = o.InitObserver("observer 1")
	// var o2 = o.InitObserver("observer 2")
	// var o3 = o.InitObserver("observer 3")
	// var object =&o.Object {}; 
	// object.Attach(o1)
	// object.Attach(o2)
	// object.Attach(o3)
	// object.Notify()
	// var user1 = &iterator.User{
	// 	Name: "user1",
	// }
	// var user2 = &iterator.User{
	// 	Name: "user2",
	// }
	// var user3 = &iterator.User{
	// 	Name: "user3",
	// }
	// var collection = &iterator.UserCollection{
	// 	Users: []*iterator.User{user1, user2, user3},
	// }
	// var iterator = collection.CreateIterator()
	// for iterator.HasNext() {
	// 	user := iterator.GetNext()
	// 	println(user.Name)
	// }
	// var p1 = &bridge.Laser{}
	// var p2 = &bridge.Epson{}
	// var mac = &bridge.Mac{}
	// var dell = &bridge.Dell{}
	// mac.SetPrinter(p1)
	// dell.SetPrinter(p2)
	// mac.Print()
	// dell.Print()
	// var file1  = &composite.File{Name: "file1"}
	// var file2  = &composite.File{Name: "file2"}
	// var file3  = &composite.File{Name: "file3"}
	// var folder1 = &composite.Folder{Name: "folder1"}
	// folder1.Add(file1)
	// folder1.Add(file2)
	// folder1.Add(file3)
	// println(folder1.Search("file1"))
	var pizza1 = &decorator.ChickenPizza{}
	var pizza2 = &decorator.CheesePizza{}
	var chillpizza = &decorator.ChillDecorator{
		Pizza: pizza1,
	}
	chillpizza.PrintPizza()
	chillpizza = &decorator.ChillDecorator{
		Pizza: pizza2,
	}
	chillpizza.PrintPizza()
}
