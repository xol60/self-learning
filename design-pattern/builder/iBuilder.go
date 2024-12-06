package builder 

type iBuilder interface {
	setDoor()
	setWall()
	setRoof()
	setName()
	setHouse() House
}
