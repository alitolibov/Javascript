let index = +prompt('Напишите число')
let arr_number = ['Aleksey', 'Kartoshka', 'Margarita','Morgenshtern', 'Monica']
if(index <= arr_number.length-1){
    arr_number.splice(index, 1)
    let text = 'Этот элемент в индексе ' + index + ' был удалён'
    alert(text)
} else {
    alert('Такого элеманта нету в массиве')
}
console.log(arr_number);