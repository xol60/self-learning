package decorator
type Pizza interface {
	PrintPizza()
}
type ChickenPizza struct {
	
}
type CheesePizza struct {
	
}
func (c *ChickenPizza) PrintPizza() {
	println("Chicken Pizza")
}
func (c *CheesePizza) PrintPizza() {
	println("Cheese Pizza")
}