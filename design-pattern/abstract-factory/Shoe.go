package factory
type Shoe struct {
	name string
	size int
}
type IShoe interface {
	SetName(name string)
	SetSize(size int)
	GetName() string
	GetSize() int
}
func (s *Shoe) GetName() string {
	return s.name
}

func (s *Shoe) GetSize() int {
	return s.size
}
func (s *Shoe) SetName(name string) {
	s.name = name
}	
func (s *Shoe) SetSize(size int) {
	s.size = size
}