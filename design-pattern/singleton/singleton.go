package singleton
import "sync"
type Singleton struct {
	count int;
}
var (instance *Singleton;
	once sync.Once;)
func GetInstance() *Singleton {
	once.Do(func() {
		instance = &Singleton{count:0};
	})
	return instance;
}
func (s* Singleton) Increament(){
	s.count++;
}