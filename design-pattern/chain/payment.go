package chain 
import "fmt"
type Payment struct {
	next Action
}

func (p*Payment) Execute(){
	fmt.Println("payment")
	//p.next.Execute()
}
func (p*Payment) SetNext(a Action){
	p.next = a
}