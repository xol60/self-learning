package chain 
type Action interface {
	Execute()
	SetNext(a Action)
}