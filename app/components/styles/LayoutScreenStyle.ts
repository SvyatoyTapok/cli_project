import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  layoutScreen :{
    backgroundColor: "gray",
    flex:1,
  },
  searchInputContainer:{
    width:'90%',
    height:50,
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    flexDirection:'row',
  },
  searchInput:{
    backgroundColor:'#B8B8B8',
    width:'95%',
    height:38,
    borderRadius:8,
    padding:10,
    fontSize:15,
    color:'white'
  }
})

export default styles