// Gets input from the dom

function getGrade (){
    const text = document.getElementById('Text')
const Grade_Value =parseInt(document.querySelector('Input').value)
if(isNaN(Grade_Value)){
    text.textContent='Please Enter A Number'
}
switch(true){
    case Grade_Value >=90 && Grade_Value<=100:
      text.textContent='A+ Exceptional'
      break;
      case Grade_Value >=80 && Grade_Value <=89:
      text.textContent= "A Excellent"
      break;
      case Grade_Value >=75 && Grade_Value <=79:
        text.textContent= "B+ Very Good"
        break;
        case Grade_Value >=70 && Grade_Value <=74:
            text.textContent= "B Good"
            break;
            case Grade_Value >=65 && Grade_Value <=69:
                text.textContent= "C+ Competent"
                break;
                case Grade_Value >=60 && Grade_Value <=64:
                    text.textContent= "C Fairly Competent"
                    break;
                    case Grade_Value >=55 && Grade_Value <=59:
                        text.textContent= "D+ Passing"
                        break;
                        case Grade_Value >=50 && Grade_Value <=54:
                            text.textContent= "D Marginally Passing"
                            break;

                            case Grade_Value >=40 && Grade_Value <=49:
                                text.textContent= "E Marginally Failing"
                                break;
                                case Grade_Value <=39:
                                    text.textContent= "F Failing"
                                    break;

}
}





//Maps the input using an If/ Else statement in order to output grade
