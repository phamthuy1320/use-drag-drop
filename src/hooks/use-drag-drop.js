import { useDrag, useDrop } from "react-dnd";

export const useDragDrop = ({type, data, onChange, onAdd, onRemove}) => {
    const [{preview, isDragging}, drag] = useDrag(() => ({
        type,
        item: () => data,
        end: (draggedItem, monitor) => {
            !monitor.getDropResult() && onRemove(draggedItem)
        },
        collect: (monitor) => ({
            preview: monitor.isDragging() && monitor.getClientOffset()?  {
                position: "fixed",
                left: `${monitor.getClientOffset()?.x + 3}px`,
                top:`${monitor.getClientOffset()?.y + 3}px`,
                opacity: "0.8"
            }: undefined
        })
    }))

    const [, drop] = useDrop(() => ({
        accept: type,
        drop: (dragItem) => {
            console.log({dragItem})
            dragItem?.column? onChange(dragItem): onAdd(dragItem)

            return dragItem;
        }
    }))

    return {
        drag,
        drop,
        preview,
        isDragging,
    }
}