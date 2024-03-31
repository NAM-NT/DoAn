import React ,{Component} from "react";
import {
    StyleSheet,
    Dimensions,

} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const heightPoster = windowWidth/1.8;
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative',    
    },
    headerBox:{
        width:'100%',
        height: 75,
        marginTop:42,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:30,
        alignItems:'center'
    },
    textHeader:{
        color: '#ffff',
        fontSize:18 ,
        fontWeight:'700',
    },
    posterBox:{
        width: windowWidth,
        height:heightPoster,

    },
    poster:{
        width:'100%',
        height:'100%',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    playIcon: {
        position: 'absolute',
        width:55,
        height:55,
        top:(heightPoster-55)/2,
        right:(windowWidth-55)/2,
    },
    infoBox:{
        flexDirection:'row',
        flexWrap:'wrap'

    },
    imgPlace:{
        marginLeft: 36
    },
    smallImg:{
        width:100,
        height:126,
        borderRadius:16,
        marginRight:20
    },
    infoPlace:{
        marginTop:20,
        flex:1
    },
    name:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        marginBottom:10,
    },
    rate:{
        flexDirection:'row'
    },
    ratePoint:{
        marginLeft: 5,
        color:'#FF8700',

    },
    bonusInfo:{
        flexDirection:'row',
        width:windowWidth,
        height:40,
        justifyContent:'space-around',
        marginTop:10,
        paddingHorizontal:40,

    },
    bonusItem:{
        flexDirection:'row',
    },
    bonusText:{
        marginLeft:10,
        color:'#ffff',
        opacity:0.8,
    },
    middleBox:{
        marginTop:5,
    },
    topPic:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        paddingHorizontal:20,

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
    topPicContent:{
        width:'100%',
        height:'auto',
        paddingHorizontal:30,
        marginTop:10,
    },
    texIntroduce:{
        color:'#ffff',
        fontSize: 14,
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