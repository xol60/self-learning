package observer
import "fmt"

type RealObserver struct {
	name string
}
func  InitObserver(name string) * RealObserver {
	return & RealObserver{
		name: name,
	}
}

func (o *RealObserver) Update() {
	fmt.Println(o.name + " notified" )
}