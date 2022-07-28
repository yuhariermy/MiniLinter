package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

func Reverse(input string) string {
	s := strings.Split(input, " ")
	sort.Sort(sort.Reverse(sort.StringSlice(s)))
	return strings.Join(s, " ")
}

func main() {
	in := bufio.NewReader(os.Stdin)

	count, err := in.ReadString('\n')
	if err != nil {
		panic(err)
	}

	countToInt, err := strconv.Atoi(strings.TrimSuffix(count, "\r\n"))
	if err != nil {
		panic(err)
	}

	arrayResult := make([]string, countToInt)

	for i := 1; i <= countToInt; i++ {

		sentences, _ := in.ReadString('\n')
		removeEnter := strings.TrimSuffix(sentences, "\r\n")
		reversedSentence := Reverse(removeEnter)
		arrayResult[i-1] = reversedSentence
	}

	for _, value := range arrayResult {
		fmt.Println(value)
	}

}
