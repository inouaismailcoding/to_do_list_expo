import { StyleSheet ,View,TextInput,TouchableOpacity,Text} from "react-native";


const AddTask=()=>{
    return (    
            <View  
                style={styles.writeTaskWrapper} > 
                <TextInput style={styles.input} placeholder="Add a Task" onChangeText={text=>setTask}/>
                <TouchableOpacity>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
                </TouchableOpacity>
                
            </View>   
    );
}

const styles=StyleSheet.create({
    writeTaskWrapper:{
        position :'absolute',
        bottom:60, width:'100%',justifyContent:"space-around",flexDirection:'row',alignItems:"center",
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
    });
    
    export default AddTask ;
    