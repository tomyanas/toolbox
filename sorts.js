
//________________ Bubble Sort v1.0__________
const bubbleSortV1 = (array) => {
    let length = array.length, aux;
    for (let i = 0; i < length; i++) {
        for(var j = 0 ; j < length; j++){
            if (array[j] > array[j + 1]) {
              aux = array[j];
              array[j] = array[j+1];
              array[j + 1] = aux;
            }
        }
    }
    return array;
  }

  //________________ Bubble Sort v2.0__ descriptive________
const bubbleSortV2 = (array) => {
    let length = array.length, left, right;
    for (let i = 0; i < length; i++) {
        for(var j = 0 ; j < length; j++){
            left = array[j];
            right = array[j + 1]
            if ( left > right ) {
                array[j] = right;
                array[j + 1] = left;
            }
        }
    }
    return array;
  }

//_______________Selection sort V1.0________________

const selectionSortV1= (array) => {
    let length = array.length, minor, aux;
    for (let i = 0; i < length; i++) {
        minor = i;
        for (let j = i + 1; j < length; j++) {
            if (array[minor] > array[j]) {
                minor = j;
            }
        }
        if (minor !== i) {
            aux = array[i];
            array[i] = array[minor];
            array[minor] = aux;
        }
    }
    return array;
}

//_______________Insertion sort V1.0________________

const insertionSortV1 = (array) => {
    let length = array.length, current, previous;
        for (let i = 1; i < length; i++) {
            current = array[i];
            previous = i-1; 
            while ((previous > -1) && (array[previous] > current)) {
                array[previous + 1] = array[previous];
                previous--;
            }
            array[previous + 1] = current;
        }
    return array;
}


// _____ para hacer debug y ver como funciona agregar las siguientes lineas dentro del segundo for_____

//   console.log(`i: ${i} - j: ${j}`);
//   console.log(`array[i]: ${array[i]} | array[j]: ${array[j]}`);
  

//__________Tests___________

  let arrayUnordered = [5, 2, 8, 9, 0, 3, 1, 4, 6, 7];
  let arrayBubbleV1 = bubbleSortV1(arrayUnordered);
  let arrayBubbleV2 = bubbleSortV2(arrayUnordered);
  let arraySelectionV1 = selectionSortV1(arrayUnordered);
  let arrayInsertionV1 = insertionSortV1(arrayUnordered);
  console.log('Array Unordered= ', arrayUnordered);
  console.log('Array Ordered BubbleV1= ', arrayBubbleV1);
  console.log('Array Ordered BubbleV2= ', arrayBubbleV2);
  console.log('Array Ordered SelectionV1= ', arraySelectionV1);
  console.log('Array Ordered InsertionV1= ', arrayInsertionV1);
