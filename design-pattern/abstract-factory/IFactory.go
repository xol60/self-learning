package factory
type IFactory interface {
	CreateShoe() IShoe
	CreateShirt() IShirt
}
func GetFactory(factoryType string) IFactory {
	switch factoryType {
	case "nike":
		//return &NikeFactory{}
	case "adidas":
		return &AdidasFactory{}
	}
	return nil
}