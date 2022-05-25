const control=document.getElementById("type");
const forms=document.getElementById("filter");

const img = document.getElementById("cat");

const getFilter=()=> forms.value || "none";
const getIntensity=()=>control.value || 0;

const GetMetric = effects=>{
    switch (effects.value) {
        case value:
            
            break;
    
        default:
            break;
    }
}

control.addEventListener("change", ()=> {
    value = control.value;
    img.style.filter=forms.value
})

forms.addEventListener("click", ()=>{
    
})
