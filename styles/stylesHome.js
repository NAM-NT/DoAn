import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header :{
        flexDirection:'row',
        width:'100%',
        height:75,
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:'#2222',
        paddingHorizontal:20,

    },
    imgLogo:{
        width:44,
        height:40,
        resizeMode:'contain',
    },
    logo:{
        height:'100%',
        justifyContent:'center',
        
    },
    searchBar:{
        flex: 1,
        backgroundColor:'#fffff',
        marginHorizontal:30,
        justifyContent:'center',
        alignItems:'center,'

        
    },
    searchInput:{
        borderWidth:1,
        borderColor:'#ffff',
        height:40,
        borderRadius:30,
        textAlign:'center',
        color:'#ffff',


        
    },
    searchIcon:{
        position:'absolute',
        right:15

    },
    user:{
        height:'100%',
        justifyContent:'center'

    },
    userIcon:{
        width:40,
        height:40,
        resizeMode:'contain'
    },
    boxSlide:{
        height: 250,
        marginTop:15,

    },
    slideImg:{
        marginLeft:20,
    },
    slideImgItem:{
        marginHorizontal:7,
        borderRadius:16,
    },
    boxCenter:{
        width:'100%',

    },
    topPic:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',

    },
    topPicItem:{
        flexDirection:'column',
        alignItems:'center',
    },
    topPicText:{
        textAlign:'center',
        marginBottom:5,
        color:'#ffff',
    },
    content:{
        marginTop:10,

    },
    contentImgItem:{
        borderRadius:15,
        marginBottom:5,
        width:125,
        height:184,
    },
    BoxbuttonTap:{
        position:'absolute',
        bottom:0,
        backgroundColor:'#2222',
        width:'100%',
        height:80,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        borderColor:'black',
        borderTopWidth:2,
        borderEndEndRadius:30,
    },
    buttonTapItem:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
    textButtonTap:{
        color:'#ffff',

    }
    
    



    
    

    
})

export default styles