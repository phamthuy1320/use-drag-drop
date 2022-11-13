import './App.css';
import { Grid, Flex, Box } from '@chakra-ui/react';
import { EventItem, EventList } from './EventItem';
import { useDragDrop } from './hooks/use-drag-drop';
import { useForm } from './hooks/use-form';

const DropCell = ({onChange, onAdd, onRemove, item}) => {
  const {drop} = useDragDrop({type: "event-item", onChange, onAdd})
  
  return <Flex border={"1px solid black"} ref={drop}>
    {item? <EventItem item={item} onRemove={onRemove}/>: ""}
  </Flex>
}

const DropTable = () => {
  const {getItem, handleAdd, handleChange, handleRemove} = useForm()

  return <Grid
    m={"10px"}
    mx="auto"
    w={"fit-content"}
    border={"1px solid black"}
    gridTemplateColumns={"repeat(10, 70px)"}
    gridTemplateRows={"repeat(5, 70px)"}
  >
   {
    Array(5).fill("").map((_, row) => {
      return Array(10).fill("").map((_, column) => <DropCell key={column} onChange={item => handleChange(item, column, row)} onAdd={item => handleAdd(item, column, row)} item={getItem(column, row)} onRemove={item => handleRemove(item)}/>)
    })
    }
  </Grid>
}

function App() {
  return (
    <Box>
      <EventList/>
      <DropTable/>
    </Box>
  );
}

export default App;
