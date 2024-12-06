package prototype
import "fmt"
type INode interface{
	Print()
	Clone() INode
}
type Node struct{
	Content string
}
func (n *Node)Print(){
	fmt.Println(n.Content)
}
func (n *Node)Clone()INode{
	return &Node{
		Content:n.Content,
	}
}
type ArrayNode struct{
	Content []INode
	Name string
}
func (n *ArrayNode)Print(){
	fmt.Println(n.Content)
	for i := 0; i < len(n.Content); i++ {
		n.Content[i].Print()
	}
}
func (n *ArrayNode)Clone()INode{
	cloneNode := &ArrayNode{
		Content:make([]INode, len(n.Content)),
		Name : n.Name,
	}
	for i := 0; i < len(n.Content); i++ {
		cloneNode.Content[i] = n.Content[i].Clone()
	}
	return cloneNode
}