const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (const item of list_items) {

    item.addEventListener("dragstart", () => {
        draggedItem = item;
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
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        });

        list.addEventListener('dragleave', (e) => {
            e.preventDefault();
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });

        list.addEventListener('drop', (e) => {
            list.append(draggedItem);
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });
    }
}