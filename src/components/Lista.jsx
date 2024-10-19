import ItemLista from "./ItemLista"


function Lista(){
    return(
        <ul>
            {<ItemLista item="HTML5"/>}
            {<ItemLista item="CSS3"/>}
            {<ItemLista item="Java"/>}
            {<ItemLista item="Javascript"/>}
            {<ItemLista item="MySQL"/>}
        </ul>
    )
}

export default Lista