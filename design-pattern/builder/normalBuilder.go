package builder
type NormalBuilder struct {
	door string
	wall string
	roof string
	name string
}
func NewNormalBuilder() *NormalBuilder {
	return &NormalBuilder{}
}
func (b *NormalBuilder) setDoor() {
	b.door = "door"
}
func (b *NormalBuilder) setWall() {
	b.wall = "wall"
}
func (b *NormalBuilder) setRoof() {
	b.roof = "roof"
}
func (b *NormalBuilder) setName() {
	b.name = "name"
}
func (b *NormalBuilder) setHouse() House {
	return House{b.door, b.wall, b.roof, b.name}
}