package factory

type Shirt struct {
	Name string
	Color string
}
type IShirt interface {
	SetName(name string)
	SetColor(color string)
	GetName() string
	GetColor() string
}
func (s *Shirt) GetName() string {
	return s.Name
}

func (s *Shirt) GetColor() string {
	return s.Color
}
func (s *Shirt) SetName(name string) {
	s.Name = name
}
func (s *Shirt) SetColor(color string) {
	s.Color = color
}	