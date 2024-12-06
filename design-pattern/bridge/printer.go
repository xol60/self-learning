package bridge
import "fmt"
type Printer interface {
	Print()
}
type Epson struct {}
func (e *Epson) Print() {
	fmt.Println("Epson printer printing")
}
type Laser struct {}
func (l *Laser) Print() {
	fmt.Println("Laser printer printing")
}