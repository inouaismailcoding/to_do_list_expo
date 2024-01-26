import React ,{useState} from "react";
import { Keyboard, Platform, StyleSheet,Text,View } from "react-native";
import Task from "./components/task";
import { KeyboardAvoidingView, TextInput ,TouchableOpacity} from "react-native";

export default function App(){
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);
  const handleAddTask=()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
  }
  const completeTask=(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return(
    <View style={styles.container}> 

    {/* TODAY Task's */}
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today Task's</Text>
      <View style={styles.items}>
        {
          taskItems.map((item,index)=>{
            return (
              <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })
        }
      </View>

    </View>

    {/** Write a Task */}
    
    <KeyboardAvoidingView 
        behavior={Platform.OS ==='ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}> 
        <TextInput style={styles.input} placeholder="Add a Task" value={task} onChangeText={text=>setTask(text)}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>

    
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#E8EAED",
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:"bold",

  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position :'absolute',
    bottom:10, width:'100%',justifyContent:"space-around",flexDirection:'row',alignItems:"center",
},
input:{
    paddingVertical:15,paddingHorizontal:15,backgroundColor:'#fff',
    borderRadius:60,borderColor: "#C0c0c0",
    borderWidth:1,width:250,
},
addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#fff",
    borderRadius:60,justifyContent:'center',alignItems:'center',
    borderColor: "#C0c0c0",
    borderWidth:1,
}
})