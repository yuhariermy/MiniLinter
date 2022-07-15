package main

import (
	"fmt"
	"math"
	"strings"
)

// The structs
type TriangleShape struct {
	Name  string
	Side1 float64
	Side2 float64
	Base  float64
	High  float64
}

type CircleShape struct {
	Name   string
	Radius float64
	// Pi     float64
}

type ParellogramShape struct {
	Name string
	Base float64
	High float64
}

type Formula interface {
	CheckShapeName() string // Check shape name the Shape
	CountPerimeter() float64
	CountArea() float64
	// CountVolume() int // it can't be found because its 2Dimension shape, alternatively using CountPerimeter()
}

// TriangleShape represents
func (t TriangleShape) CountArea() float64 {
	return (t.Base * t.High) / 2
}

func (t TriangleShape) CountPerimeter() float64 {
	return t.Side1 + t.Side2 + t.Base
}

func (t TriangleShape) CheckShapeName() string {
	return t.Name
}

// CircleShape represents
func (c CircleShape) CountArea() float64 {
	return math.Pi * (c.Radius * c.Radius)
}
func (c CircleShape) CountPerimeter() float64 {
	return 2 * math.Pi * c.Radius
}

func (c CircleShape) CheckShapeName() string {
	return c.Name
	// c.Name = name
}

// ParellogramShape represents
func (p ParellogramShape) CountArea() float64 {
	return p.Base * p.High
}

func (p ParellogramShape) CountPerimeter() float64 {
	return 2 * (p.Base + p.High)
}

func (p ParellogramShape) CheckShapeName() string {
	return p.Name
}

// Implementation the Interface
func countArea(countArea Formula) float64 {
	return countArea.CountArea()
}

func countPerimeter(countPerimeter Formula) float64 {
	return countPerimeter.CountPerimeter()
}

func checkShapeName(checkName Formula) string {
	return checkName.CheckShapeName()
}

