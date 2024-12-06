package command

type OnButton struct {
	Device Device
}

func (b *OnButton) Press() {
	b.Device.On()
}
