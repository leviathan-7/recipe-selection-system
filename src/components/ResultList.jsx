const style_pre = {
    fontFamily: 'italic',
    marginLeft: 30,
}

function ResultList(props) {
    return (
        <aside className="aside1" >
            <h3>Список блюд:</h3>
            <div id="listContainer" >
                <pre style = {style_pre}>
                    {props.str}
                </pre>
            </div>
        </aside>
    )
    
}

export {ResultList}; 

