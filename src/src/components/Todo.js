import React from 'react'

export function Todo(props){
    return (
        <div>
            <h2 className={props.item.completed ? 'styling': null}
            onClick={(e)=>{e.preventDefault()
            props.toggleItem(props.item.id)}}>
                {props.item.todo}
            </h2>
        </div>
    )
}