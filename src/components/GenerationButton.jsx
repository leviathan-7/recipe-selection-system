import * as Rules from "../jsons/rules.json";
import * as Facts from "../jsons/facts.json";
import {FactsSet} from "./FactsList";
import {ResultList} from "./ResultList";
import { useState, useEffect } from 'react';


let GenSet = new Set()


function GenerationButton() {
    const [str, setStr] = useState([])
    const text = "Выберете продукты❕"
    useEffect(()=>{
        setStr(text)
    },[])

    return (
        <>
        <aside>
            <div>
                <button class="glow-on-hover" type="button" onClick = {Generation}><b>Сгенерировать</b></button>
            </div>
        </aside>
        <ResultList str = {str}/>
        </>
    )


    function Generation(Event){
        GenSet = new Set(FactsSet)
        let WasGenSet = new Set()
        let RecArr = []
        let t = GenSet.size
        let b = true
        let i = 0
        while (b){
            for (let r of Rules.rules) {
                if(IsCan(r)){
                    if(!WasGenSet.has(r.to)){
                        WasGenSet.add(r.to)
                        GenSet.add(r.to)
                        RecArr[i] = r
                        i++
                    }
                }
            }
            b = t !== GenSet.size
            t = GenSet.size
        }
        let str = ""
    
        for (let r of RecArr){
            for (let f of r.from){
                str += ToFood(f) + "; "
            }
            str += "➜ " + ToFood(r.to) + "\n"
        }
    
        if (str === ""){
            str = "Из данного списка продуктов никакое блюдо сделать не получится"
        }
    
        setStr(str)
    }


}

export {GenerationButton}; 


function ToFood(id){
    for (let f of Facts.facts){
        if(f.id === id){
            return f.name
        }
    }
}

function IsCan(rule){
    b = true
    for (let f of rule.from){
        b = b && GenSet.has(f)
    }
    return b
}
