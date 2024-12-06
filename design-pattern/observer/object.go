package observer
type Object struct {
	observer []Observer
}
func (o *Object) Attach(observer Observer) {
	o.observer = append(o.observer, observer)
}
func (o *Object) Notify() {
	for _, observer := range o.observer {
		observer.Update()
	}
}