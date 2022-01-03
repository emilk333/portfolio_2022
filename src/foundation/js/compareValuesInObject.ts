


type objectToCompare = { value: string, checked: boolean, category: string }

function compare( a:objectToCompare, b:objectToCompare ) {
    if ( a.value < b.value ){
        return -1;
    }
    if ( a.value > b.value ){
        return 1;
    }
    return 0;
}


export { compare } 