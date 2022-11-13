import React from "react"
import { Flex } from "@chakra-ui/react"
import { useDragDrop } from "./hooks/use-drag-drop";

const eventItemStyle = (props) => ({
    minWidth: "70px",
    minHeight: "70px",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: props.backgroundColor
})

export const EventItem = ({item, onRemove}) => {
    const {drag, preview} = useDragDrop({type: "event-item", data: item, onRemove})

    return <>
        <Flex style={eventItemStyle({backgroundColor: item.color})} ref={drag}>
                {item.type}
            </Flex>
            {preview && <Flex 
            style={{...eventItemStyle({backgroundColor: item.color}), ...preview}} >{item.type}</Flex>}
    </>
  }
  
export const EventList = () => {
    const list = [
      {type: "event-1", color: "blue"},
      {type: "event-2", color: "red"},
      {type: "event-3", color: "brown"},
      {type: "event-4", color: "pink"},
    ]
  
    return <Flex justifyContent="center">
        {list.map((item, index) => <EventItem item={item} key={index}/>)}
      </Flex>
  }
  