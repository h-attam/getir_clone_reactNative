import { StyleSheet,Dimensions } from "react-native";

const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    headerMain:{
        height:height * 0.064,
        backgroundColor:"#f7d102",
    },
    headerOne:{
        height:height * 0.064,
        width:"80%",
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:"3%",
        borderTopEndRadius:25,
        borderBottomRightRadius:25,
    },
    image:{
        width:20,
        height:20,
    },
    headerOneView:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:8,
        paddingLeft:8,
        borderLeftColor:"#f3f2fd",
        borderLeftWidth:2,

    },
    headertwo:{
        width:"25%",
        height:height * 0.064,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:10,
    }

})

export default styles;