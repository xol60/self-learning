package builder 
type director struct {
	builder iBuilder
}

func NewDirector(builder iBuilder) *director {
	return &director{builder: builder}
}

func (d *director) Construct() House {
	d.builder.setDoor()
	d.builder.setWall()
	d.builder.setRoof()
	d.builder.setName()
	return d.builder.setHouse()
}