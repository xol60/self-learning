package observer
type Subject interface {
	Notify()
	Attach(observer Observer)
}