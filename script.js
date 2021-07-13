var output = document.getElementById('text1')
var starting = setTimeout(()=>{
    console.log("10")
    output.innerText = "10"
    setTimeout(()=>{
      console.log("9")
      output.innerText = "9"
      setTimeout(()=>{
          console.log("8")
          output.innerText = "8"
          setTimeout(()=>{
              console.log("7")
              output.innerText = "7"
              setTimeout(()=>{
              console.log("6")
              output.innerText = "6"
              setTimeout(()=>{
                console.log("5");
                output.innerText = "5"
                setTimeout(()=>{
                   console.log("4");
                   output.innerText = "4"
                   setTimeout(()=>{
                    console.log("3")
                    output.innerText = "3"
                    setTimeout(()=>{
                      console.log("2")
                      output.innerText = "2"
                      setTimeout(()=>{
                      console.log("1");
                      output.innerText = "1"
                      setTimeout(()=>{
                       console.log("Happy Independence day");
                       output.innerText = "Happy Independence day"
                    },1000)
                    },1000)
                    },1000)
                },1000)
                },1000)
            },1000)
            },1000)
        },1000)
    },1000)
    },1000)
},1000
)