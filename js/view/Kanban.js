import Column from "./Column.js";

export default class Kanban {
    constructor(root) {
        this.root = root;

        Kanban.columns().forEach(column => {
            // TODO: create an instance of column class
            const columnView = new Column(column.id, column.title);

            this.root.appendChild(columnView.elements.root);
        })
    }

    static columns() {
        return [
            {
                id : 1,
                title : 'Todo'
            },
            {
                id : 2,
                title : 'Doing'
            },
            {
                id : 3,
                title : 'Done'
            },
        ];
    }
}