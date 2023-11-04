import * as Facts from "../jsons/facts.json";

let FactsSet = new Set()

const style_ul = {
    border: '1px solid #ccc',
    height: '30px',
    listStyleType: 'none',
}


function FactsList() {

    return (
        <aside className="aside" >
            <h3>Список продуктов:</h3>
            <div id="listContainer" >
                <ul>
                    {Facts.facts.map(f => {
                        return <li style = {style_ul} onMouseEnter = {MakeColor} onMouseLeave = {NoColor} onClick = {ToSet} id={f.id}>{f.name} </li>
                    })}
                </ul>
            </div>
        </aside>
    )
}

export {FactsList}; 

function MakeColor(Event){
    let Elem = Event.target
    Elem.style.border = '2px solid red';
}
function NoColor(Event){
    let Elem = Event.target
    Elem.style.border = '1px solid #ccc';
}

function ToSet(Event){
    let Elem = Event.target 
    let k = Number(Elem.id)

    if(FactsSet.has(k)){
        FactsSet.delete(k)
        Elem.style.backgroundColor = 'white';
    }else{
        FactsSet.add(k)
        Elem.style.backgroundColor = '#00ffff';
    }   
}

export {FactsSet}; 