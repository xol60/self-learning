package iterator
type Iterator interface {
	HasNext ()	bool
	GetNext ()	*User
}
type UserIterator struct {
	index int
	users []*User
}

func (ui *UserIterator) HasNext() bool {
	return ui.index < len(ui.users)
}
func (ui *UserIterator) GetNext() *User {
	if !ui.HasNext() {
		return nil
	}
	user := ui.users[ui.index]
	ui.index++
	return user
}