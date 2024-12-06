package iterator

type Collection interface {
	CreateIterator() Iterator
}
type UserCollection struct {
	Users []*User
}

func (uc *UserCollection) CreateIterator() Iterator {
	return &UserIterator{users: uc.Users}
}