import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Items from './Items';
import {v4 as uuidv4} from 'uuid';

const Todo = () => {

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4()}, 
        {txt: "Faire mon wod", id: uuidv4()},
        {txt: "Apprendre React", id: uuidv4()}
    ])

    const [stateInput, setStateInput] = useState()

    const deleteElement = id => {
        // console.log(id);
        // on va filtrer le tableau et retounrr les <li></li> dont l'ID est différent de celui sur lequel on clique
        const filterdState = dataArr.filter(item => {
            return item.id !== id
        })
        setDataArr(filterdState)
    }

    const addTodo= e => {
        e.preventDefault()
        //On créé un nouveau tableau pour ne pas modifier celui qui est dans le state
        const newArr = [...dataArr]

        const newTodo = {}
        newTodo.txt = stateInput
        newTodo.id = uuidv4()

        newArr.push(newTodo)
        setDataArr(newArr)
        setStateInput("")

    }

    const linkedInput = e => {
        setStateInput(e);
    }

    return (
        <div>
            <h1 className="text-center mt-3">Todo-List</h1>
            <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
                <form onSubmit={e  => addTodo(e)} className="mb-3">
                    <label htmlFor="todo" className="mt-3">Tâches a faire</label>
                    <input onInput={e => linkedInput(e.target.value)} type="text" className="form-control" id="todo" value={stateInput} />
                    <button className="btn btn-primary mt-2 d-block">Ajouter</button>
                </form>

                <h2>Liste des tâches: </h2>
                <ul className="list-group">
                    {dataArr.map((item) => {
                        return (
                            <Items
                                txt={item.txt}
                                key={item.id}
                                id={item.id}
                                deleteFunction={deleteElement}
                            />
                        )
                    })}
                </ul>
            </div>
            
        </div>
    );
};

export default Todo;