// main program
func main() {

	var inputShape string
	var inputAnswer string

	triangle := TriangleShape{Name: "triangle"}
	parellogram := ParellogramShape{Name: "parellogram"}
	circle := CircleShape{Name: "circle"}

	triangleName := checkShapeName(triangle)
	fmt.Println(triangleName)
	// inputShape = triangle.CheckShapeName()

	// triangle := TriangleShape{
	// 	Side1: 13,
	// 	Side2: 14,
	// 	Base:  5,
	// 	High:  10,
	// }

	// parellogram := ParellogramShape{
	// 	Base: 4,
	// 	High: 10,
	// }

	// circle := CircleShape{
	// 	Radius: 4,
	// 	Pi: 3.14,
	// }

	welcomeMessage := "Welcome to Formula Game, Input your Shape (Triangle, Circle, Parellogram): "
	fmt.Println(welcomeMessage)

	fmt.Scan(&inputShape)
	inputShape = strings.ToLower(inputShape)

	// triangleShape := triangle.Name // triangle
	// triangle.CheckShapeName(triangleShape)

	// parellogramShape := parellogram.Name // parellogram
	// parellogram.CheckShapeName(parellogramShape)

	// circleShape := circle.Name // circle
	// circle.CheckShapeName(circleShape)

	if inputShape == "triangle" {

		// triangle := TriangleShape{}
		// shapeName := inputShape
		// triangle.CheckShapeName(inputShape)

		// triangle.Name("triangle")

		fmt.Println("Welcome to the", strings.Title(inputShape), "formula")

		fmt.Println("Your Shape is: ", strings.Title(inputShape))
		fmt.Println("What do you want to find, Area or Perimeter of", strings.Title(inputShape), "?")
		fmt.Scan(&inputAnswer)
		inputAnswer = strings.ToLower(inputAnswer)

		if inputAnswer == "area" {
			fmt.Println("You want to find", inputAnswer, "\nInput Your Base")
			fmt.Scan(&triangle.Base)
			fmt.Println("Input Your High")
			fmt.Scan(&triangle.High)

			areaTriangle := countArea(triangle)
			fmt.Println("Your Base is:", triangle.Base, "Your High is:", triangle.High, "The area of your", strings.Title(inputShape), "is:", areaTriangle)
		} else if inputAnswer == "perimeter" {
			fmt.Println("You want to find", inputAnswer, "\nInput Your Base")
			fmt.Scan(&triangle.Base)
			fmt.Println("Input Your First Side")
			fmt.Scan(&triangle.Side1)
			fmt.Println("Input Your Second Side")
			fmt.Scan(&triangle.Side2)

			perimeterTriangle := countPerimeter(triangle)
			fmt.Println("Your Base is:", triangle.Base, "Your First Side is:", triangle.Side1, "Your Second Side is:", triangle.Side2, "The perimeter of your", strings.Title(inputShape), "is:", perimeterTriangle)
		} else {
			fmt.Println("Wrong input")
		}
	} else if inputShape == "parellogram" {
		// parellogram := ParellogramShape{}
		fmt.Println("Your Shape is: ", strings.Title(inputShape))
		fmt.Println("What do you want to find, Area or Perimeter of", strings.Title(inputShape), "?")
		fmt.Scan(&inputAnswer)
		inputAnswer = strings.ToLower(inputAnswer)

		if inputAnswer == "area" {
			fmt.Println("You want to find", inputAnswer, "\nInput Your Base")
			fmt.Scan(&parellogram.Base)
			fmt.Println("Input Your High")
			fmt.Scan(&parellogram.High)

			areaParellogram := countArea(parellogram)
			fmt.Println("Your Base is:", parellogram.Base, "Your High is:", parellogram.High, "The area of your", strings.Title(inputShape), "is:", areaParellogram)
		} else if inputAnswer == "perimeter" {
			fmt.Println("You want to find", inputAnswer, "\nInput Your Base")
			fmt.Scan(&parellogram.Base)
			fmt.Println("Input Your High")
			fmt.Scan(&parellogram.High)

			perimeterParellogram := countPerimeter(parellogram)
			fmt.Println("Your Base is:", parellogram.Base, "Your High is:", parellogram.High, "The perimeter of your", strings.Title(inputShape), "is:", perimeterParellogram)
		} else {
			fmt.Println("Wrong input")
		}

	} else if inputShape == "circle" {
		// circle := CircleShape{}
		fmt.Println("Your Shape is: ", strings.Title(inputShape))
		fmt.Println("What do you want to find, Area or Perimeter of", strings.Title(inputShape), "?")
		fmt.Scan(&inputAnswer)
		inputAnswer = strings.ToLower(inputAnswer)

		if inputAnswer == "area" {
			fmt.Println("You want to find", inputAnswer, "\nInput Your Radius")
			fmt.Scan(&circle.Radius)

			areaCircle := countArea(circle)
			fmt.Println("Your Radius is:", circle.Radius, "The area of your", strings.Title(inputShape), "is:", areaCircle)
		} else if inputAnswer == "perimeter" {
			fmt.Println("You want to find", inputAnswer, "\nInput Your Radius")
			fmt.Scan(&circle.Radius)

			perimeterCircle := countPerimeter(circle)
			fmt.Println("Your Base is:", circle.Radius, "The perimeter of your", strings.Title(inputShape), "is:", perimeterCircle)
		} else {
			fmt.Println("Wrong input")
		}
	} else {
		fmt.Println("Only Triangle, Circle, Parellogram. Try Again!")
	}

	// areaParellogram := countArea(parellogram)
	// perimeterParellogram := countPerimeter(parellogram)

	// areaCircle := countArea(circle)
	// perimeterCircle := countPerimeter(circle)

	// fmt.Println("The Area Triangle is:", areaTriangle, "The Perimeter Triangle is:", perimeterTriangle)
	// fmt.Println("The Area Parellogram is:", areaParellogram, "The Perimeter Parellogram is:", perimeterParellogram)

}
