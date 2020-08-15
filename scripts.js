const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;
let hoveredList = null;

let answers = {
    "4": ["2", "3"]
};

for (const item of list_items) {

    item.addEventListener("dragstart", () => {
        draggedItem = item;
        console.log(draggedItem);
        setTimeout(() => {
            draggedItem.style.display = 'none';
        });
    });

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedItem.style.display = 'block';
            draggedItem = null;
        });
    });

    for (const list of lists) {

        list.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        list.addEventListener('dragenter', (e) => {
            e.preventDefault();
            hoveredList = list;
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        });

        list.addEventListener('dragleave', (e) => {
            e.preventDefault();
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });

        list.addEventListener('drop', (e) => {
            if (hoveredList != null && draggedItem != null) {
                console.log(hoveredList.id)
                console.log(draggedItem.id)
                if (answers[hoveredList.id] == null
                    || answers[hoveredList.id].includes(draggedItem.id)) {
                    list.append(draggedItem);
                }
            }
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            hoveredList = null;
        });
    }
}