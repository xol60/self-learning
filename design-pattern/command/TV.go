package command 

type TV struct {
}
func NewTV() *TV {
	return &TV{}
}
func (t *TV) On() {
	println("TV on")
}
func (t *TV) Off() {
	println("TV off")
}
