package bridge
type Computer interface {
	SetPrinter(printer Printer)
	Print()
}
type Mac struct {
	Printer Printer
}
func (m *Mac) SetPrinter(printer Printer) {
	m.Printer = printer
}
func (m *Mac) Print() {
	m.Printer.Print()
}
type Dell struct {
	Printer Printer
}
func (d *Dell) SetPrinter(printer Printer) {
	d.Printer = printer
}
func (d *Dell) Print() {
	d.Printer.Print()
}