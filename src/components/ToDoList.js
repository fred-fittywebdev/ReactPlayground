import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Items from './Items';

const Todo = () => {
    return (
        <div>
            <h1 className="text-center mt-3">Todo-List</h1>
            <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
                <form className="mb-3">
                    <label htmlFor="todo" className="mt-3">Tâches a faire</label>
                    <input type="text" className="form-control" id="todo" />
                    <button className="btn btn-primary mt-2 d-block">Ajouter</button>
                </form>

                <h2>Liste des tâches: </h2>
                <ul className="list-group">
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                </ul>
            </div>
            
        </div>
    );
};

export default Todo;