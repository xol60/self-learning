package composite
type Component interface {
	Search(string) string
	GetName() string
}