const {useState} = require("react");

function Heroes (props) {
    const [names, setNames] = useState([
        "Шерлок Холмс",
        "Доктор Ватсон",
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ])
    const handleDelete = (inx) => {
        const filtered = names.filter((name, index) => {
            if (index === inx)
                return false
            return true
        })
        setNames(filtered)
    }
    return (
        <div>
            {names.map((name, index)=>{
               return (
                   <ul>
                       <li onClick={() => {handleDelete(index)}}>
                           {name}
                       </li>
                   </ul>
               )
            })}
        </div>
    )
}
export default Heroes