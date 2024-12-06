package chain
import "fmt"
type Handle struct {
	next Action
}
func (h*Handle) Execute(){
	fmt.Println("handle")
	h.next.Execute()
}
func (h*Handle) SetNext(a Action){
	h.next = a
}