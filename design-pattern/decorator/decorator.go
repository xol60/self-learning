package decorator
type ChillDecorator struct {
	Pizza Pizza
}

func (c *ChillDecorator) PrintPizza() {
	c.Pizza.PrintPizza()
	println("Chill")
}