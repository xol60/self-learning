package factory

type AdidasShoe struct {
	 Shoe
}
type AdidasShrt struct {
	 Shirt
}
type AdidasFactory struct {

}

func (f *AdidasFactory) CreateShoe() IShoe {
	return &AdidasShoe{
		Shoe : Shoe{
			name : "adidas shoe",
			size : 10,
		},
	}
}
func (f *AdidasFactory) CreateShirt() IShirt {
	return &AdidasShrt{
		Shirt : Shirt{
			Name : "adidas shirt",
			Color : "red",
		},
	}
}