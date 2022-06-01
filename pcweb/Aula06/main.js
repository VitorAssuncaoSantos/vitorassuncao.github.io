const control = document.getElementById("type")
const forms = document.getElementById("filter")

const img = document.getElementById("cat")

const getFilter = () => forms.value || "none"
const getIntensity = () => control.value || 0

const GetMetric = effects => {
    switch (effects.value) {
        case "blur":
            return "px"
        case "hue-rotate":
            return "deg"
        default:
            return "%";
    }
}

const setFilter = () => {
    const filter = getFilter
    const valueIntensity = getIntensity() + GetMetric(filter)
    img.style.filter = `${filter}+(${valueIntensity})`
}

control.document.addEventListener("click", setFilter)
forms.document.addEventListener("click", setFilter)