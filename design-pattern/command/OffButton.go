package command

type OffButton struct {
	Device Device
}

func (b *OffButton) Press() {
	b.Device.Off()
}
