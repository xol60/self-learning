package composite
type File struct {
	Name string
}
func (f *File) GetName() string {
	return f.Name
}
func (f * File) Search(s string) string{
	if f.Name == s {
		return f.Name
	}
	return ""
}