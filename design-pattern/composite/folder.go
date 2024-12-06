package composite
type Folder struct {
	files [] Component
	Name string
}
func (f *Folder) GetName() string {
	return f.Name
}
func (f *Folder) Search(s string) string {
	for _, file := range f.files {
		if file.Search(s) != "" {
			return file.GetName()
		}
	}
	return ""
}
func (f *Folder) Add(file Component) {
	f.files = append(f.files, file)
}