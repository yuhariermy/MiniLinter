package main

import "fmt"

// "log"

//All About Variable
var namaDepan string
var namaBelakang string

// default value <nil>
var x [5]int

// struct (class) and interface
// struct
type namaStruct struct {
	nama   string
	umur   int
	alamat string
}

func (ns *namaStruct) Rename(newName string) {
	ns.nama = newName
}

func (ns namaStruct) Method2() {
	fmt.Println("percobaan ke 2")
}

func (ns namaStruct) MethodName() {
	fmt.Println("Ini method namaStruct", ns.nama)
	ns.Method2()
}

// interface
type PersegiPanjang struct {
	Panjang int
	Lebar   int
}

type Kubus struct {
	Panjang int
	Lebar   int
	Tinggi  int
}

func (pp PersegiPanjang) Hitung() int {
	return pp.Panjang * pp.Lebar
}
func (k Kubus) Hitung() int {
	return k.Panjang * k.Lebar * k.Tinggi
}

type NamaInterface interface {
	Hitung() int
}

func hasil(hasil NamaInterface) int {
	return hasil.Hitung()
}

// func total(a, b int) int {
// 	return a + b
// }

//variadic function
// func variadic(angka ...int) {
// 	fmt.Println(angka)
// }

// nested function

// func func1() {
// 	kedua := func(value int) {
// 		fmt.Println("valuenya", value)
// 	}

// 	kedua(12)
// }

// defer, panic, recover === function
// defer
// func greetings(nama string) {
// 	defer func() {
// 		fmt.Println("selesai")
// 	}()

// 	fmt.Println("hello", nama)
// }

// panic == mengerrorkan run time, auto stop semua program yang sedang jalan
// recover situasi panic

func main() {

	// namaStruct.MethodName() // error

	// Struct harus ditampung ke dalam variable
	user := namaStruct{
		nama:   "Namaku",
		umur:   12,
		alamat: "Alamatku bro",
	}

	user.Rename("nama baru")
	user.MethodName()

	fmt.Println("\n***")

	// 	interface
	kubus := Kubus{12, 12, 12}
	persegiPanjang := PersegiPanjang{10, 5}

	hasilKubus := hasil(kubus)
	hasilSegitiga := hasil(persegiPanjang)

	fmt.Println(hasilKubus)
	fmt.Println(hasilSegitiga)

	// fmt.Println(user.alamat)
	// recover
	// defer func() {
	// 	recover()
	// 	greetings("namaku")
	// }()
	// panic("berhenti dulu")
	// greetings("namaku") // mengerrorkan
	// nested function
	// func1()

	// return nilai func total
	// hasil := total(5, 4)
	// fmt.Println("hasilnya", hasil)

	// variadic function
	// variadic(12, 32, 42, 5423, 423)
	// fmt.Println(variadic)

	// array
	// x[0] = 100
	// x[1] = 1
	// x[2] = 12
	// x[3] = 103
	// x[4] = 100

	// var total int

	// for _, value := range x {
	// 	fmt.Println(value)
	// 	total += value
	// }

	// fmt.Println("Value :", total)
	// fmt.Println("Value :", x[1:3])

	// /////////////////////////////////////////////////////////////////////////
	// Must to find more about Big O Notation: O(n), O(log n), O(n^2), O(1)
	// Must to find more about garbage collector
	// Must to find more about goroutine
	///////////////////////////////////////////////////////////////////////////

	// array.map
	// x := make(map[string]int)

	// x["pertama"] = 100
	// fmt.Print(x["pertama"])

	// range 1 - 10 dimana ganjil dan genap terbukti
	// for i := 0; i <= 10; i++ {
	// 	if i%2 == 0 {
	// 		fmt.Println("Angkat Genap Anda: ", i)
	// 	} else {
	// 		fmt.Println("Angkat Ganjil Anda: ", i)
	// 	}
	// }

	// if = conditional statement
	// switch = match statement

	// nilai := 10

	// switch nilai {
	// case 10:
	// 	fmt.Println("Mantap")
	// case 9:
	// 	fmt.Println("Dikit lagi")
	// case 8:
	// 	fmt.Println("Coba lagi")
	// default:
	// 	fmt.Println("remed")
	// }

	// Conditiopnal if
	/*
		nilai := 0

			if nilai > 10 || nilai < 0 {
				fmt.Println("Wrong Input")
			} else if nilai > 5 {
				fmt.Println("Mantap")
			} else {
				fmt.Println("Coba lagi")
			} */

	//  for
	// //for 1
	// for nilai < 10 {
	// 	fmt.Println(nilai)
	// 	nilai += 1
	// }

	// // for 2
	// for i := 0; i < 10; i++ {
	// 	fmt.Println(i)
	// }

	// Variable
	/*
		fmt.Println("Hello World!")

		nama := "Nama gua"
		umur := 23

		namaDepan = "ermy"
		namaBelakang = "yuhari"

		fmt.Println(nama, namaDepan, namaBelakang, "umur", umur)
	*/

	// log can be for print
	// log.Println("Hello World")
}
