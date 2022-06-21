import { windowHeight, windowWidth } from "../../../utils/Dimentions"
import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    inputContainer: {
        marginBottom:10,
        marginTop:5,
        width: '100%',
        height: windowHeight/15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection:'row',
        alignItems:'center', 
        backgroundColor: '#fff'
    },
    iconStyle:{
        padding:10,
        height: '100%',
        justifyContent:'center',
        alignItems:'center',
        borderRightColor:'#ccc',
        borderRightWidth: 1,
        width:50,
    },
    input:{
        padding:10,
        flex:1,
        fontSize:16,
        color: 'black',
        justifyContent:'center',
        alignItems:'center',

    },
    inputField:{
        padding:10,
        marginTop:5,
        marginBottom:10,
        width: windowWidth / 1.5,
        height:windowHeight/15,
        fontSize:16,
        borderRadius:8,
        borderWidth:1,
    },
})

export default styles